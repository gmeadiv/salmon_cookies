'use strict';

console.log('smells like updog in here');

const locationsDiv = document.getElementById('locations');

const hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

const seattle = {
  name: 'Seattle',
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
};

// this function generates the total amount of cookies for a location
function getCookiesPerHour(a, b) {
  let number = a * b;
  return number;
};

seattle.getCustomersPerHour();
seattle.getCookiesPerHour();
seattle.getTotalCookies();
console.log(seattle);

const tokyo = {
  name: 'Tokyo',
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
  name: 'Dubai',
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
  name: 'Paris',
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
  name: 'Lima',
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

// call get totalCookies on all locations at once
// function getAllTotalCookies() {
//   //loops through the salmon cookie locations and calls getTotalCookies on all locations
//   for (let i = 0; i < salmonCookieLocations.length; i++) {
//     let currentLocation = salmonCookieLocations[i];
//     currentLocation.getTotalCookies();
//     console.log(`${currentLocation.location} sold ${currentLocation.totalCookies} cookies today!`);
//   }
// }
// getAllTotalCookies();

function _makeElement(tag, parent, text) {
  const element = document.createElement(tag);
  parent.appendChild(element);
  if (text) {
    element.textContent = text;
  }
  return element;
}

// function renderLocation(location) {
//   _makeElement('article', locationsDiv, null)
// }



function renderLocation(location) {
  let total = 0
  const articleElem = _makeElement('article', locationsDiv, null);
  _makeElement('h3', articleElem, location.name);
  const ulElem = _makeElement('ul', articleElem, null);
  for (let i = 0; i < hoursOpen.length; i++) {
    const text = `${hoursOpen[i]}: ${location.cookiesPerHour[i]} cookies`;
    total += location.cookiesPerHour[i];
    _makeElement('li', ulElem, text)
    // console.log(text);
  }
  let totalString = `Total: ${location.totalCookies} cookies`;
  _makeElement('li', ulElem, totalString)
}

// renderLocation(seattle);

const salmonCookieLocations = [seattle, tokyo, dubai, paris, lima];

function renderAllLocations() {
  for (let i = 0; i < salmonCookieLocations.length; i++) {
    const currentLocation = salmonCookieLocations[i];
    currentLocation.getTotalCookies();
    renderLocation(currentLocation);
  }
}

renderAllLocations();