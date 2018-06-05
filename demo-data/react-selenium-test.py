"""
    Will write a similar script to just run so you can write for loops
    But this will explain stuff in the best way
"""


import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time


# This will run at launch
class PythonOrgSearch(unittest.TestCase):
    # driver is Firefox()
    def setUp(self):
        self.driver = webdriver.Firefox()

    # the actual script that needs to be run
    def test_search_in_python_org(self):
        driver = self.driver

        # Name of the website, it might be CRM-demo.com or wahtever or localhost:8000
        driver.get("https://pendo-io.atlassian.net/secure/RapidBoard.jspa?rapidView=47&projectKey=APP&view=planning.nodetail&selectedIssue=IDEV-11360")

        # Not necessary but a check basically to see the actual title of the page (index.html<title>)
        # self.assertIn("Bug Triage", driver.title)

        # This function can be replaced with ID, class etc.
        # See: http://selenium-python.readthedocs.io/locating-elements.html#locating-elements
        elem1 = driver.find_element_by_id("one")
        elem2 = driver.find_element_by_id("two")
        elem3 = driver.find_element_by_id("three")

        # This types into an input field and press ENTER
        # There are more possible functions that can do things
        # See:http://selenium-python.readthedocs.io/navigating.html#interacting-with-the-page
        # Most simply those elem.click()
        for x in range(0,3):
            elem1.click()

        for x in range(0,6):
            elem2.click()

        for x in range(0,9):
            elem3.click()

    # Alright shutdown when finished

    def tearDown(self):
        time.sleep(5)
        self.driver.close()
# Well... it does the test

if __name__ == "__main__":
    unittest.main()
