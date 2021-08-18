'use strict';

console.log('smells like updog in here');

const locationsDiv = document.getElementById('locations');

function SalmonCookiesLLC(name, minCustomers, maxCustomers, avgCookie) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.customersPerHour = [];
  this.avgCookie = avgCookie;
  this.cookiesPerHour = [];
  this.totalCookies = 0;
  this.hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

  SalmonCookiesLLC.scLLCarray.push(this)
}

SalmonCookiesLLC.scLLCarray = []

SalmonCookiesLLC.prototype.getCustomersPerHour = function(){
  for (let i=0; i < this.hoursOpen.length; i++) {
    this.customersPerHour.push(randomCustomers(this.minCustomers, this.maxCustomers));
  }
  // console.log(this.customersPerHour);
}
SalmonCookiesLLC.prototype.getCookiesPerHour = function() {
  for (let i=0; i < this.hoursOpen.length; i++) {
    this.cookiesPerHour.push(this.customersPerHour[i] * this.avgCookie);
  }
  // console.log(this.cookiesPerHour);
}
SalmonCookiesLLC.prototype.getTotalCookies = function() {
  for (let i=0; i < this.cookiesPerHour.length; i++) {
    this.totalCookies += this.cookiesPerHour[i];
  }
  // console.log(this.totalCookies)
}

const seattle = new SalmonCookiesLLC('Seattle', 23, 65, 6.3)
seattle.getCustomersPerHour();
seattle.getCookiesPerHour();
seattle.getTotalCookies();
const tokyo = new SalmonCookiesLLC('Tokyo', 3, 24, 1.2)
tokyo.getCustomersPerHour();
tokyo.getCookiesPerHour();
tokyo.getTotalCookies();
const dubai = new SalmonCookiesLLC('Dubai', 11, 38, 3.7)
dubai.getCustomersPerHour();
dubai.getCookiesPerHour();
dubai.getTotalCookies();
const paris = new SalmonCookiesLLC('Paris', 20, 38, 2.3)
paris.getCustomersPerHour();
paris.getCookiesPerHour();
paris.getTotalCookies();
const lima = new SalmonCookiesLLC('Lima', 2, 16, 4.6)
lima.getCustomersPerHour();
lima.getCookiesPerHour();
lima.getTotalCookies();

//     // this function generates a random amount of customers
// function randomCustomers(minCustomers, maxCustomers) {
//       // takes in a min and max number of customers
//       // runs a Math.random for min/max
//   let number = Math.floor(Math.random() * (maxCustomers - minCustomers) + minCustomers);
//       // returns the amount of customers
//   return number;
// }
//     // this function generates the total amount of cookies for a location
// function getCookiesPerHour(a, b) {
//   let number = a * b;
//   return number;
// }

console.log(SalmonCookiesLLC.scLLCarray)

