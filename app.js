'use strict';

console.log('smells like updog in here');

const locationsTable = document.getElementById('locations');
const hoursOpen = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

function SalmonCookiesLLC(name, minCustomers, maxCustomers, avgCookie) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.customersPerHour = [];
  this.avgCookie = avgCookie;
  this.cookiesPerHour = [];
  this.totalCookies = 0;

  SalmonCookiesLLC.salmonLLCarray.push(this)
}

SalmonCookiesLLC.salmonLLCarray = [];
// SalmonCookiesLLC.cookiesPerHour = [];

// METHODS:
SalmonCookiesLLC.prototype.getCustomersPerHour = function(){
  for (let i=0; i < hoursOpen.length; i++) {
    this.customersPerHour.push(randomCustomers(this.minCustomers, this.maxCustomers));
  }
  // console.log(this.customersPerHour);
}
SalmonCookiesLLC.prototype.getCookiesPerHour = function() {
  for (let i=0; i < hoursOpen.length; i++) {
    this.cookiesPerHour.push(Math.ceil((this.customersPerHour[i] * this.avgCookie)));
  }
  // console.log(this.cookiesPerHour);
}
SalmonCookiesLLC.prototype.getTotalCookies = function() {
  for (let i=0; i < this.cookiesPerHour.length; i++) {
    this.totalCookies += this.cookiesPerHour[i];
  }
  // console.log(this.totalCookies)
}

// FUNCTIONS:
  // this function generates a random amount of customers
function randomCustomers(minCustomers, maxCustomers) {
  let number = Math.floor(Math.random() * (maxCustomers - minCustomers) + minCustomers);
  return number;
}
  // this function generates the total amount of cookies for a location
// function getCookiesPerHour(a, b) {
//   let number = a * b;
//   return number;
// }
// adds data to each store's customersPerHour
function fillAllCustomersPH() {
  for (let i = 0; i < SalmonCookiesLLC.salmonLLCarray.length; i++) {
    const currentLocation = SalmonCookiesLLC.salmonLLCarray[i];
    currentLocation.getCustomersPerHour();
  }
}
fillAllCustomersPH();
// adds data to each store's cookiesPerHour
function fillAllCookiesPH() {
  for (let i = 0; i < SalmonCookiesLLC.salmonLLCarray.length; i++) {
    const currentLocation = SalmonCookiesLLC.salmonLLCarray[i];
    currentLocation.getCookiesPerHour();
  }
}
fillAllCookiesPH();
// adds data to each store's totalCookies
function fillAllTotalCookies() {
  for (let i = 0; i < SalmonCookiesLLC.salmonLLCarray.length; i++) {
    const currentLocation = SalmonCookiesLLC.salmonLLCarray[i];
    currentLocation.getTotalCookies();
  }
}
fillAllTotalCookies();
// helper function that creates elements
function _makeElement(tag, parent, text) {
  const element = document.createElement(tag);
  parent.appendChild(element);
  if (text) {
    element.textContent = text;
  }
  return element;
}

// LOCATION CALLS:
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
console.log(SalmonCookiesLLC.salmonLLCarray);

// MAKING A FORM
const formElem = document.getElementById('formSection')

function handleSubmit(event) {
  event.preventDefault();
  const target = event.target;
  console.log(target);
  // console.log(event.target.name.value);
  let name = target.name.value;
  let minCustomers = target.minCustomers.value;
  minCustomers = parseInt(minCustomers);
  let maxCustomers = target.maxCustomers.value;
  maxCustomers = parseInt(maxCustomers);
  let avgCookie = target.avgCookie.value;
  avgCookie = parseInt(avgCookie);
  let usersSalmonCookie = new SalmonCookiesLLC(name, minCustomers, maxCustomers, avgCookie);

  console.log(usersSalmonCookie);
  usersSalmonCookie.getCustomersPerHour();
  usersSalmonCookie.getCookiesPerHour();
  usersSalmonCookie.getTotalCookies();
  // At this point, completely erase the contents of the table, and re-render an entire new thead, tbody, tfoot
  locationsTable.innerHTML = '';
  makeTableHeader();
  renderAllLocations();
  makeTableFooter();
  event.target.reset();
}

