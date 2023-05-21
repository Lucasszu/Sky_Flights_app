import { general } from "./css/general.scss";
import { style } from "./css/style.scss";
import { queries } from "./css/queries.scss";

// console.log("Hello World");

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "0b25c95471mshdfc13d99da258e5p194746jsnbc288bec58e4",
		"X-RapidAPI-Host": "flight-fare-search.p.rapidapi.com",
	},
	// headers: {
	// 	"X-RapidAPI-Key": "0b25c95471mshdfc13d99da258e5p194746jsnbc288bec58e4",
	// 	"X-RapidAPI-Host": "ryanair.p.rapidapi.com",
	// },
	// headers: {
	// 	"X-RapidAPI-Key": "6fa5e5b441msha926b32117a80a5p196685jsn5ce0550cc5cc",
	// 	"X-RapidAPI-Host": "flight-fare-search.p.rapidapi.com",
	// },
};

// ---------------------------------------------------------
//----------DATA FOR PROJECT --------------------------------

const originInput = document.getElementById("origin-input");
const destinationInput = document.getElementById("destination-input");
const flightTypeSelect = document.getElementById("flight-type-select");
const departureDateInput = document.getElementById("departure-date-input");
const returnDate = document.getElementById("return-date");
const returnDateInput = document.getElementById("return-date-input");
const travelClassSelect = document.getElementById("travel-class-select");
const adultsInput = document.getElementById("adults-input");
const childrenInput = document.getElementById("children-input");
const infantsInput = document.getElementById("infants-input");
const currencyInput = document.getElementById("currency-class-select");
const searchButton = document.getElementById("search-btn");
const clearButton = document.getElementById("cancel-btn");
const tableBody = document.getElementById("table-body");
const tableInfo = document.getElementById("table-info");
const mainSection = document.querySelector(".section-hero");

// RESET FUNKCJA

const reset = () => {
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
};

//Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile--nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
	headerEl.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
	link.addEventListener("click", function (e) {
		if (link.classList.contains("main-nav-link")) {
			headerEl.classList.toggle("nav-open");
		}
	});
});

// CLEAR BUTTON

clearButton.addEventListener("click", () => {
	reset();
});

// FORMAT DATY

const formatDate = date => {
	const formattedDate = date.toISOString().split("T");
	return formattedDate;
};

// WALIDACJA DATY POPRZEDNIEJ

const validateDates = () => {
	const departureDate = departureDateInput.valueAsDate;
	const returnDate = returnDateInput.valueAsDate;

	if (returnDate && departureDate && departureDate > returnDate) {
		alert("Return date must be after departure date");
	}
};

departureDateInput.addEventListener("input", () => {
	validateDates();
});
returnDateInput.addEventListener("input", () => {
	validateDates();
});

document.body.addEventListener("input", () => {
	searchButton.disabled = !originInput.value || !destinationInput.value;
});
originInput.addEventListener("input", () => {});
destinationInput.addEventListener("input", () => {});
flightTypeSelect.addEventListener("change", () => {
	if (flightTypeSelect.value === "one-way") {
		returnDate.classList.add("deactive_return");
	} else {
		returnDate.classList.remove("deactive_return");
	}
});

fetch("https://raw.githubusercontent.com/Lucasszu/reservation/main/endpoints/destination.json")
	.then(res => res.json()) // Transform the data into text res.text
	.then(data => {
		console.log(data.origin);
		data.origin.forEach(element => {
			const origin = document.getElementById("origin-options");

			const optionOrigin = document.createElement("option");
			optionOrigin.value = element.value;
			optionOrigin.textContent = element.code;
			origin.appendChild(optionOrigin);
		});
		data.destination.forEach(element => {
			const destination = document.getElementById("destination-options");
			const optionDestination = document.createElement("option");
			optionDestination.value = element.value;
			optionDestination.textContent = element.code;
			destination.appendChild(optionDestination);
			
		});

	})
	.catch(err => console.log(err));

// const API_LINK= 'https://flight-fare-search.p.rapidapi.com/v2/flight/?'