SalmonCookiesLLC.prototype.renderSalmonLLC = function() {
  let tableElem = document.createElement('table');
  articleElem.appendChild(tableElem);
  let tableElem = document.createElement('thead');
  articleElem.appendChild(tableElem);
  const row1 = document.createElement('tr');
  tableElem.appendChild(row1);
  const th1Elem = document.createElement('th');
  th1Elem.textContent = '';
  row1.appendChild(th1Elem);
  const th2Elem = document.createElement('th');
  th2Elem.textContent = '6:00am';
  row1.appendChild(th2Elem);
  const th3Elem = document.createElement('th');
  th3Elem.textContent = '7:00am';
  row1.appendChild(th3Elem);
  const th4Elem = document.createElement('th');
  th4Elem.textContent = '8:00am';
  row1.appendChild(th3Elem);
  const th5Elem = document.createElement('th');
  th5Elem.textContent = '9:00am';
  row1.appendChild(th3Elem);
  const th6Elem = document.createElement('th');
  th6Elem.textContent = '10:00am';
  row1.appendChild(th3Elem);
  const th7Elem = document.createElement('th');
  th7Elem.textContent = '11:00am';
  row1.appendChild(th3Elem);
  const th8Elem = document.createElement('th');
  th8Elem.textContent = '12:00am';
  row1.appendChild(th3Elem);
  const th9Elem = document.createElement('th');
  th9Elem.textContent = '1:00pm';
  row1.appendChild(th3Elem);
  const th10Elem = document.createElement('th');
  th10Elem.textContent = '2:00pm';
  row1.appendChild(th3Elem);
  const th11Elem = document.createElement('th');
  th11Elem.textContent = '3:00pm';
  row1.appendChild(th3Elem);
  const th12Elem = document.createElement('th');
  th12Elem.textContent = '4:00pm';
  row1.appendChild(th3Elem);
  const th13Elem = document.createElement('th');
  th13Elem.textContent = '5:00pm';
  row1.appendChild(th3Elem);
  const th14Elem = document.createElement('th');
  th14Elem.textContent = '6:00pm';
  row1.appendChild(th3Elem);
  const th15Elem = document.createElement('th');
  th15Elem.textContent = '7:00pm';
  row1.appendChild(th3Elem);
  const th16Elem = document.createElement('th');
  th16Elem.textContent = 'Daily Location Total';
  row1.appendChild(th3Elem);
  const row2 = document.createElement('tr');
  tableElem.appendChild(row2);
  const th1Elem = document.createElement('th');
  th1Elem.textContent = this.name;
  row2.appendChild(th1Elem);
  const td1Elem = document.createElement('td');
  td1Elem.textContent = this.cookiesPerHour[i];
  const td2Elem = document.createElement('td');
  td2Elem.textContent = this.cookiesPerHour[i];
  const td3Elem = document.createElement('td');
  td3Elem.textContent = this.cookiesPerHour[i];
  const td4Elem = document.createElement('td');
  td4Elem.textContent = this.cookiesPerHour[i];
  const td5Elem = document.createElement('td');
  td5Elem.textContent = this.cookiesPerHour[i];
  const td6Elem = document.createElement('td');
  td6Elem.textContent = this.cookiesPerHour[i];
  const td7Elem = document.createElement('td');
  td7Elem.textContent = this.cookiesPerHour[i];
  const td8Elem = document.createElement('td');
  td8Elem.textContent = this.cookiesPerHour[i];
  const td9Elem = document.createElement('td');
  td9Elem.textContent = this.cookiesPerHour[i];
  const td10Elem = document.createElement('td');
  td10Elem.textContent = this.cookiesPerHour[i];
  const td11Elem = document.createElement('td');
  td11Elem.textContent = this.cookiesPerHour[i];
  const td12Elem = document.createElement('td');
  td12Elem.textContent = this.cookiesPerHour[i];
  const td13Elem = document.createElement('td');
  td13Elem.textContent = this.cookiesPerHour[i];
  const td14Elem = document.createElement('td');
  td14Elem.textContent = this.cookiesPerHour[i];
  const th15Elem = document.createElement('th');
  th15Elem.textContent = this.totalCookies;
  row2.appendChild(th2Elem);
  const th1Elem = document.createElement('th');
  // th1Elem.textContent = 'Totals';
  // row3.appendChild(th1Elem);
  // const td1Elem = document.createElement('td');
  // td1Elem.textContent = this.cookiesPerHour[i];
  // const td2Elem = document.createElement('td');
  // td2Elem.textContent = this.cookiesPerHour[i];
  // const td3Elem = document.createElement('td');
  // td3Elem.textContent = this.cookiesPerHour[i];
  // const td4Elem = document.createElement('td');
  // td4Elem.textContent = this.cookiesPerHour[i];
  // const td5Elem = document.createElement('td');
  // td5Elem.textContent = this.cookiesPerHour[i];
  // const td6Elem = document.createElement('td');
  // td6Elem.textContent = this.cookiesPerHour[i];
  // const td7Elem = document.createElement('td');
  // td7Elem.textContent = this.cookiesPerHour[i];
  // const td8Elem = document.createElement('td');
  // td8Elem.textContent = this.cookiesPerHour[i];
  // const td9Elem = document.createElement('td');
  // td9Elem.textContent = this.cookiesPerHour[i];
  // const td10Elem = document.createElement('td');
  // td10Elem.textContent = this.cookiesPerHour[i];
  // const td11Elem = document.createElement('td');
  // td11Elem.textContent = this.cookiesPerHour[i];
  // const td12Elem = document.createElement('td');
  // td12Elem.textContent = this.cookiesPerHour[i];
  // const td13Elem = document.createElement('td');
  // td13Elem.textContent = this.cookiesPerHour[i];
  // const td14Elem = document.createElement('td');
  // td14Elem.textContent = this.cookiesPerHour[i];
  // const th15Elem = document.createElement('th');
  // th15Elem.textContent = this.totalCookies;
  // row2.appendChild(th2Elem);
}

