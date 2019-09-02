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

def create_kanji(writing, translation, on, kun):
  result = client.execute(query = '''
  mutation createKanji (
    $writing: String!
    $meaning: [String!]!
    $kun: [String!]!
    $on: [String!]!  
    ){
    createKanji (input: {
      writing: $writing,
      meaning: $meaning
      kun: $kun
      on: $on
    }) {
        id
        writing
        meaning
    }
  }
  ''', variables={
        "writing": writing,
        "meaning": translation,
        "on": on,
        "kun": kun,
  })
  print(result)


def get_google_translation(list):
    key = os.environ.get("GOOGLE_API_KEY")
    trl = requests.post('https://translation.googleapis.com/language/translate/v2', data={'q': list, 'target': 'ru', 'key': key})
    translation = json.loads(trl.text)['data']['translations'][0]['translatedText']
    return translation

def process():
    print("[CSV --> JSON DICTIONARY CONVERSION STARTED...]")
    with io.open('JDic-JLPTkanji_test.csv', 'r', encoding="utf8") as csvfile:
        reader = csv.DictReader(csvfile, delimiter = ',', fieldnames=("number", "writing", "on", "on_romaji", "kun", "kun_romaji", "translation", "shit"))

        array = [row for row in reader]
        i = 1

        for n, element in enumerate(array):
            print(">>> [CONVERTING KANJI: %d] >>>" % i)
            element['number'] = int(element['number'])
            element['translation'] = get_google_translation(element['translation']).split(';')
            element['on'] = element['on'].split(' ')
            element['kun'] = element['kun'].split(' ')
            
            i+=1

            create_kanji(element['writing'], element['translation'], element['on'], element['kun'])
            #break
        print("[KANJI DICTIONARY CONVERSION IS COMPLETE!]")


if __name__ == '__main__':
    #create_word()
    process()
    #result = get_google_translation(["list", "fag"])
    #print(result)
