# Front Street Chop Shop

## Setup Instructions

1. Clone the repository.
2. Run `npm install`.
3. Create a `.env` file in the root directory.
4. Add the following to your `.env` file:

   ```env
   REACT_APP_GOOGLE_MAPS_API_KEY=xxx
   ```

5. Run the project using `npm start`.



## Summary
Landing page for Front Street Chop Shop, a barbershop (with currently limited web presence) located in New Richmond, OH.
This project uses the Google Maps JavaScript API and the Places API to show location, operating hours, and reviews. 
The styles are responsive once the screen size reaches the average tablet or smaller and will reduce font size and change flex-direction. It is also mobile-friendly.

## Features

### Built using create-react-app
React was chosen to deepen understanding of the library and due to ease of organization/ data flow. All of the components were built using functional components. 

### Arrays to store and retrieve data
The reviews and operating hours are stored in arrays containing objects, which are then passed to their respective components and styled/ displayed for the user. 

### Retrieves data from third-party API
Google Maps JavaScript API and Places API were used to store and retrieve the location, reviews, and hours data. This wasn't the easiest API to use, but it helped in deciphering documentation and eventually led me to another library- 'react-google-maps'.
