# odin-library
TOP's Project: Library

Create a library that stores books


Notes:
- when using a callback function in an element.addEventListener, 'this' will refer to the 'element' or the 'event.target'. However, using arrow functions will refer 'this' to the global window context.

- for text/numeric inputs their content will come from 'element.value', while for checkboxes, their on/off state should be checked using 'element.checked'.

- to reset the form to a blank state, use .reset():

let form = document.querySelector('form');
...
form.reset();