// const hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// const seattle = {
//   name: 'Seattle',
//   minCustomers: 23,
//   maxCustomers: 65,
//   customersPerHour: [],
//   avgCookie: 6.3,
//   cookiesPerHour: [],
//   totalCookies: null,
//   getCustomersPerHour: function() {
//     for (let i=0; i < hoursOpen.length; i++) {
//       this.customersPerHour.push(randomCustomers(this.minCustomers, this.maxCustomers));
//     }
//     // console.log(this.customersPerHour)
//   },
//   getCookiesPerHour: function() {
//     for (let i=0; i < hoursOpen.length; i++) {
//       this.cookiesPerHour.push(this.customersPerHour[i] * this.avgCookie);
//     }
//     // console.log(this.cookiesPerHour)
//   },
//   getTotalCookies: function() {
//     for (let i=0; i < this.cookiesPerHour.length; i++) {
//       this.totalCookies += this.cookiesPerHour[i];
//     }
//     // console.log(this.totalCookies)
//   },
// }

//     // this function generates a random amount of customers
// function randomCustomers(min, max) {
//   // takes in a min and max number of customers
//   // runs a Math.random for min/max
//   let number = Math.floor(Math.random() * (max - min) + min);
//   // returns the amount of customers
//   return number;
// };

// // this function generates the total amount of cookies for a location
// function getCookiesPerHour(a, b) {
//   let number = a * b;
//   return number;
// };

// seattle.getCustomersPerHour();
// seattle.getCookiesPerHour();
// seattle.getTotalCookies();
// console.log(seattle);

// const tokyo = {
//   name: 'Tokyo',
//   minCustomers: 3,
//   maxCustomers: 24,
//   customersPerHour: [],
//   avgCookie: 1.2,
//   cookiesPerHour: [],
//   totalCookies: null,
//   getCustomersPerHour: function() {
//     for (let i=0; i < hoursOpen.length; i++) {
//       this.customersPerHour.push(randomCustomers(this.minCustomers, this.maxCustomers));
//     }
//     // console.log(this.customersPerHour)
//   },
//   getCookiesPerHour: function() {
//     for (let i=0; i < hoursOpen.length; i++) {
//       this.cookiesPerHour.push(this.customersPerHour[i] * this.avgCookie);
//     }
//     // console.log(this.cookiesPerHour)
//   },
//   getTotalCookies: function() {
//     let totalCookies = 0
//     for (let i=0; i < this.cookiesPerHour.length; i++) {
//       this.totalCookies += this.cookiesPerHour[i];
//     }
//     // console.log(this.totalCookies)
//   },
// }

// tokyo.getCustomersPerHour();
// tokyo.getCookiesPerHour();
// tokyo.getTotalCookies();
// console.log(tokyo);

// const dubai = {
//   name: 'Dubai',
//   minCustomers: 11,
//   maxCustomers: 38,
//   customersPerHour: [],
//   avgCookie: 3.7,
//   cookiesPerHour: [],
//   totalCookies: null,
//   getCustomersPerHour: function() {
//     for (let i=0; i < hoursOpen.length; i++) {
//       this.customersPerHour.push(randomCustomers(this.minCustomers, this.maxCustomers));
//     }
//     // console.log(this.customersPerHour)
//   },
//   getCookiesPerHour: function() {
//     for (let i=0; i < hoursOpen.length; i++) {
//       this.cookiesPerHour.push(this.customersPerHour[i] * this.avgCookie);
//     }
//     // console.log(this.cookiesPerHour)
//   },
//   getTotalCookies: function() {
//     let totalCookies = 0
//     for (let i=0; i < this.cookiesPerHour.length; i++) {
//       this.totalCookies += this.cookiesPerHour[i];
//     }
//     // console.log(this.totalCookies)
//   },
// }

