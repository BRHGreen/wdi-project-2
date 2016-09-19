#Introduction
**(mostly) Vegan Restaurants in London** is an online app designed to show the location of and details for a range of different vegan restaurants in London.
My inspiration for this project came form a personal interest in vegan food as well as a realisation that, although there is a lot of information about vegan eateries in London, this information is limited to dedicated but poorly made vegan websites or merely small sections of other much larger websites.
I therefore endeavoured to create a more user friendly website for those who are interested in this information.

#How to use the site
This website requires the user to have a profile and for them to be logged in in order for the information to be accessed. Once the user is registered and signed in a map of London will display showing the location of a number of restaurants (each one marked with a green "v"). When one of these markers is clicked a pop-up window will display with the name and address of the relevant restaurant as well as a clickable link to a webpage with further details of the establishment.


#How it was built
**(mostly) Vegan Restaurants in London** is an Express application and was built using  Node JS, HTML, SCSS, a Mongoose database and JavaScript(ES6).
The API used to obtain data for the restaurants is Zomato (the API and documentation for which can be found here: https://developers.zomato.com/documentation#/)
This application also uses the Google Maps API (the API and documentation for which can be found here: www.google.com/GoogleMapsAPI‎).
**(mostly) Vegan Restaurants in London** requires user authentication for which is uses JWT.
I made use of Bower to manage front end packages, NPM to manage back end packages, Babel to minify and convert SCSS and ES6 into CSS and ES5 (respectively) and Gulp as my task runner.

#Getting started
These steps are required in order to run the application:
-  Gulp and Node must be installed
- Populate the database by running the following command in the root directory of the application using the terminal: 'node db/seeds.js'
- Install all the relevant NPM packages and Bower running the commands 'npm i' and 'bower i' in the root directory of the application using the terminal
- Go to 'http://localhost:3000' in your browser to view the site.

#Credits
- The styling for my map was taken from Snazzy Maps [https://snazzymaps.com/]
- The green "v" marker on my map was taken from Buenavida Health [buenavidahealth.co.uk]
- The font used throughout the site was taken from Google Fonts. [https://fonts.google.com/]
