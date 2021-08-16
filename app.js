'use strict';

console.log('smells like updog in here');

const locationDiv = document.getElementById('locationProfiles');

const seattle = {
  name: 'Seattle',
  // fifteen items in hoursOpen: 0-13hours+total
  hoursOpen: [6am, 7am, 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm, total=(hoursOpen[0]+hoursOpen[1]+hoursOpen[2]+hoursOpen[3]+hoursOpen[4]+hoursOpen[5]+hoursOpen[6]+hoursOpen[7]+hoursOpen[8]+hoursOpen[9]+hoursOpen[10]+hoursOpen[11]+hoursOpen[12]+hoursOpen[13])]
  customers: null,
  avgCookie: 6.3,
  cookies: null,
  getCustomers: function() {
    this.customers = `${_randomCustomers(23, 65)} customers`; 
  },
  getCookies: function() {
    this.cookies =`${cookiesPerHour(hoursOpen*avgCookie)} cookies per hour`; 
  },
}

const tokyo = {
  name: 'Tokyo',
  hoursOpen: [6am, 7am, 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm, total=(hoursOpen[0]+hoursOpen[1]+hoursOpen[2]+hoursOpen[3]+hoursOpen[4]+hoursOpen[5]+hoursOpen[6]+hoursOpen[7]+hoursOpen[8]+hoursOpen[9]+hoursOpen[10]+hoursOpen[11]+hoursOpen[12]+hoursOpen[13])]
  customers: null,
  avgCookie: 1.2,
  cookies: null,
  getCustomers: function() {
    this.customers = `${_randomCustomers(3, 24)} customers`; 
  },
  getCookies: function() {
    this.cookies =`${cookiesPerHour(hoursOpen*avgCookie)} cookies per hour`; 
  },
}

const dubai = {
  name: 'Dubai',
  hoursOpen: [6am, 7am, 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm, total=(hoursOpen[0]+hoursOpen[1]+hoursOpen[2]+hoursOpen[3]+hoursOpen[4]+hoursOpen[5]+hoursOpen[6]+hoursOpen[7]+hoursOpen[8]+hoursOpen[9]+hoursOpen[10]+hoursOpen[11]+hoursOpen[12]+hoursOpen[13])]
  customers: null,
  avgCookie: 3.7,
  cookies: null,
  getCustomers: function() {
    this.customers = `${_randomCustomers(11, 38)} customers`; 
  },
  getCookies: function() {
    this.cookies =`${cookiesPerHour(hoursOpen*avgCookie)} cookies per hour`; 
  },
}

const paris = {
  name: 'Paris',
  hoursOpen: [6am, 7am, 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm, total=(hoursOpen[0]+hoursOpen[1]+hoursOpen[2]+hoursOpen[3]+hoursOpen[4]+hoursOpen[5]+hoursOpen[6]+hoursOpen[7]+hoursOpen[8]+hoursOpen[9]+hoursOpen[10]+hoursOpen[11]+hoursOpen[12]+hoursOpen[13])]
  customers: null,
  avgCookie: 2.3,
  getCustomers: function() {
    this.customers = `${_randomCustomers(20, 38)} customers`; 
  },
  getCookies: function() {
    this.cookies =`${cookiesPerHour(hoursOpen*avgCookie)} cookies per hour`; 
  },
}

const lima = {
  name: 'Lima',
  hoursOpen: [6am, 7am, 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm, total=(hoursOpen[0]+hoursOpen[1]+hoursOpen[2]+hoursOpen[3]+hoursOpen[4]+hoursOpen[5]+hoursOpen[6]+hoursOpen[7]+hoursOpen[8]+hoursOpen[9]+hoursOpen[10]+hoursOpen[11]+hoursOpen[12]+hoursOpen[13])]
  customers: null,
  avgCookie: 4.6,
  getCustomers: function() {
    this.customers = `${_randomCustomers(2, 16)} customers`; 
  },
  getCookies: function() {
    this.cookies =`${cookiesPerHour(hoursOpen*avgCookie)} cookies per hour`; 
  },
}

// write a function that gets a random amount of customers
function _randomCustomers(min, max) {
  // takes in a min and max number of customers
  // runs a Math.random for min/max
  let number = Math.floor(Math.random() * (max - min) + min);
  // returns the amount of customers
  return number;
}

seattle.getCustomers();
console.log(seattle);

const salmonCookieLocations = [seattle, tokyo, dubai, paris, lima];
// call getCustomers on all locations at once
function getAllCustomers() {
  //loops through the salmon cookie locations and calls getCustomer on all locations
  for (let i = 0; i < salmonCookieLocations.length; i++) {
    let currentLocation = salmonCookieLocations[i];
    currentLocation.getCustomers();
    console.log(`${currentLocation.name} was visited by ${currentLocation.numCust} customers`);
  }
}

getAllCustomers();

function renderLocation(location) {
//   // takes in a location and puts it on the page
//   // to create elements we use a method : createElement

  // create an article
  const articleElem = document.createElement('article');
  locationDiv.appendChild(articleElem);
  // create an image
  const imgElem = document.createElement('img');
  imgElem.src = location.photo;
  articleElem.appendChild(imgElem);
  // create an h2  name
  const h2Elem = document.createElement('h2');
  h2Elem.textContent = location.name;
  articleElem.appendChild(h2Elem);
  // h3 with color
  // create a p for age
  const ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);
  // create a ul
  // loop through interests and add li for each interest
  // for (let i = 0; i < location.customers.length; i++) {
  //   let currentInterest = kitten.interests[i];
  //   const liElem = document.createElement('li');
  //   liElem.textContent = currentInterest;
  //   ulElem.appendChild(liElem);
// }
}

function renderAllLocations() {
  // loops through the array and calls render on each location
  for (let i = 0; i < salmonCookieLocations.length; i++) {
    let currentLocation = salmonCookieLocations[i];
    renderLocation(currentLocation);
  }
}

renderAllLocations();
