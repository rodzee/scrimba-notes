# Notes App Project - Scrimba Course

## First Challenge

1. Every time the `notes` array changes, save it
   in localStorage. You'll need to use JSON.stringify()
   to turn the array into a string to save in localStorage.

2. When the app first loads, initialize the notes state
   with the notes saved in localStorage. You'll need to
   use JSON.parse() to turn the stringified array back
   into a real JS array.

> Result to complete on my own `Fail 🥲`

## Second Challenge

1. Lazily initialize our `notes` state so it doesn't
   reach into localStorage on every single re-render
   of the App component

> Result to complete on my own `Success 😀`

## Third Challenge

1. Try to figure out a way to display only the
   first line of note.body as the note summary in the
   sidebar.

   **_Hint 1:_** _note.body has "invisible" newline characters
   in the text every time there's a new line shown. E.g.
   the text in Note 1 is:
   "# Note summary\n\nBeginning of the note"_

   **_Hint 2:_** _See if you can split the string into an array
   using the "\n" newline character as the divider_

> Result to complete on my own `Success 😀`
