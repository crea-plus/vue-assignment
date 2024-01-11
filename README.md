# CREAPlus Vue assignment
Make a simple Phonebook app in Vue.js.

Fork this starter project repo, make the app according to the specification below and then submit a Pull Request. We will get back to you with feedback.

Limit yourself to 1 or at most 2 hours of work. You do not have to finish all the requirements - after an hour is up, check the state of your work, finish up what you are doing and submit a PR. Focus on a small set of features and make those work well, write clean code and make use of appropriate design principles. This is more important than finishing everything. On the other hand if you find the task too simple and finish early, feel free to surprise us with some additional features.

### Stack
You are encouraged to use the provided tech stack outlined below. However, you can switch out any dependencies if you would like to use something else. Or you can just start from scratch - you do you! The only limit is to stick to Vue.js (2 or 3).

| Name         | What it does                                      |
|--------------|---------------------------------------------------|
| Vue 3        | The framework                                     |
| Typescript   | Strongly typed JS                                 |
| Vite         | Officially recommended build tool for Vue 3       |
| Pinia        | Officially recommended state management for Vue 3 |
| Tailwind CSS | CSS framework                                     |
| Axios        | HTTP client for making AJAX requests              |
| Fontawesome  | Icons                                             |
| ESLint       | Static code analysis                              |


### Core Requirements
The app should have two views:

- List View
    - a scrollable list of phonebook entries
    - each entry contains a profile pic (a circle with the person's initials), full name and phone number
    - a search bar that filters the list to only entries that contain the search query in the person's name
    - clicking a person opens the detail view
- Detail View
    - a form with editable input fields for all data pertaining to a single person

The data to be displayed should be fetched from our mock API, documented below.

The app should use responsive design and should work on display sizes down to 300 px.


### Overachiever Features
If you are very fast, you can implement some of these additional features. Of course if you have your own ideas you can do those instead.

- Add the ability to change the sorting order (ascending or descending) in the list view.
- In the list view display a star next to names of people that are marked as favorite. The favorites should always be on top of the list.
- Add a Delete button in detail view. Upon clicking it, make the appropriate request to the API and display a toast feedback message that disappears after a few seconds. (The person will not actually be deleted, it should still show up in the list since this is a mock api)
- Add some unit tests or e2e tests for the search functionality. We recommend using Cypress.


### API specification
api url: https://creaplus.free.beeceptor.com

The api only has 2 endpoints. It is a mock api - it always returns the same response, the data is static and not editable. It is limited to 50 requests per day - working around this limit is part of the challenge :P

`GET /persons` returns a list of all persons in the phonebook.
Example response:
```
[
    {
        "id": 1,
        "first_name": "Ruben",
        "last_name": "Wooler",
        "phone_number": "419-240-1934",
        "favorite": false
    },
    {
        "id": 2,
        "first_name": "Errol",
        "last_name": "Phillippo",
        "phone_number": "250-354-8102",
        "favorite": false
    }
]
```


`DELETE /persons` deletes a person from the phonebook.
Example response:
```
{ "success": true}
```

### Icons
Fontawesome icons are already imported. Add new icons to the local library in `src/services/icons.service.ts` and then you can use the official Fontawesome Vue component like so:
``` vue
<font-awesome-icon icon="fa-solid fa-user" size="2xl" />
```

### Project Setup

```sh
npm install
npm run dev
```
