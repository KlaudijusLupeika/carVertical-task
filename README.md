# TASK
We have a fresh application called carVertical (Links: Android; iOS). Download and use it for the following tasks, just let us know your device.

## Task 1

Write test cases in your preferred way for the VIN input screen (the specific screen will be shown in the next slide).

Time box yourself for no more than 30 minutes and explore the app. Note some improvements or bugs that you will find along the way.

## Task 2

Write a test that will:
 - Visit carVertical
 - In the VIN form, submit SALLAAA146A396339 VIN
 - Once precheck has loaded, pick 3-report package
 - On the checkout page, apply qahomework voucher
 - Validate that the total price is shown correctly

## Task 3

You heard from a coworker that his friend was not able to login to the carVertical application this morning. 
hare your thoughts on the situation and what actions you would take.


# ANSWER

## Task 1

Device used for testing: iPhone 13, iOS 16.0.2.

1. Valid VIN Test:

 - Input: A valid 17-character VIN number.
 - Expected Output: The application should display accurate information about the automobile, including make, model, year, and any historical records.


2. Invalid VIN Test:

 - Input: An invalid or improperly formatted VIN number.
 - Expected Output: The application should provide an error message indicating that the VIN is not valid.


3. Empty Input Test:

 - Input: Leaving the VIN or car plate number field empty.
 - Expected Output: The application should prompt the user to enter a valid VIN or car plate number.


4. Change language Test:

 - Input: Change the language of the application.
 - Expected Output: All content is translated to selected language.


5. Change country Test:

 - Input: Change the country (e.x. Great Britain) within the application.
 - Expected Output: An option to check by plate number is available.


6. Invalid Car Plate Number Test:

 - Input: An invalid or improperly formatted car plate number.
 - Expected Output: The application should provide an error message indicating that the car plate number is not valid.


7. Valid Car Plate Number Test:

 - Input: A valid car plate number.
 - Expected Output: The application should display accurate information about the automobile, including make, model, year, and any historical records.


8. Login via Email Test:

 - Input: Login to application using email and password.
 - Expected Output: User is logged in to the application.


9. Login via social providers Test:

 - Input: Login to application using social providers.
 - Expected Output: User is logged in to the application.

...etc

## Task 2

To start:

 - npm i
 - npx playwright test
 - npx playwright show-report

## Task 3

I would:

- Request more information about the issue, such as the specific error messages or any unusual behaviors observed during the login process.
- Gather information about the device and OS version used.
- Verify if there are any known system outages, technical issues, or maintenance activities on the carVertical platform that might be affecting login functionality.
- If my coworker can provide specific details about the problem, I would attempt to reproduce the issue myself using test credentials in a controlled testing environment. This step will help me understand the problem firsthand and verify its existence.
- If reporduced, I would inform the appropriate teams within carVertical, including the development and technical support teams, about the reported login issue.
- Coordinate with the technical support team to share the information and context regarding the issue. Assist in testing the fix.