formElem.addEventListener('submit', handleSubmit);
// handleSubmit();

// MAKING A TABLE 
SalmonCookiesLLC.prototype.renderSingleLocation = function(body) {
  let total = 0;
  const rowElem = document.createElement('tr');
  body.appendChild(rowElem);
  const thElem = _makeElement('th', rowElem, this.name);
  for (let i = 0; i < hoursOpen.length; i++) {
    let cookiesThisHour = this.cookiesPerHour[i];
    total += cookiesThisHour;
    _makeElement('td', rowElem, cookiesThisHour);
  }
_makeElement('th', rowElem, total);
}

function makeTableHeader() {
  const theadElem = _makeElement ('thead', locationsTable, null);
  const rowElem = _makeElement('tr', theadElem, null);
  _makeElement('th', rowElem, "Hours:");
  for (let i = 0; i < hoursOpen.length; i++) {
    _makeElement('td', rowElem, hoursOpen[i]);
  }
  _makeElement('th', rowElem, "End of Day Totals:");
}

function renderAllLocations() {
  const tbodyElem = _makeElement('tbody', locationsTable, null);
  for (let i = 0; i < SalmonCookiesLLC.salmonLLCarray.length; i++) {
    SalmonCookiesLLC.salmonLLCarray[i].renderSingleLocation(tbodyElem);
  }
  // for (let i = 0; i < SalmonCookiesLLC.salmonLLCarray.length; i++) {
  //   const currentLocation = SalmonCookiesLLC.salmonLLCarray[i];
  //   currentLocation.getCookiesPerHour();
  //   renderSingleLocation(currentLocation);
  // }
}

function makeTableFooter() {
  const tfootElem = _makeElement ('tfoot', locationsTable, null);
  const rowElem = _makeElement('tr', tfootElem, null);
  _makeElement('th', rowElem, " Grand Totals:");
  let totalCookiesPerHour = 0;
  let grandTotalCookieSales = 0;
  for (let i = 0; i < hoursOpen.length; i++) {
    for (let j = 0; j < SalmonCookiesLLC.salmonLLCarray.length; j++) {
      let currentLocation = SalmonCookiesLLC.salmonLLCarray[j];
      totalCookiesPerHour += currentLocation.cookiesPerHour[i];
    }
    _makeElement('td', rowElem, totalCookiesPerHour);
    grandTotalCookieSales += totalCookiesPerHour;
    totalCookiesPerHour = 0;
  }
  _makeElement('th', rowElem, grandTotalCookieSales);
}

makeTableHeader();
renderAllLocations();
makeTableFooter();
// const thElem = document.createElement('th');
// locationsTable.appendChild(thElem);


