import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

# We are initializing a driver instance here
def init_driver():
	# Chooses firefox as the browser
	driver = webdriver.Firefox()
	# Wait a certain amount of time for an event to occur, setting the param here
	driver.wait = WebDriverWait(driver, 5)
	return driver

# Driver instance and query params are being passed
def lookup(driver, query):
	# Load google
	driver.get('http://www.google.com')
	try:
		# Waits for the query box element to be located
		box = driver.wait.until(EC.presence_of_element_located(
			(By.NAME, "q")))
		# Wait for button to be clickable Located by name on both
		button = driver.wait.until(EC.element_to_be_clickable(
			(By.NAME, "btnK")))
		# Send query and search, by clicking
		box.send_keys(query)
		button.click()
	# If shit breaks do this
	except TimeoutException:
		print("Box or Button not found in google.com")

# and then well run the thing and quit
if __name__ == "__main__":
	driver = init_driver()
	lookup(driver, "Selenium")
	time.sleep(5)
	driver.quit()

"""
	THIS BELOW IS JUST CODE FOR USING, THIS CODE WILL NOT ACTUALLY RUN
"""


# INITIALIZE DRIVER
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
 
driver = webdriver.Firefox()
driver.wait = WebDriverWait(driver, 5)
 
 
# WAIT FOR ELEMENTS
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
 
element = driver.wait.until(
    EC.presence_of_element_located(
    EC.element_to_be_clickable(
    EC.visibility_of_element_located(
        (By.NAME, "name")
        (By.ID, "id")
        (By.LINK_TEXT, "link text")
        (By.PARTIAL_LINK_TEXT, "partial link text")
        (By.TAG_NAME, "tag name")
        (By.CLASS_NAME, "class name")
        (By.CSS_SELECTOR, "css selector")
        (By.XPATH, "xpath")
    )
)
 
 
# CATCH EXCEPTIONS
from selenium.common.exceptions import
    TimeoutException
    ElementNotVisibleException