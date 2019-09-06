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

def create_word(writing, translation, romaji, hiragana, usage, usageMeaning, usageDifference, usageWatsay, usageOther):
  result = client.execute(query = '''
  mutation createWord (
    $writing: String!
    $translation: [String!]!
    $usage: [WordUsageCreateInput]
    $usageMeaning: [WordUsageCreateInput]
    $usageDifference:[WordUsageCreateInput]
    $usageWatsay:[WordUsageCreateInput]
    $usageOther:[WordUsageCreateInput]
    $hiragana: String!
    $romaji: String!  
    ){
    createWord (input: {
      writing: $writing,
      translation: $translation
      hiragana: $hiragana
      romaji: $romaji
      usage: $usage
      usageMeaning: $usageMeaning
      usageDifference: $usageDifference
      usageWatsay: $usageWatsay
      usageOther: $usageOther
    }) {
        id
        writing
    }
  }
  ''', variables={
        "writing": writing,
        "translation": translation,
        "usage": usage,
        "usageMeaning": usageMeaning,
        "usageDifference": usageDifference,
        "usageWatsay": usageWatsay,
        "usageOther": usageOther,    
        "hiragana": hiragana,
        "romaji": romaji
  })
  print(result)

def get_usage(writing):
    url = 'https://hinative.com/ja/dictionaries/'+writing
    return get_page_element_list(get_html(url))


def get_usage_meaning(writing):
    url = 'https://hinative.com/ja/dictionaries/'+writing
    return get_page_element_list_meaning(get_html(url))


def get_usage_difference(writing):
    url = 'https://hinative.com/ja/dictionaries/'+writing
    return get_page_element_list_difference(get_html(url))

def get_usage_watsay(writing):
    url = 'https://hinative.com/ja/dictionaries/'+writing
    return get_page_element_list_watsay(get_html(url))

def get_usage_other(writing):
    url = 'https://hinative.com/ja/dictionaries/'+writing
    return get_page_element_list_other(get_html(url))        


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

def get_page_element_list_meaning(html):
    soup = BeautifulSoup(html, 'lxml')
    
    if soup.find('li', id="title_meaning") is None:
        return None
    else:
        element_list = soup.find('li', id="title_meaning").find_all('ol')
        elements = []
        for element in element_list:
            element_question = element.find('li', class_="question").find('p').text
            element_answer = element.find('li', class_="answer").find('p').text
            elements.append({'question': element_question.replace('\n', '').replace('\r', '').strip(), 'answer': element_answer.replace('\n', '').replace('\r', '').strip()})
        return elements

def get_page_element_list_difference(html):
    soup = BeautifulSoup(html, 'lxml')
    
    if soup.find('li', id="title_difference") is None:
        return None
    else:
        element_list = soup.find('li', id="title_difference").find_all('ol')
        elements = []
        for element in element_list:
            element_question = element.find('li', class_="question").find('p').text
            element_answer = element.find('li', class_="answer").find('p').text
            elements.append({'question': element_question.replace('\n', '').replace('\r', '').strip(), 'answer': element_answer.replace('\n', '').replace('\r', '').strip()})
        return elements

def get_page_element_list_watsay(html):
    soup = BeautifulSoup(html, 'lxml')
    
    if soup.find('li', id="title_watsay") is None:
        return None
    else:
        element_list = soup.find('li', id="title_watsay").find_all('ol')
        elements = []
        for element in element_list:
            element_question = element.find('li', class_="question").find('p').text
            element_answer = element.find('li', class_="answer").find('p').text
            elements.append({'question': element_question.replace('\n', '').replace('\r', '').strip(), 'answer': element_answer.replace('\n', '').replace('\r', '').strip()})
        return elements

def get_page_element_list_other(html):
    soup = BeautifulSoup(html, 'lxml')
    
    if soup.find('li', id="title_other") is None:
        return None
    else:
        element_list = soup.find('li', id="title_other").find_all('ol')
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
    with io.open('JDic-JLPT1vocab.csv', 'r', encoding="utf8") as csvfile:
        reader = csv.DictReader(csvfile, delimiter = ',', fieldnames=("number", "hiragana", "latintranscription", "writing", "translation", "other", "usage", "usage_meaning", "usage_difference", "usage_watsay", "usage_other"))

        array = [row for row in reader]
        i=0
        for n, element in enumerate(array):
            i+=1
            if i > 5467:    
                print(">>> [CONVERTING WORD: %d] >>>" % i)
                element['number'] = int(element['number'])
                element['translation'] = get_google_translation(element['translation']).split(';')

                if len(element['writing']) == 0:

                    us = get_usage(element['hiragana'])
                    element['usage'] = us

                    us_meaning = get_usage_meaning(element['hiragana'])
                    element['usage_meaning'] = us_meaning

                    us_difference = get_usage_difference(element['hiragana'])
                    element['usage_difference'] = us_difference

                    us_watsay = get_usage_watsay(element['hiragana'])
                    element['usage_watsay'] = us_watsay

                    us_other = get_usage_other(element['hiragana'])
                    element['usage_other'] = us_other

                    if us == None:   
                        element['usage'] = [{'question': " ", 'answer': " "}]

                    if us_meaning == None:   
                        element['usage_meaning'] = [{'question': " ", 'answer': " "}]

                    if us_difference == None:   
                        element['usage_difference'] = [{'question': " ", 'answer': " "}]

                    if us_watsay == None:   
                        element['usage_watsay'] = [{'question': " ", 'answer': " "}]

                    if us_other == None:   
                        element['usage_other'] = [{'question': " ", 'answer': " "}]

                    print("Usage is ")    
                    print(element['usage'])
                    print("[NO WRITING OF WORD: %d]" % i)
                    print("[HIRAGANA OF WORD: %d]" % i, element['hiragana'])
                else:
                    us = get_usage(element['writing'])
                    element['usage'] = us

                    us_meaning = get_usage_meaning(element['writing'])
                    element['usage_meaning'] = us_meaning

                    us_difference = get_usage_difference(element['writing'])
                    element['usage_difference'] = us_difference

                    us_watsay = get_usage_watsay(element['writing'])
                    element['usage_watsay'] = us_watsay

                    us_other = get_usage_other(element['writing'])
                    element['usage_other'] = us_other

                    if us == None:   
                        element['usage'] = [{'question': " ", 'answer': " "}]

                    if us_meaning == None:   
                        element['usage_meaning'] = [{'question': " ", 'answer': " "}]

                    if us_difference == None:   
                        element['usage_difference'] = [{'question': " ", 'answer': " "}]

                    if us_watsay == None:   
                        element['usage_watsay'] = [{'question': " ", 'answer': " "}]

                    if us_other == None:   
                        element['usage_other'] = [{'question': " ", 'answer': " "}]

                    print("Usage meaning is ")  
                    print(element['usage_meaning'])
                    print("[WRITING OF WORD: %d]" % i, element['writing'])
                    print("[HIRAGANA OF WORD: %d]" % i, element['hiragana'])

                create_word(element['writing'], element['translation'], element['latintranscription'], element['hiragana'], element['usage'],  element['usage_meaning'], element['usage_difference'], element['usage_watsay'], element['usage_other'])
           # break
            
        #output = json.dumps(array)
        #jsonfile.write(output)
        print("[DICTIONARY CONVERSION IS COMPLETE!]")


if __name__ == '__main__':
    #create_word()
    process()
    #result = get_google_translation(["list", "fag"])
    #print(result)

