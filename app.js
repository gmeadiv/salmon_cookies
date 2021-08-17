'use strict';

console.log('smells like updog in here');

const locationDiv = document.getElementById('locationProfiles');

const seattle = {
  location: 'Seattle',
  hoursOpen: [6am, 7am, 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm],
  minCustomers: 23,
  maxCustomers: 65,
  customersPerHour: null,
  avgCookie: 6.3,
  cookiesPerHour: null,
  totalCookies: null,
  getCustomersPerHour: function() {
    let this.customersPerHour = _randomCustomers(minCustomers, maxCustomers)
  },
  getCookies: function() {
    this.cookies =`${cookiesPerHour(this.customersPerHour[] + )} cookies per hour`;
  },
}

const tokyo = {
  location: 'Tokyo',
  hoursOpen: [6am, 7am, 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm],
  minCustomers: 3,
  maxCustomers: 24,
  customersPerHour: null,
  avgCookie: 1.2,
  cookiesPerHour: null,
  totalCookies: null,
  getCustomers: function() {
    this.customers = `${_randomCustomers(minCustomers, maxCustomers)} customers`; 
  },
  getCookies: function() {
    this.cookies =`${cookiesPerHour(hoursOpen[14], this.avgCookie)} cookies per hour`; 
  },
}

const dubai = {
  location: 'Dubai',
  hoursOpen: [6am, 7am, 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm],
  minCustomers: 11,
  maxCustomers: 38,
  customersPerHour: null,
  avgCookie: 3.7,
  cookiesPerHour: null,
  totalCookies: null,
  getCustomers: function() {
    this.customers = `${_randomCustomers(minCustomers, maxCustomers)} customers`; 
  },
  getCookies: function() {
    this.cookies =`${cookiesPerHour(hoursOpen[14], this.avgCookie)} cookies per hour`; 
  },
}

const paris = {
  location: 'Paris',
  hoursOpen: [6am, 7am, 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm],
  minCustomers: 20,
  maxCustomers: 38,
  customersPerHour: null,
  avgCookie: 2.3,
  cookiesPerHour: null,
  totalCookies: null,
  getCustomers: function() {
    this.customers = `${_randomCustomers(minCustomers, maxCustomers)} customers`; 
  },
  getCookies: function() {
    this.cookies =`${cookiesPerHour(hoursOpen[14], this.avgCookie)} cookies per hour`; 
  },
}

const lima = {
  location: 'Lima',
  hoursOpen: [6am, 7am, 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm],
  minCustomers: 2,
  maxCustomers: 16,
  customersPerHour: null,
  avgCookie: 4.6,
  cookiesPerHour: null,
  totalCookies: null,
  getCustomers: function() {
    this.customers = `${_randomCustomers(2, 16)} customers`; 
  },
  getCookies: function() {
    this.cookies =`${cookiesPerHour(hoursOpen[14], this.avgCookie)} cookies per hour`; 
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

// this function generates the total amount of cookies for a location
function getCookies(a, b) {
  // takes in a min and max number of customers
  // runs a Math.random for min/max
  let number = a * b;
  // returns the amount of customers
  return number;
}

seattle.getCookies();
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
  // loop through hoursOpen and generate a random number of customers
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
