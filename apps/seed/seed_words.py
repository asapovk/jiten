from graphqlclient import GraphQLClient
from numpy import genfromtxt
from operator import itemgetter

client = GraphQLClient('http://localhost:4000/graphql')

def create_word():
  result = client.execute('''
  mutation {
    createWord (input: {
      writing: "testWritiong2",
      translation: ["testTranslation1", "testTranslation2"]
      hiragana: "testHiragana"
      romaji: "Mrs",
      usage: [{question: "testQuestion", answer: "testAnswer"}]
    }) {
      id
      writing
    }
  }
  ''')
  print(result)

if __name__ == '__main__':
  create_word()
