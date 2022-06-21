console.log('Fear is the mind killer');

// NOTE: So far we've discussed Strings, Numbers, Booleans, Arrays and Objects as data types. When these datatypes are combined, we get a DATA STRUCTURE. For example, an array that contains objects that each contain strings and booleans:

const mixedDataArray = [
  {
    alive: true,
    name: "Jonathan",
  },
  {
    alive: false,
    name: "Jeremy",
  },
  {
    alive: false,
    name: "Luna",
  },
];

// SECTION - Part 1: For each of the following, write which DATAT TYPES you would use to represent the data, then give a small example of the data structure.

// 1. A light switch that can be either on or off.
// Response: A boolean value of true/false. Stored in an object so that additional items (key/value pairs) can be added later, if needed:

const lightswitch = {
  turnedOn: false,
};

// 2. A user's email address.
// Response: A string. Let's store it in an array, as if it were one of many user email addresses returned as an array:

const userEmails = ['jonathan@gmail.com', 'jeremy@gmail.com', 'luna@email.com'];

// 3. A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// Response: If were just listing these features of the ship, I think we could create a 'spaceship' object and have one property be a key of "features" with a value of an array containing all those data points as strings:

const spaceShip = {
  features: ['hull', 'laster blasters', 'tracor beam', 'warp drive'],
  name: 'USS Voyager',
};

// 4. A list of student names from our class.
// Response: Each name shall be a string. Collected in either an array OR an object (say, if we wanted to have a single property where all student names were listed in array):

const studentNames = ['Jonathan', 'Jeremy', 'Luna'];

// 5. A list of student names from our class, each with a location of where they were born.
// Response: If we take the simple array from above, instead of each student's name being a string in the array -- instead each student shall be a separate object in the array, with an item for 'name' and an item for the location where they were 'born':

const students = [
  {
    name: 'Jonathan',
    born: 'Methuen, MA, USA',
  },
  {
    name: 'Jeremy',
    born: 'San Jose, CA, USA',
  },
  {
    name: 'Luna',
    born: 'Stockton, CA, USA'
  },
];

// 6. A list of student names from our class, each with a location and each with a list of favorite TV shows.
// Response: Continuing from above, adding a new item / property to each student object to include favorite TV shows:

const studentInformation = [
  {
    name: "Jonathan",
    born: "Methuen, MA, USA",
    favTVShow: 'Six Feet Under',
  },
  {
    name: "Jeremy",
    born: "San Jose, CA, USA",
    favTVShow: 'Fringe',
  },
  {
    name: "Luna",
    born: "Stockton, CA, USA",
    favTVShow: 'Planet Earth - Great Plains',
  },
];