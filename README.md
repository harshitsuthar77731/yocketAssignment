#Client Side
Setup
Make sure you have Node.js and npm installed. You can download them from here.
Clone this repository.
Navigate to the yocket directory.
Run npm install to install dependencies.
After installation, you can start the development server using npm start.
Visit http://localhost:3000 in your browser to view the application.
Available Scripts
npm start: Starts the development server.
npm run build: Builds the app for production to the build folder.
npm test: Launches the test runner.
npm run eject: Ejects the app from Create React App.
#Server Side
Setup
Ensure you have Node.js installed. You can download it from here.
Clone the yocket-backend repository.
Navigate to the yocket-backend directory.
Run npm install to install dependencies.
After installation, start the server by running npm start.
The server will start running at http://localhost:3001.
Available Scripts
npm start: Starts the server using nodemon for auto-reloading.
npm test: Runs tests using Mocha.
Client Side Dependencies
@radix-ui/react-popover: Version ^1.0.7
@radix-ui/react-toast: Version ^1.1.5
@testing-library/jest-dom: Version ^5.17.0
@testing-library/react: Version ^13.4.0
@testing-library/user-event: Version ^13.5.0
axios: Version ^1.6.8
cmdk: Version ^1.0.0
framer-motion: Version ^11.0.28
react: Version ^18.2.0
react-dom: Version ^18.2.0
react-router-dom: Version ^6.22.3
react-scripts: Version ^5.0.1
sonner: Version ^1.4.41
web-vitals: Version ^2.1.4
Server Side Dependencies
chai-http: Version ^4.4.0
cors: Version ^2.8.5
express: Version ^4.19.2
nodemon: Version ^3.1.0
Algorithm Explanation
Parameters:
formData: This parameter is an object containing data related to law enforcement operations, such as the city of each officer and their assigned vehicle.
cityMap: This parameter is an object mapping city names to their respective distances from the current location of the thief.
vehicleMap: This parameter is an object mapping vehicle names to their respective range or capacity.
Algorithm:
The function first logs the cityMap and vehicleMap to the console.
It creates an array arr to store the city names from the cityMap.
It randomly selects a criminalCity from the available cities in the cityMap.
It iterates through the formData, which likely contains information about officers' assigned cities and vehicles.
For each entry in formData, if the key includes "City":
It retrieves the distance to the city from the cityMap.
It extracts the officer's name from the key by splitting it.
It retrieves the range of the officer's vehicle from the vehicleMap.
If the officer's assigned city matches the criminalCity:
It calculates whether the officer's vehicle range is at least twice the distance to the criminal city.
If so, it constructs an array containing the officer's city, vehicle, and name, and returns it.
If no suitable officer is found, an empty array is returned.
Summary:
This function is essentially a simple algorithm to find a suitable officer and vehicle combination to apprehend a thief in a specific city based on the distance of the officer's assigned city from the criminal's location and the range of the officer's vehicle. It employs a basic random selection of the criminal's city and checks if any officer has both the correct city assignment and a vehicle with sufficient range to reach the criminal's location.
