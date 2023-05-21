/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _css_general_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _css_queries_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



 // console.log("Hello World");
// let heading = document.querySelector("#demo"),
//     sumValue = sum(10,5);
// heading.innerText = `10+10= ${sumValue}`;
// let myIcon = new Image();
// myIcon.src = Icon;
// document.querySelector("div").append(myIcon);
// document.querySelector('div').classList.add("change");

var options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0b25c95471mshdfc13d99da258e5p194746jsnbc288bec58e4",
    "X-RapidAPI-Host": "flight-fare-search.p.rapidapi.com"
  } // headers: {
  // 	"X-RapidAPI-Key": "0b25c95471mshdfc13d99da258e5p194746jsnbc288bec58e4",
  // 	"X-RapidAPI-Host": "ryanair.p.rapidapi.com",
  // },
  // headers: {
  // 	"X-RapidAPI-Key": "6fa5e5b441msha926b32117a80a5p196685jsn5ce0550cc5cc",
  // 	"X-RapidAPI-Host": "flight-fare-search.p.rapidapi.com",
  // },

}; // ---------------------------------------------------------
//----------DATA FOR PROJECT --------------------------------

var originInput = document.getElementById("origin-input");
var destinationInput = document.getElementById("destination-input");
var flightTypeSelect = document.getElementById("flight-type-select");
var departureDateInput = document.getElementById("departure-date-input");
var returnDate = document.getElementById("return-date");
var returnDateInput = document.getElementById("return-date-input");
var travelClassSelect = document.getElementById("travel-class-select");
var adultsInput = document.getElementById("adults-input");
var childrenInput = document.getElementById("children-input");
var infantsInput = document.getElementById("infants-input");
var currencyInput = document.getElementById("currency-class-select");
var searchButton = document.getElementById("search-btn");
var clearButton = document.getElementById("cancel-btn");
var tableBody = document.getElementById("table-body");
var tableInfo = document.getElementById("table-info");
var mainSection = document.querySelector(".section-hero"); // RESET FUNKCJA

var reset = function reset() {
  originInput.value = "";
  destinationInput.value = "";
  flightTypeSelect.value = "one-way";
  departureDateInput.valueAsDate = new Date();
  returnDateInput.valueAsDate = new Date();
  returnDate.classList.add("deactive_return");
  travelClassSelect.value = "ECONOMY";
  adultsInput.value = 1;
  childrenInput.value = 0;
  infantsInput.value = 0;
  currencyInput.value = "PLN";
  searchButton.disabled = true;
  tableBody.innerHTML = "";
}; //Make mobile navigation work


var btnNavEl = document.querySelector(".btn-mobile--nav");
var headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
var allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    if (link.classList.contains("main-nav-link")) headerEl.classList.toggle("nav-open");
  });
}); // FORUMULARZ POPUP
// CLEAR BUTTON

clearButton.addEventListener("click", function () {
  reset();
}); // FORMAT DATY

var formatDate = function formatDate(date) {
  var formattedDate = date.toISOString().split("T");
  return formattedDate;
}; // WALIDACJA DATY POPRZEDNIEJ


var validateDates = function validateDates() {
  var departureDate = departureDateInput.valueAsDate;
  var returnDate = returnDateInput.valueAsDate;

  if (returnDate && departureDate && departureDate > returnDate) {
    alert("Return date must be after departure date");
  }
};

departureDateInput.addEventListener("input", function () {
  validateDates();
});
returnDateInput.addEventListener("input", function () {
  validateDates();
});
document.body.addEventListener("input", function () {
  searchButton.disabled = !originInput.value || !destinationInput.value;
});
originInput.addEventListener("input", function () {// console.log(originInput.value);
  // autocomplete
});
destinationInput.addEventListener("input", function () {// console.log(destinationInput.value);
  // autocomplete
});
flightTypeSelect.addEventListener("change", function () {
  if (flightTypeSelect.value === "one-way") {
    returnDate.classList.add("deactive_return");
  } else {
    returnDate.classList.remove("deactive_return");
  }
});
fetch("https://raw.githubusercontent.com/Lucasszu/reservation/main/endpoints/destination.json") // 	.then
.then(function (res) {
  return res.json();
}) // Transform the data into text res.text
.then(function (data) {
  console.log(data.origin);
  data.origin.forEach(function (element) {
    var origin = document.getElementById("origin-options"); // console.log(origin);

    var optionOrigin = document.createElement("option"); // console.log(optionOrigin);

    optionOrigin.value = element.value; // console.log(element);
    // console.log(option.value);

    optionOrigin.textContent = element.code;
    origin.appendChild(optionOrigin); // console.log(element);
  });
  data.destination.forEach(function (element) {
    var destination = document.getElementById("destination-options");
    var optionDestination = document.createElement("option"); // console.log(optionDestination);

    optionDestination.value = element.value; // console.log(element);
    // console.log(option.value);

    optionDestination.textContent = element.code;
    destination.appendChild(optionDestination); // console.log(element);
  }); // console.log(data);
})["catch"](function (err) {
  return console.log(err);
}); // const API_LINK= 'https://flight-fare-search.p.rapidapi.com/v2/flight/?'

