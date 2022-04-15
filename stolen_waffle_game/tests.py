from django.test import SimpleTestCase

from .cron import _parse_js_to_hash


# Create your tests here.
class PuzzleDownloadTest(SimpleTestCase):
    def test_it_can_parse_out_the_hash_string(self):
        # we're downloading a js file with 1 line
        sample_response = "window.waffle = `this_would_be_a_long_hash_string`"
        code = _parse_js_to_hash(sample_response)
        # essentially, strip out the window.waffle declaration
        self.assertEqual(code, 'this_would_be_a_long_hash_string')
