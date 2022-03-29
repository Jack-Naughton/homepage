from urllib.request import urlopen
import json

from evan_chess.models import Answer

CHESS_ANSWER_URL = 'https://d1vwq1uqg5c4bn.cloudfront.net/'


def get_todays_answer():
    string = urlopen('https://d1vwq1uqg5c4bn.cloudfront.net/').read().decode('utf-8')
    decode = json.loads(string)
    Answer.objects.update_or_create(json=decode)
    pass
