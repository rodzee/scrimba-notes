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

## Fourth Challenge

1. When the user edits a note, reposition
   it in the list of notes to the top of the list

> Result to complete on my own `Close, but no cigar 🤦🥲`

## Fifth Challenge

1. Complete and implement the deleteNote function

   **_Hint 1:_** _What array method can be used to return a new
   array that has filtered out an item based
   on a condition?_

   **_Hint 2:_** _Notice the parameters being based to the function
   and think about how both of those parameters
   can be passed in during the onClick event handler_

> Result to complete on my own `Once again, so close 😭`

## Sixth Challenge

1. Add createdAt and updatedAt properties to the notes
   When a note is first created, set the `createdAt` and `updatedAt`
   properties to `Date.now()`. Whenever a note is modified, set the
   `updatedAt` property to `Date.now()`.

2. Create a new `sortedNotes` array (doesn't need to be saved
   in state) that orders the items in the array from
   most-recently-updated to least-recently-updated.
   This may require a quick Google search.

> Result to complete on my own `Try to guess it just by looking at the emoji 😭`

## Seventh Challenge

1. Set up a new state variable called `tempNoteText`. Initialize
   it as an empty string.
2. Change the Editor so that it uses `tempNoteText` and
   `setTempNoteText` for displaying and changing the text instead
   of dealing directly with the `currentNote` data.
3. Create a useEffect that, if there's a `currentNote`, sets
   the `tempNoteText` to `currentNote.body`. (This copies the
   current note's text into the `tempNoteText` field so whenever
   the user changes the currentNote, the editor can display the
   correct text.
4. Create an effect that runs any time the tempNoteText changes
   Delay the sending of the request to Firebase

> Result to complete on my own `I will need to go through the code again, for sure!`
