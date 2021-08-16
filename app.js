'use strict';

console.log('smells like updog in here');

const locationDiv = document.getElementById('locationProfiles');

const seattle = {
  location: 'Seattle',
  customers: null,
  cookies: null,
  getCustomers: function() {
    this.customers = `${_randomCustomers(23, 65)} customers`; 
  },
  getCookies: function() {
    this.cookies = `${customersPerHour(this.customers)} cookies`; 
  },
}

const tokyo = {
  location: 'Tokyo',
  customers: null,
  cookies: 1.2,
  getCustomers: function() {
    this.customers = `${_randomCustomers(3, 24)} customers`; 
  },
  getCookies: function() {
    this.cookies = `${this.customers * } cookies`;
  },
}

const dubai = {
  location: 'Dubai',
  customers: null,
  cookies: 3.7,
  getCustomers: function() {
    this.customers = `${_randomCustomers(11, 38)} customers`; 
  },
  getCookies: function() {
    this.cookies = `${this.customers * } cookies`; 
  },
}

const paris = {
  location: 'Paris',
  customers: null,
  cookies: 2.3,
  getCustomers: function() {
    this.customers = `${_randomCustomers(20, 38)} customers`; 
  },
  getCookies: function() {
    this.cookies = `${this.customers * } cookies`; 
  },
}

const lima = {
  location: 'Lima',
  customers: null,
  cookies: 4.6,
  getCustomers: function() {
    this.customers = `${_randomCustomers(2, 16)} customers`; 
  },
  getCookies: function() {
    this.cookies = `${this.customers * } cookies`;
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

// function that generates a random amount of customers per hour location is open
function customersPerHour() {
  let number = location.getCustomers() * location.cookies
  return number;
}

seattle.getCustomers();
seattle.getCookies();
console.log(seattle);


const salmonCookieLocations = [seattle, tokyo, dubai, paris, lima];
// call getCustomers on all locations at once
function getAllCustomers() {
  //loops through the salmon cookie locations and calls getCustomer on all locations
  for (let i = 0; i < salmonCookieLocations.length; i++) {
    let currentLocation = salmonCookieLocations[i];
    currentLocation.getCustomers();
    console.log(`${currentLocation.name} was visited by ${currentLocation.customers} customers`);
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
}

function renderAllLocations() {
  // loops through the array and calls render on each location
  for (let i = 0; i < salmonCookieLocations.length; i++) {
    let currentLocation = salmonCookieLocations[i];
    renderLocation(currentLocation);
  }
}

renderAllLocations();