searchButton.addEventListener("click", () => {
	const origin = originInput.value;
	const destination = destinationInput.value;
	const flightType = flightTypeSelect.value;
	const departureDate = formatDate(departureDateInput.valueAsDate);
	const returnDate = returnDateInput.valueAsDate;
	const travelClass = travelClassSelect.value;
	const adults = adultsInput.value;
	const children = childrenInput.value;
	const infants = infantsInput.value;
	const currencySelect = currencyInput.value;


	if (
		origin &&
		destination &&
		flightType &&
		departureDate &&
		returnDate &&
		travelClass &&
		adults &&
		children &&
		infants
	) {
		searchButton.disabled = false;
	} else {
		searchButton.disabled = true;
	}

	console.log(origin);

	fetch(
		`https://flight-fare-search.p.rapidapi.com/v2/flight/?from=${origin}&to=${destination}&date=${departureDate}&adult=${adults}&child=${children}&infant=${infants}&type=${travelClass}&currency=${currencySelect}`,
		options
		// 'https://ryanair.p.rapidapi.com/flights?origin_code=${origin}&destination_code=${destination}&origin_departure_date=${departureDate}&destination_departure_date=2023-04-24', options
		// `https://ryanair.p.rapidapi.com/flights?origin_code=${origin}&destination_code=${destination}&origin_departure_date=${departureDate}&destination_departure_date=2023-04-24`, options
	)
		.then(response => response.json())
		.then(data => {
			const flightData = data.results;
			console.log(flightData);

			const dane =
				flightData &&
				flightData.map(flight => {
					if (flightData == null) {
						const noResult = document.createElement("div");
						noResult.innerHTML = "No results found";
						mainSection.append(noResult);
						console.log(noResult);
					} else {
						console.log(flight);
						const departure = flight.departureAirport.code;
						const arrival = flight.arrivalAirport.code;
						const duration = flight.duration.text;
						const total = flight.totals.total.toFixed(2);
						const currency = flight.totals.currency;
						const airline = flight.flight_name;

						return { departure, arrival, duration, airline, total, currency };
					}
				});
			populateData(dane);

			if (tableBody !== null) {
				tableBody.scrollIntoView({ behavior: "smooth" });
				mainSection.classList.add("hidden");
				tableInfo.classList.remove("table-info-open");
			}

			// Po wyświetleniu wyników dodaj przycisk "Search again"
			const searchButtonAgain = document.createElement("button");
			searchButtonAgain.innerText = "Search again";
			searchButtonAgain.id = "search-button-again";

			const currencySelect = document.getElementById("currencyAdd");
			currencySelect.classList.remove("hidden-currency");
			currencySelect.addEventListener("change", function () {
				const selectedCurrency = currencySelect.value;
				for (var i = 0; i < tableBody.rows.length; i++) {
					if (selectedCurrency == "USD") {
						let cell = tableBody.rows[i].cells[4];
						const cellCurrency = tableBody.rows[i].cells[5];
						const selectedCurrency = parseFloat(cell.innerHTML);
						const usdValue = selectedCurrency / 3.8;
						cell.innerHTML = usdValue.toFixed(2);
						cellCurrency.innerHTML = "USD";
					} else if (selectedCurrency == "EUR") {
						let cell = tableBody.rows[i].cells[4];
						const cellCurrency = tableBody.rows[i].cells[5];
						const selectedCurrency = parseFloat(cell.innerHTML);
						const eurValue = selectedCurrency / 2;
						cell.innerHTML = eurValue.toFixed(2);
						cellCurrency.innerHTML = "EUR";
					} else {
						let cell = tableBody.rows[i].cells[4];
						const cellCurrency = tableBody.rows[i].cells[5];
						const selectedCurrency = parseFloat(cell.innerHTML);
						const plnValue = selectedCurrency;
						cell.innerHTML = plnValue.toFixed(2);
						cellCurrency.innerHTML = "PLN";
					}
				}
			});

			// Dodaj nasłuchiwanie na kliknięcie przycisku "Search again"
			searchButtonAgain.addEventListener("click", function () {
				tableInfo.style.display = "none";
				window.scrollTo({
					top: 0,
					left: 0,
					behavior: "smooth",
				});
				mainSection.classList.remove("hidden");
				searchButtonAgain.remove();
				currencySelect.classList.add("hidden-currency");

			});

			// Dodaj przycisk "Search again" do elementu body
			document.body.appendChild(searchButtonAgain);
		})
		.catch(err => console.error(err));
});

function populateData(dane) {
	for (const flight of dane) {
		const tableRow = document.createElement("tr");

		tableInfo.classList.add("table-show");

		for (const flightDetail in flight) {
			const tableCell = document.createElement("td");
			tableCell.innerText = flight[flightDetail];
			tableCell.setAttribute("data-label", [flightDetail]);
			tableRow.appendChild(tableCell);
		}
		tableBody.append(tableRow);
	}
}
