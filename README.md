# NgExercise

Modus Create Interview Assignment.

[Live Website](https://modus-create-angular.web.app)

## Part 1

Create a lazy loaded page that lists users via a component named: 'users-list'. Use https://reqres.in/ to get 12 users and display them in a list on that page. The properties to be shown for each user should include: First Name and Last Name.

### Solution:

I generated a new module called "users" with the CLI. I also generated a users component, users-list component, and user-detail component.

All of these components are in a module that is only loaded when navigating to "/users" route for the first time.

I created a users service to contain network request logic for fetching all users and fetching a single user.

This service is used in the users-list to fetch 12 users and display them in the html template using async pipe.

## Part 2

On click of any of the users, the app should navigate to the user detail page via a component named: 'user-detail'. The url should contain the user id. There should be a back button on the user detail page so one can go back to the user list page. The properties to be shown should include: Avatar, First Name, Last Name and Email. Here is a link to the user page: users route

### Solution

I created a "user-detail" route that takes a query parameter for the user id. The id is used to fetch a single user and display on the screen. I added a fancy SVG/CSS animation that may look familiar to the home button on this page :)

## Part 3

The HOME page currently has two components: 'app-header' and 'app-content'. The end user can log in from each of the two components, but the state in these components are not synced. I.e. if the user logs in/out from the app-header, the app-content doesn't get notified. Go to home route and implement the logic to notify the 'app-header' component and the 'app-content' component when the user logs in and logs out of the app from either of the two components.

### Solution:

I created an auth service to handle authentication methods. The auth state is managed with a RxJs Behavior Subject (user$) that holds a value and emits it as an Observable to all subscribers. The "app-header" and "app-content" components import the auth service and use this Behavior Subject directly in the template to get notified in real-time when the state changes.

## BONUS

I upgraded all packages to Angular version 9.1 & added the @angular/pwa package to generate a service worker/manifest file/pwa config, and hosted on Firebase for this demo. I also modified the tasks list on the landing page to include a link to the users route.
