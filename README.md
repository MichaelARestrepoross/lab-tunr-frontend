# Tuner FrontEnd

![](https://media4.giphy.com/media/4T7zBzdeNEtjThYDWn/giphy.gif?cid=790b76114ee03ef7f860492a9083d77f86191a7bf340002c&rid=giphy.gif&ct=g)

## Tuner Backend

[Backend link](https://github.com/MichaelARestrepoross/lab-tunr-backend)

## Getting Started

- keep the backend running

- `fork` this repository

- `clone` this repo inside the `tunr-fullstack-lab`

- you may change the name of the repo to `tunr-frontend` if you like

- `cd` into the repo

- `npm install`
  `tunr-fullstack-lab`
  > _Note_: Remember to `git add`, `git commit` and `git push` regularly

Using the Tunr API that you built, you are going to create the frontend to this app.

Don't forget to keep your backend API running during this build.

#### Nav Bar

At the top of your app you should have a navigation bar.

- It displays a links to the route (`/songs`) at the top of the page.

Your app should also include the following routes:

<hr />

### `/songs`

- Displays a list of `song.title`, `song.is_favorite`, `song.artist` and `song.time` that are clickable to take the user to **`/songs/:id`** IMPORTANT - be sure it goes to the song's `id` **NOT** the array position. Since we are now using a database you should use the `id`.
- Has a button that takes users to the `/songs/new` view

<details><summary>Inspiration</summary>

![](./assets/index.png)

</details>

**IMPORTANT**

Your page should

### `/songs/:index`

- Displays the details of each song
  - name
  - artist
  - album
  - is_favorite
  - time
- Displays two buttons

  - <kbd>back</kbd>, takes the user back to the `/songs` view
  - <kbd>delete</kbd>, deletes the log and takes the user back to the `/songs` view

- button for `edit` - which takes the user to the edit form for this song

<details><summary>Inspiration</summary>

![](./assets/show.png)

</details>

### `/songs/new`

- Displays a form with the following inputs and appropriate labels:

  - name (text)
  - artist (text)
  - album (text)
  - is_favorite (boolean)
  - time (text)

<details><summary>Inspiration</summary>

![](./assets/new.png)

</details>

## Delete Functionality

Make this functionality available on the show page

## Edit Functionality

Make a link to the edit form on the show page

- Add an edit route `/songs/:id/edit`
- Add an edit form that is pre-filled with the log to edit

<details><summary>Inspiration</summary>

![](./assets/edit.png)

</details>

### Bonuses

- Style the app using vanilla CSS, bootstrap, react-bootstrap, tailwind or another framework of your choice
- Make the app responsive
- It's annoying to have to use the edit form in order to update whether a song `is_favorite` or not. Make the star ⭐️ clickable from the Index page to toggle the value (both front and back end)
- add a 404 page
- add functionality that when a user presses the delete button a confirmation appears first

### SUBMISSION

Paste a link to this Frontend repo in your Backend repo README.md file underneath the title.
You will submit a link to your backend repo in Canvas.