// dubai.getCustomersPerHour();
// dubai.getCookiesPerHour();
// dubai.getTotalCookies();
// console.log(dubai);

// const paris = {
//   name: 'Paris',
//   minCustomers: 20,
//   maxCustomers: 38,
//   customersPerHour: [],
//   avgCookie: 2.3,
//   cookiesPerHour: [],
//   totalCookies: null,
//   getCustomersPerHour: function() {
//     for (let i=0; i < hoursOpen.length; i++) {
//       this.customersPerHour.push(randomCustomers(this.minCustomers, this.maxCustomers));
//     }
//     // console.log(this.customersPerHour)
//   },
//   getCookiesPerHour: function() {
//     for (let i=0; i < hoursOpen.length; i++) {
//       this.cookiesPerHour.push(this.customersPerHour[i] * this.avgCookie);
//     }
//     // console.log(this.cookiesPerHour)
//   },
//   getTotalCookies: function() {
//     let totalCookies = 0
//     for (let i=0; i < this.cookiesPerHour.length; i++) {
//       this.totalCookies += this.cookiesPerHour[i];
//     }
//     // console.log(this.totalCookies)
//   },
// }

// paris.getCustomersPerHour();
// paris.getCookiesPerHour();
// paris.getTotalCookies();
// console.log(paris);

// const lima = {
//   name: 'Lima',
//   minCustomers: 2,
//   maxCustomers: 16,
//   customersPerHour: [],
//   avgCookie: 4.6,
//   cookiesPerHour: [],
//   totalCookies: null,
//   getCustomersPerHour: function() {
//     for (let i=0; i < hoursOpen.length; i++) {
//       this.customersPerHour.push(randomCustomers(this.minCustomers, this.maxCustomers));
//     }
//     // console.log(this.customersPerHour)
//   },
//   getCookiesPerHour: function() {
//     for (let i=0; i < hoursOpen.length; i++) {
//       this.cookiesPerHour.push(this.customersPerHour[i] * this.avgCookie);
//     }
//     // console.log(this.cookiesPerHour)
//   },
//   getTotalCookies: function() {
//     let totalCookies = 0
//     for (let i=0; i < this.cookiesPerHour.length; i++) {
//       this.totalCookies += this.cookiesPerHour[i];
//     }
//     // console.log(this.totalCookies)
//   },
// }

// lima.getCustomersPerHour();
// lima.getCookiesPerHour();
// lima.getTotalCookies();
// console.log(lima);

// // call get totalCookies on all locations at once
// // function getAllTotalCookies() {
// //   //loops through the salmon cookie locations and calls getTotalCookies on all locations
// //   for (let i = 0; i < salmonCookieLocations.length; i++) {
// //     let currentLocation = salmonCookieLocations[i];
// //     currentLocation.getTotalCookies();
// //     console.log(`${currentLocation.location} sold ${currentLocation.totalCookies} cookies today!`);
// //   }
// // }
// // getAllTotalCookies();

// function _makeElement(tag, parent, text) {
//   const element = document.createElement(tag);
//   parent.appendChild(element);
//   if (text) {
//     element.textContent = text;
//   }
//   return element;
// }

// // function renderLocation(location) {
// //   _makeElement('article', locationsDiv, null)
// // }



// function renderLocation(location) {
//   let total = 0
//   const articleElem = _makeElement('article', locationsDiv, null);
//   _makeElement('h3', articleElem, location.name);
//   const ulElem = _makeElement('ul', articleElem, null);
//   for (let i = 0; i < hoursOpen.length; i++) {
//     const text = `${hoursOpen[i]}: ${location.cookiesPerHour[i]} cookies`;
//     total += location.cookiesPerHour[i];
//     _makeElement('li', ulElem, text)
//     // console.log(text);
//   }
//   let totalString = `Total: ${location.totalCookies} cookies`;
//   _makeElement('li', ulElem, totalString)
// }

// // renderLocation(seattle);

// const salmonCookieLocations = [seattle, tokyo, dubai, paris, lima];

// function renderAllLocations() {
//   for (let i = 0; i < salmonCookieLocations.length; i++) {
//     const currentLocation = salmonCookieLocations[i];
//     currentLocation.getTotalCookies();
//     renderLocation(currentLocation);
//   }
// }

// renderAllLocations();