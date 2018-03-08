"""
    Will write a similar script to just run so you can write for loops
    But this will explain stuff in the best way
"""


import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys


# This will run at launch
class PythonOrgSearch(unittest.TestCase):
    # driver is Firefox()
    def setUp(self):
        self.driver = webdriver.Firefox()

    # the actual script that needs to be run
    def test_search_in_python_org(self):
        driver = self.driver

        # Name of the website, it might be CRM-demo.com or wahtever or localhost:8000
        driver.get("PLACE_WEBSITE_HERE")

        # Not necessary but a check basically to see the actual title of the page (index.html<title>)
        self.assertIn("TITLE_HERE", driver.title)

        # This function can be replaced with ID, class etc. 
        # See: http://selenium-python.readthedocs.io/locating-elements.html#locating-elements
        elem = driver.find_element_by_name("q")

        # This types into an input field and press ENTER
        # There are more possible functions that can do things
        # See:http://selenium-python.readthedocs.io/navigating.html#interacting-with-the-page
        # Most simply those elem.click()
        elem.send_keys("pycon")
        elem.send_keys(Keys.RETURN)


    # Alright shutdown when finished
    def tearDown(self):
        self.driver.close()
# Well... it does the test

if __name__ == "__main__":
    unittest.main()