#WDI-Project-2

This was my second project for WDI London

![alt text](https://cloud.githubusercontent.com/assets/18631052/19972064/e12ffabe-a1d8-11e6-8800-5a552b0a381a.png "Vegan Restaurants in London map")

###Introduction
This app was built over six days and was the second of four projects I built during my time on the Web Development Immersive course at General Assembly, London.
The requirements were to build an authenticated Express application with a Mongo backend and to use the Google Maps api.
I fulfilled these criteria and in addition opted to use data from a restaurant API called Zomato.
A hosted version of **Vegan Restaurants in London** can be found [here] (https://vegan-london.herokuapp.com)
The code can be viewed [here] (https://github.com/BRHGreen/wdi-project-2)

###The App
**Vegan Restaurants in London** is an online app designed to show the location of and details for a range of different vegan restaurants in London.
My inspiration for this project came form a personal interest in vegan food as well as a realisation that, although there is a lot of information about vegan eateries in London, this information is limited to dedicated but poorly made websites or merely small sections of other much larger websites.
I therefore endeavoured to create a more user friendly application for those who are interested in this information.

###How to use the site
This website requires the user to have a profile and for them to be logged in in order for the information to be accessed. Once the user is registered and signed in a map of London will display showing the location of a number of restaurants (each one marked with a green "v"). When one of these markers is clicked a pop-up window will display with the name and address of the relevant restaurant as well as a clickable link to a webpage with further details of the establishment.


###How it was built
**Vegan Restaurants in London** is an Express application and was built using  Node.js, HTML5, SCSS, a Mongo, Express and JavaScript(ES6).
The API used to obtain data for the restaurants is Zomato (the API and documentation for which can be found [here] (https://developers.zomato.com/documentation#/))
This application also uses the Google Maps API (the API and documentation for which can be found [here] (www.google.com/GoogleMapsAPI‎)).
**Vegan Restaurants in London** requires user authentication for which is uses JWT.
I made use of Bower to manage front end packages, NPM to manage back end packages, Babel to minify and transpile SCSS and ES6 and Gulp as my task runner.

###Challenges during the build
As an educational project, necessarily, the build was a task which I found challenging and which utilised many skills which had been newly learnt and still more which I would learn during the process.
As this was the first project in which I had used API's I found that extracting the data, particularly from the Zomato API, a challenge. It also became evident that the quality of the data was not what I had expected after trying out the API on the Zomato website. Filtering the data effectively,  obtaining links for official websites of listed establishments and getting consistently high quality images were all problems which I faced.
If I were to do this project again I would choose a different API for restaurant data. If I had had the time I would put together my own.

###Getting started
These steps are required in order to run the application:

1. Gulp and Node must be installed
2. Populate the database by running the following command in the root directory of the application using the terminal: `node db/seeds.js`
3. Install all the relevant NPM and Bower packages by running the commands `npm i` and `bower i` in the root directory of the application using the terminal
4. Go to [http://localhost:3000] (http://localhost:3000) in your browser to view the site.

###Credits
- The styling for my map was taken from [Snazzy Maps] (https://snazzymaps.com/)
- The green "v" marker on my map was taken from [Buenavida Health] (buenavidahealth.co.uk)
- The font used throughout the site was taken from [Google Fonts] (https://fonts.google.com/)
- [The Google Map API] (https://developers.google.com/maps/)
- [Zomato API] (https://developers.zomato.com/api)
- GA instructors Alex Chin and Rane Gowan
