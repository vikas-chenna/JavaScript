// console.log("working");

    let currencyRate = {
      // --- North & South America ---
      USD: 0.012, // US Dollar
      CAD: 0.016, // Canadian Dollar
      MXN: 0.2, // Mexican Peso
      BRL: 0.061, // Brazilian Real

      // --- Europe ---
      EUR: 0.011, // Euro (Major European Nations)
      GBP: 0.0093, // British Pound (UK)
      CHF: 0.011, // Swiss Franc (Switzerland)
      RUB: 1.1, // Russian Ruble

      // --- Asia & Middle East ---
      JPY: 1.85, // Japanese Yen
      CNY: 0.086, // Chinese Yuan
      AED: 0.044, // UAE Dirham (Dubai)
      SAR: 0.045, // Saudi Riyal
      SGD: 0.016, // Singapore Dollar
      KRW: 16.2, // South Korean Won
      PKR: 3.32, // Pakistani Rupee
      NPR: 1.6, // Nepalese Rupee

      // --- Oceania & Africa ---
      AUD: 0.018, // Australian Dollar
      NZD: 0.02, // New Zealand Dollar
      ZAR: 0.22, // South African Rand
      EGP: 0.57, // Egyptian Pound
    };



const form = document.querySelector("form");
const result = document.querySelector("#result"); 
const reset = document.getElementById("reset");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const userInput = document.getElementById("userInput").value;
  const selectedCountry = document.getElementById("countriesName").value;
  let rate = currencyRate[selectedCountry];

  if (userInput != "") {
    const disResult = (userInput * rate).toFixed(2);
    result.innerText = `Your Convert INR value is ${userInput} to ${selectedCountry} ${disResult}`;
  } else {
    alert("Please Enter Values First");
  }
});

reset.addEventListener("click", function () {
  result.innerText = "";
});