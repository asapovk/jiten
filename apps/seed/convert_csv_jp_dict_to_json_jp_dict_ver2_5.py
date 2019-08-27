# -*- coding: utf-8 -*-

import csv
import requests
import json
import io
from lxml import html
from bs4 import BeautifulSoup
from googletrans import Translator


def get_google_translation(words):
    translator = Translator()
    text = translator.translate(words, dest='ru', src='en')
    translated_list = [text for text in text]
    translated_words_list = [[w.text for w in lst] for lst in translated_list]
    return translated_words_list

def get_synonyms(writing):
    url = 'https://jisho.org/api/v1/search/words?keyword='+writing
    synonyms = []
    r = requests.get(url)
    r = json.loads(r.text)
    for e in r['data']:
        for word in e['japanese']:
            if 'word' in word:
                synonyms.append(word['word'])
            else:
                continue
    synonyms = list(set(synonyms))
    return synonyms

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

print("[CSV --> JSON DICTIONARY CONVERSION STARTED...]")
with io.open('JDic - JLPT1vocab_test.csv', 'r', encoding="utf8") as csvfile, io.open('jp_ru_dict_test.json', 'w', encoding="utf8") as jsonfile:
    reader = csv.DictReader(csvfile, delimiter = ',', fieldnames=("number", "hiragana", "latintranscription", "writing", "translation", "other", "usage", "synonyms"))

    array = [row for row in reader]
    i = 1

    list_of_elements = []
    for element in array:
        element['translation'] = element['translation'].split(';')
        list_of_elements.append(element['translation'])
    print("[TRANSLATION STARTED...]")
    elements_translated = get_google_translation(list_of_elements)
    print("[TRANSLATION FINISHED!]")

    # <--- ### DEBUG ONLY ###
    print([element['translation'] for element in array])
    print(elements_translated)
    print([element['translation'] for element in array])
    m = 0
    for k in elements_translated:
        m+=1
    print("Number of lists in list: %d" % m)
    s = 0
    for element in array:
        s+=1
    print("Number of elements in array: %d" % s)
    # --->

    for n, element in enumerate(array):
        print(">>> [CONVERTING WORD: %d] >>>" % i)
        element['number'] = int(element['number'])
        element['translation'] = elements_translated[n]

        if len(element['writing']) == 0:
            print("[GETTING SYNONYMS OF WORD: %d]" % i)
            element['synonyms'] = get_synonyms(element['hiragana'])
        else:
            print("[GETTING SYNONYMS OF WORD: %d]" % i)
            element['synonyms'] = get_synonyms(element['writing'])

        if len(element['writing']) == 0:
            element['usage'] = get_usage(element['hiragana'])
            print("[NO WRITING OF WORD: %d]" % i)
            print("[HIRAGANA OF WORD: %d]" % i, element['hiragana'])
        else:
            element['usage'] = get_usage(element['writing'])
            print("[WRITING OF WORD: %d]" % i, element['writing'])
            print("[HIRAGANA OF WORD: %d]" % i, element['hiragana'])
        i+=1

    output = json.dumps(array)
    jsonfile.write(output)
    print("[DICTIONARY CONVERSION IS COMPLETE!]")
