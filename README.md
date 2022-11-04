# PIN pad app created using Vanilla Javascript

The task that has been entrusted to you is to make a **Pinpad**,
where an access pin is set only once (the first time you access
the site) and where you will be asked for that same pin the next
time you access in order to continue.

- _You should not use frameworks_, neither for the JS nor for the CSS
  part. The requirements are to use just vanilla code.
- The design has to be responsive and mobile first.
- You should use the less graphic assets as possible and reduce their
  load.
- For the css part you will need to use a css preprocessor, in this case
  **Sass**.
- The code must be neat, clean and the folders well structured.
- We recommend using a naming convention such as **BEM**.
- SEO good practices will be considered.

## Navigation Flow

1. The user lands on the page and a modal dialog is displayed
   welcoming him and explaining that she has to set a pin code
   and press the save button. Once the modal dialog is closed on
   the cross icon, the user will be able to click on the LCD screen
   of the Pinpad and enter the text as well as use the number
   buttons to enter it.

- Neither alphabetic text nor signs will be valid, only numbers.
- The SAVE button sets the pin.
- The C button clears the entered text.
- The LCD screen will show a validation text, **SAVED** if everything
  goes well, **ERROR** if it has not been possible to save it and **NOT A
  NUMBER** if the validation fails.

2. Once the pin is set, another modal will be displayed,
   announcing to the user that to access they must enter the
   previously set pin. The user will have **3 attempts** to enter their
   pin correctly, a yellow dialog bar will alert the user of the
   remaining attempts, when there are no more attempts, the
   page will redirect to https://policia.es/ and in the event that
   the code is correct will redirect to https://www.codebayinnovation.com/