// SalmonCookiesLLC.prototype.renderSalmonLLC = function() {
//   const tableElem = document.createElement('table');
//   articleElem.appendChild(tableElem);
//   const theadElem = document.createElement('thead');
//   articleElem.appendChild(theadElem);
//   const row1 = document.createElement('tr');
//   tableElem.appendChild(row1);
//   const th1Elem = document.createElement('th');
//   th1Elem.textContent = '';
//   row1.appendChild(th1Elem);
//   const th2Elem = document.createElement('th');
//   th2Elem.textContent = '6:00am';
//   row1.appendChild(th2Elem);
//   const th3Elem = document.createElement('th');
//   th3Elem.textContent = '7:00am';
//   row1.appendChild(th3Elem);
//   const th4Elem = document.createElement('th');
//   th4Elem.textContent = '8:00am';
//   row1.appendChild(th4Elem);
//   const th5Elem = document.createElement('th');
//   th5Elem.textContent = '9:00am';
//   row1.appendChild(th5Elem);
//   const th6Elem = document.createElement('th');
//   th6Elem.textContent = '10:00am';
//   row1.appendChild(th6Elem);
//   const th7Elem = document.createElement('th');
//   th7Elem.textContent = '11:00am';
//   row1.appendChild(th7Elem);
//   const th8Elem = document.createElement('th');
//   th8Elem.textContent = '12:00am';
//   row1.appendChild(th8Elem);
//   const th9Elem = document.createElement('th');
//   th9Elem.textContent = '1:00pm';
//   row1.appendChild(th9Elem);
//   const th10Elem = document.createElement('th');
//   th10Elem.textContent = '2:00pm';
//   row1.appendChild(th10Elem);
//   const th11Elem = document.createElement('th');
//   th11Elem.textContent = '3:00pm';
//   row1.appendChild(th11Elem);
//   const th12Elem = document.createElement('th');
//   th12Elem.textContent = '4:00pm';
//   row1.appendChild(th12Elem);
//   const th13Elem = document.createElement('th');
//   th13Elem.textContent = '5:00pm';
//   row1.appendChild(th13Elem);
//   const th14Elem = document.createElement('th');
//   th14Elem.textContent = '6:00pm';
//   row1.appendChild(th14Elem);
//   const th15Elem = document.createElement('th');
//   th15Elem.textContent = '7:00pm';
//   row1.appendChild(th15Elem);
//   const th16Elem = document.createElement('th');
//   th16Elem.textContent = 'Daily Location Total';
//   row1.appendChild(th16Elem);
//   const row2 = document.createElement('tr');
//   tableElem.appendChild(row2);
//   const th17Elem = document.createElement('th');
//   th17Elem.textContent = this.name;
//   row2.appendChild(th17Elem);
//   const td1Elem = document.createElement('td');
//   td1Elem.textContent = this.cookiesPerHour[0];
//   row2.appendChild(td1Elem);
//   const td2Elem = document.createElement('td');
//   td2Elem.textContent = this.cookiesPerHour[1];
//   row2.appendChild(td2Elem);
//   const td3Elem = document.createElement('td');
//   td3Elem.textContent = this.cookiesPerHour[2];
//   row2.appendChild(td3Elem);
//   const td4Elem = document.createElement('td');
//   td4Elem.textContent = this.cookiesPerHour[3];
//   row2.appendChild(td4Elem);
//   const td5Elem = document.createElement('td');
//   td5Elem.textContent = this.cookiesPerHour[4];
//   row2.appendChild(td5Elem);
//   const td6Elem = document.createElement('td');
//   td6Elem.textContent = this.cookiesPerHour[5];
//   row2.appendChild(td6Elem);
//   const td7Elem = document.createElement('td');
//   td7Elem.textContent = this.cookiesPerHour[6];
//   row2.appendChild(td7Elem);
//   const td8Elem = document.createElement('td');
//   td8Elem.textContent = this.cookiesPerHour[7];
//   row2.appendChild(td8Elem);
//   const td9Elem = document.createElement('td');
//   td9Elem.textContent = this.cookiesPerHour[8];
//   row2.appendChild(td9Elem);
//   const td10Elem = document.createElement('td');
//   td10Elem.textContent = this.cookiesPerHour[9];
//   row2.appendChild(td10Elem);
//   const td11Elem = document.createElement('td');
//   td11Elem.textContent = this.cookiesPerHour[10];
//   row2.appendChild(td11Elem);
//   const td12Elem = document.createElement('td');
//   td12Elem.textContent = this.cookiesPerHour[11];
//   row2.appendChild(td12Elem);
//   const td13Elem = document.createElement('td');
//   td13Elem.textContent = this.cookiesPerHour[12];
//   row2.appendChild(td13Elem);
//   const td14Elem = document.createElement('td');
//   td14Elem.textContent = this.cookiesPerHour[13];
//   row2.appendChild(td14Elem);
//   const td15Elem = document.createElement('td');
//   td15Elem.textContent = this.cookiesPerHour[14];
//   row2.appendChild(td15Elem);
//   const td16Elem = document.createElement('td');
//   td16Elem.textContent = this.cookiesPerHour[15];
//   row2.appendChild(td16Elem);
//   const th18Elem = document.createElement('th');
//   th18Elem.textContent = this.totalCookies;
//   row2.appendChild(th18Elem);
//   // let table3Elem = document.createElement('tfoot');
//   // articleElem.appendChild(table3Elem);
//   // const row3 = document.createElement('tr');
//   // tableElem.appendChild(row3);
//   // const th1Elem = document.createElement('th');
//   // th1Elem.textContent = 'Totals';
//   // const td1Elem = document.createElement('td');
//   // td1Elem.textContent = this.cookiesPerHour[i];
//   // const td2Elem = document.createElement('td');
//   // td2Elem.textContent = this.cookiesPerHour[i];
//   // const td3Elem = document.createElement('td');
//   // td3Elem.textContent = this.cookiesPerHour[i];
//   // const td4Elem = document.createElement('td');
//   // td4Elem.textContent = this.cookiesPerHour[i];
//   // const td5Elem = document.createElement('td');
//   // td5Elem.textContent = this.cookiesPerHour[i];
//   // const td6Elem = document.createElement('td');
//   // td6Elem.textContent = this.cookiesPerHour[i];
//   // const td7Elem = document.createElement('td');
//   // td7Elem.textContent = this.cookiesPerHour[i];
//   // const td8Elem = document.createElement('td');
//   // td8Elem.textContent = this.cookiesPerHour[i];
//   // const td9Elem = document.createElement('td');
//   // td9Elem.textContent = this.cookiesPerHour[i];
//   // const td10Elem = document.createElement('td');
//   // td10Elem.textContent = this.cookiesPerHour[i];
//   // const td11Elem = document.createElement('td');
//   // td11Elem.textContent = this.cookiesPerHour[i];
//   // const td12Elem = document.createElement('td');
//   // td12Elem.textContent = this.cookiesPerHour[i];
//   // const td13Elem = document.createElement('td');
//   // td13Elem.textContent = this.cookiesPerHour[i];
//   // const td14Elem = document.createElement('td');
//   // td14Elem.textContent = this.cookiesPerHour[i];
//   // const th15Elem = document.createElement('th');
//   // th15Elem.textContent = this.totalCookies;

