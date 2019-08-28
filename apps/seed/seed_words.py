# -*- coding: utf-8 -*-
import csv
import requests
import json
import io
import os

from os.path import join, dirname
from dotenv import load_dotenv
from lxml import html
from bs4 import BeautifulSoup
from googletrans import Translator
from graphqlclient import GraphQLClient

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)
client = GraphQLClient('http://localhost:4000/graphql')

def create_word(writing, translation, romaji, hiragana, usage):
  result = client.execute(query = '''
  mutation createWord (
    $writing: String!
    $translation: [String!]!
    $usage: [WordUsageCreateInput]
    $hiragana: String!
    $romaji: String!  
    ){
    createWord (input: {
      writing: $writing,
      translation: $translation
      hiragana: $hiragana
      romaji: $romaji
      usage: $usage
    }) {
        id
        writing
    }
  }
  ''', variables={
        "writing": writing,
        "translation": translation,
        "usage": usage,
        "hiragana": hiragana,
        "romaji": romaji
  })
  print(result)

def get_usage(writing):
    url = 'https://hinative.com/ja/dictionaries/'+writing
    return get_page_element_list(get_html(url))

def get_html(url):
    page = requests.get(url)
    return page.text

def get_page_element_list(html):
    soup = BeautifulSoup(html, 'lxml')

    if soup.find('li', id="title_example") is None:
        return None
    else:
        element_list = soup.find('li', id="title_example").find_all('ol')
        elements = []
        for element in element_list:
            element_question = element.find('li', class_="question").find('p').text
            element_answer = element.find('li', class_="answer").find('p').text
            elements.append({'question': element_question.replace('\n', '').replace('\r', '').strip(), 'answer': element_answer.replace('\n', '').replace('\r', '').strip()})
        return elements


def get_google_translation(list):
    #translator = Translator()
    #text = translator.translate(words, dest='ru', src='en')
    #translated_list = [text for text in text]
    #translated_words_list = [[w.text for w in lst] for lst in translated_list]

    key = os.environ.get("GOOGLE_API_KEY")
    #print(key)
    trl = requests.post('https://translation.googleapis.com/language/translate/v2', data={'q': list, 'target': 'ru', 'key': key})
    translation = json.loads(trl.text)['data']['translations'][0]['translatedText']
    #print(translation)
    #return translated_words_list
    return translation

def process():
    print("[CSV --> JSON DICTIONARY CONVERSION STARTED...]")
    with io.open('JDic - JLPT1vocab_test.csv', 'r', encoding="utf8") as csvfile:
        reader = csv.DictReader(csvfile, delimiter = ',', fieldnames=("number", "hiragana", "latintranscription", "writing", "translation", "other", "usage", "synonyms"))

        array = [row for row in reader]
        i = 1

        #list_of_elements = []
        #for element in array:
        #    element['translation'] = element['translation'].split(';')
        #    list_of_elements.append(element['translation'])
        #print("[TRANSLATION STARTED...]")
        #elements_translated = get_google_translation(list_of_elements)
        #print("[TRANSLATION FINISHED!]")

        # <--- ### DEBUG ONLY ###
        #print([element['translation'] for element in array])
        #print(elements_translated)
        #print([element['translation'] for element in array])
        #m = 0
        #for k in elements_translated:
        #    m+=1
        #print("Number of lists in list: %d" % m)
        #s = 0
        #for element in array:
        #    s+=1
        #print("Number of elements in array: %d" % s)
        # --->

        for n, element in enumerate(array):
            print(">>> [CONVERTING WORD: %d] >>>" % i)
            element['number'] = int(element['number'])
            element['translation'] = get_google_translation(element['translation']).split(';')

            if len(element['writing']) == 0:

                us = get_usage(element['hiragana'])
                element['usage'] = us
                if us == None:   
                    element['usage'] = [{'question': " ", 'answer': " "}]
                print("Usage is ")    
                print(element['usage'])
                print("[NO WRITING OF WORD: %d]" % i)
                print("[HIRAGANA OF WORD: %d]" % i, element['hiragana'])
            else:
                us = get_usage(element['writing'])
                element['usage'] = us
                if us == None:   
                    element['usage'] = [{'question': " ", 'answer': " "}]
                print("Usage is ")  
                print(element['usage'])
                print("[WRITING OF WORD: %d]" % i, element['writing'])
                print("[HIRAGANA OF WORD: %d]" % i, element['hiragana'])
            i+=1

            create_word(element['writing'], element['translation'], element['latintranscription'], element['hiragana'], element['usage'])
           # break
            
        #output = json.dumps(array)
        #jsonfile.write(output)
        print("[DICTIONARY CONVERSION IS COMPLETE!]")


if __name__ == '__main__':
    #create_word()
    process()
    #result = get_google_translation(["list", "fag"])
    #print(result)

