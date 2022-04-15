import requests
import re

from stolen_waffle_game.models import Puzzle


def get_todays_answer():
    """Download the daily js file, strip the code, save it to the db"""
    js = requests.get('https://wafflegame.net/daily.js').text
    code = _parse_js_to_hash(js)
    p = Puzzle(secret_code=code)
    p.save()


def _parse_js_to_hash(js):
    match = re.match(r".*`(.*)`", js)
    return match.group(1)
