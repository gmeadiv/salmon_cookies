'use strict';

console.log('smells like updog in here');

const locationDiv = document.getElementById('locationProfiles');

let hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

const seattle = {
  location: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  customersPerHour: [],
  avgCookie: 6.3,
  cookiesPerHour: [],
  totalCookies: null,
  getCustomersPerHour: function() {
    for (let i=0; i < hoursOpen.length; i++) {
      this.customersPerHour.push(randomCustomers(this.minCustomers, this.maxCustomers));
    }
    // console.log(this.customersPerHour)
  },
  getCookiesPerHour: function() {
    for (let i=0; i < hoursOpen.length; i++) {
      this.cookiesPerHour.push(this.customersPerHour[i] * this.avgCookie);
    }
    // console.log(this.cookiesPerHour)
  },
  getTotalCookies: function() {
    let totalCookies = 0
    for (let i=0; i < this.cookiesPerHour.length; i++) {
      this.totalCookies += this.cookiesPerHour[i];
    }
    // console.log(this.totalCookies)
  },
}

// this function generates a random amount of customers
function randomCustomers(min, max) {
  // takes in a min and max number of customers
  // runs a Math.random for min/max
  let number = Math.floor(Math.random() * (max - min) + min);
  // returns the amount of customers
  return number;
}

// this function generates the total amount of cookies for a location
function getCookiesPerHour(a, b) {
  let number = a * b;
  return number;
}

seattle.getCustomersPerHour();
seattle.getCookiesPerHour();
seattle.getTotalCookies();
console.log(seattle);

const tokyo = {
  location: 'Tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  customersPerHour: [],
  avgCookie: 1.2,
  cookiesPerHour: [],
  totalCookies: null,
  getCustomersPerHour: function() {
    for (let i=0; i < hoursOpen.length; i++) {
      this.customersPerHour.push(randomCustomers(this.minCustomers, this.maxCustomers));
    }
    // console.log(this.customersPerHour)
  },
  getCookiesPerHour: function() {
    for (let i=0; i < hoursOpen.length; i++) {
      this.cookiesPerHour.push(this.customersPerHour[i] * this.avgCookie);
    }
    // console.log(this.cookiesPerHour)
  },
  getTotalCookies: function() {
    let totalCookies = 0
    for (let i=0; i < this.cookiesPerHour.length; i++) {
      this.totalCookies += this.cookiesPerHour[i];
    }
    // console.log(this.totalCookies)
  },
}

tokyo.getCustomersPerHour();
tokyo.getCookiesPerHour();
tokyo.getTotalCookies();
console.log(tokyo);

const dubai = {
  location: 'Dubai',
  minCustomers: 11,
  maxCustomers: 38,
  customersPerHour: [],
  avgCookie: 3.7,
  cookiesPerHour: [],
  totalCookies: null,
  getCustomersPerHour: function() {
    for (let i=0; i < hoursOpen.length; i++) {
      this.customersPerHour.push(randomCustomers(this.minCustomers, this.maxCustomers));
    }
    // console.log(this.customersPerHour)
  },
  getCookiesPerHour: function() {
    for (let i=0; i < hoursOpen.length; i++) {
      this.cookiesPerHour.push(this.customersPerHour[i] * this.avgCookie);
    }
    // console.log(this.cookiesPerHour)
  },
  getTotalCookies: function() {
    let totalCookies = 0
    for (let i=0; i < this.cookiesPerHour.length; i++) {
      this.totalCookies += this.cookiesPerHour[i];
    }
    // console.log(this.totalCookies)
  },
}

dubai.getCustomersPerHour();
dubai.getCookiesPerHour();
dubai.getTotalCookies();
console.log(dubai);

const paris = {
  location: 'Paris',
  minCustomers: 20,
  maxCustomers: 38,
  customersPerHour: [],
  avgCookie: 2.3,
  cookiesPerHour: [],
  totalCookies: null,
  getCustomersPerHour: function() {
    for (let i=0; i < hoursOpen.length; i++) {
      this.customersPerHour.push(randomCustomers(this.minCustomers, this.maxCustomers));
    }
    // console.log(this.customersPerHour)
  },
  getCookiesPerHour: function() {
    for (let i=0; i < hoursOpen.length; i++) {
      this.cookiesPerHour.push(this.customersPerHour[i] * this.avgCookie);
    }
    // console.log(this.cookiesPerHour)
  },
  getTotalCookies: function() {
    let totalCookies = 0
    for (let i=0; i < this.cookiesPerHour.length; i++) {
      this.totalCookies += this.cookiesPerHour[i];
    }
    // console.log(this.totalCookies)
  },
}

paris.getCustomersPerHour();
paris.getCookiesPerHour();
paris.getTotalCookies();
console.log(paris);

const lima = {
  location: 'Lima',
  minCustomers: 2,
  maxCustomers: 16,
  customersPerHour: [],
  avgCookie: 4.6,
  cookiesPerHour: [],
  totalCookies: null,
  getCustomersPerHour: function() {
    for (let i=0; i < hoursOpen.length; i++) {
      this.customersPerHour.push(randomCustomers(this.minCustomers, this.maxCustomers));
    }
    // console.log(this.customersPerHour)
  },
  getCookiesPerHour: function() {
    for (let i=0; i < hoursOpen.length; i++) {
      this.cookiesPerHour.push(this.customersPerHour[i] * this.avgCookie);
    }
    // console.log(this.cookiesPerHour)
  },
  getTotalCookies: function() {
    let totalCookies = 0
    for (let i=0; i < this.cookiesPerHour.length; i++) {
      this.totalCookies += this.cookiesPerHour[i];
    }
    // console.log(this.totalCookies)
  },
}

lima.getCustomersPerHour();
lima.getCookiesPerHour();
lima.getTotalCookies();
console.log(lima);

const salmonCookieLocations = [seattle, tokyo, dubai, paris, lima];
// call get totalCookies on all locations at once
function getAllTotalCookies() {
  //loops through the salmon cookie locations and calls getTotalCookies on all locations
  for (let i = 0; i < salmonCookieLocations.length; i++) {
    let currentLocation = salmonCookieLocations[i];
    currentLocation.getTotalCookies();
    console.log(`${currentLocation.location} sold ${currentLocation.totalCookies} cookies today!`);
  }
}
getAllTotalCookies();

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