searchButton.addEventListener("click", function () {
  var origin = originInput.value;
  var destination = destinationInput.value;
  var flightType = flightTypeSelect.value;
  var departureDate = formatDate(departureDateInput.valueAsDate);
  var returnDate = returnDateInput.valueAsDate;
  var travelClass = travelClassSelect.value;
  var adults = adultsInput.value;
  var children = childrenInput.value;
  var infants = infantsInput.value;
  var currencySelect = currencyInput.value; // const results = document.createElement("li");

  if (origin && destination && flightType && departureDate && returnDate && travelClass && adults && children && infants) {
    searchButton.disabled = false;
  } else {
    searchButton.disabled = true;
  }

  console.log(origin);
  fetch("https://flight-fare-search.p.rapidapi.com/v2/flight/?from=".concat(origin, "&to=").concat(destination, "&date=").concat(departureDate, "&adult=").concat(adults, "&child=").concat(children, "&infant=").concat(infants, "&type=").concat(travelClass, "&currency=").concat(currencySelect), options // 'https://ryanair.p.rapidapi.com/flights?origin_code=${origin}&destination_code=${destination}&origin_departure_date=${departureDate}&destination_departure_date=2023-04-24', options
  // `https://ryanair.p.rapidapi.com/flights?origin_code=${origin}&destination_code=${destination}&origin_departure_date=${departureDate}&destination_departure_date=2023-04-24`, options
  ).then(function (response) {
    return response.json();
  }) // .then(flights => {
  // 	populateData(flights);
  // })
  .then(function (data) {
    var flightData = data.results;
    console.log(flightData);
    var dane = flightData && flightData.map(function (flight) {
      if (flightData == null) {
        var noResult = document.createElement("div");
        noResult.innerHTML = "No results found";
        mainSection.append(noResult);
        console.log(noResult);
      } else {
        console.log(flight);
        var departure = flight.departureAirport.code;
        var arrival = flight.arrivalAirport.code;
        var duration = flight.duration.text;
        var total = flight.totals.total.toFixed(2);
        var currency = flight.totals.currency;
        var airline = flight.flight_name;
        return {
          departure: departure,
          arrival: arrival,
          duration: duration,
          airline: airline,
          total: total,
          currency: currency
        };
      }
    });
    populateData(dane); // console.log(tableInfo);

    if (tableBody !== null) {
      tableBody.scrollIntoView({
        behavior: "smooth"
      });
      mainSection.classList.add("hidden");
      tableInfo.classList.remove("table-info-open");
    } // Po wyświetleniu wyników dodaj przycisk "Search again"


    var searchButtonAgain = document.createElement("button");
    searchButtonAgain.innerText = "Search again";
    searchButtonAgain.id = "search-button-again";
    var currencySelect = document.getElementById("currencyAdd");
    currencySelect.classList.remove("hidden-currency");
    currencySelect.addEventListener("change", function () {
      var selectedCurrency = currencySelect.value;

      for (var i = 0; i < tableBody.rows.length; i++) {
        if (selectedCurrency == "USD") {
          var cell = tableBody.rows[i].cells[4];
          var cellCurrency = tableBody.rows[i].cells[5];

          var _selectedCurrency = parseFloat(cell.innerHTML);

          var usdValue = _selectedCurrency / 3.8;
          cell.innerHTML = usdValue.toFixed(2);
          cellCurrency.innerHTML = "USD";
        } else if (selectedCurrency == "EUR") {
          var _cell = tableBody.rows[i].cells[4];
          var _cellCurrency = tableBody.rows[i].cells[5];

          var _selectedCurrency2 = parseFloat(_cell.innerHTML);

          var eurValue = _selectedCurrency2 / 2;
          _cell.innerHTML = eurValue.toFixed(2);
          _cellCurrency.innerHTML = "EUR";
        } else {
          var _cell2 = tableBody.rows[i].cells[4];
          var _cellCurrency2 = tableBody.rows[i].cells[5];

          var _selectedCurrency3 = parseFloat(_cell2.innerHTML);

          var plnValue = _selectedCurrency3;
          _cell2.innerHTML = plnValue.toFixed(2);
          _cellCurrency2.innerHTML = "PLN";
        }
      }
    }); // Dodaj nasłuchiwanie na kliknięcie przycisku "Search again"

    searchButtonAgain.addEventListener("click", function () {
      tableInfo.style.display = "none";
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
      mainSection.classList.remove("hidden");
      searchButtonAgain.remove();
      currencySelect.classList.add("hidden-currency"); // console.log(dane);
    }); // Dodaj przycisk "Search again" do elementu body

    document.body.appendChild(searchButtonAgain);
  })["catch"](function (err) {
    return console.error(err);
  });
});

function populateData(dane) {
  var _iterator = _createForOfIteratorHelper(dane),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var flight = _step.value;
      var tableRow = document.createElement("tr"); // const tableWrapper = document.querySelector(".table-wrapper");

      tableInfo.classList.add("table-show");

      for (var flightDetail in flight) {
        var tableCell = document.createElement("td");
        tableCell.innerText = flight[flightDetail];
        tableCell.setAttribute("data-label", [flightDetail]);
        tableRow.appendChild(tableCell);
      }

      tableBody.append(tableRow);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
})();

/******/ })()
;
//# sourceMappingURL=index.e3b89740e6e1b196d556.bundle.js.map