// // function renderAllLocations() {
// //   for (let i = 0; i < SalmonCookiesLLC.salmonLLCarray[i]; i++) {
// //     const currentLocation = SalmonCookiesLLC.salmonLLCarray[i];
// //     currentLocation.renderSalmonLLC();
// //   }
// // }
// // renderAllLocations();

// seattle.renderSalmonLLC();
// tokyo.renderSalmonLLC();
// dubai.renderSalmonLLC();
// paris.renderSalmonLLC();
// lima.renderSalmonLLC();

// function renderLocation(location) {
//   _makeElement('article', locationsDiv, null)
// }

// function renderLocation(location) {
//   let total = 0
//   const articleElem = _makeElement('article', dailyLocationTotalsDiv, null);
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

// renderLocation(seattle);
// renderLocation(tokyo);
// renderLocation(dubai);
// renderLocation(paris);
// renderLocation(lima);
// function getAllCookies() {
//   for (let i=0; i < hoursOpen.length; i++) {
//     let allCookies = (seattle.totalCookies[i] + tokyo.totalCookies[i] + dubai.totalCookies[i] + paris.totalCookies[i] + lima.totalCookies[i])
//   }
//   return allCookies;
//   console.log(allCookies);
// }
// getAllCookies();

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

// function _makeElement(tag, parent, text) {
//   const element = document.createElement(tag);
//   parent.appendChild(element);
//   if (text) {
//     element.textContent = text;
//   }
//   return element;
// }

// function renderLocation(location) {
//   _makeElement('article', locationsDiv, null)
// }