# WEB APP FOR SECOND INTERVIEW

Created by Matthew Brown 2016

## DEFINITION OF DONE

The application should meet the following criteria:

* Clicking on skiing or snowboarding increases the score for that choice
* The UI of the app should be a stateless React component
* State in the app should be handled by implementing a Flux architecture, using the Redux library
* Source code should be provided as a Git repository, and include a Docker container which will allow me to spin up the application and access it in my browser
* It doesn't need to persist any data, but if data persistence was included in the app that would get bonus points!

## CONSIDERATIONS

This app has been built based heavily on the React / Redux examples.

The dockerfile is about as simple as simple can be.

* This is not performant - it's the simplest React / Redux interaction using stores and subscriptions.
* This is not performant - it's serving from react-scripts, for production this would want to be built. 

## INSTRUCTIONS

A docker build against the Dockerfile in the root of the repository will create a container. You do not have to have performed an npm install - docker build should do that for you!

Connecting to this container on the associated port with your web browser will serve the page.

There is data persistence from the redis-storage library, but only to localStorage (if you refresh the page, your votes will persist)
