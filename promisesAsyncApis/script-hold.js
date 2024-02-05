// In this example we are going to specify a postcode to get Long and Lat details for a location and then we are going to call another API to get details about the related country.

// This will cover chaining promises and error handling

// Note the chain of the promises happens in the .then (data) with a return to the new fetch

// We have to return the new fetch - always return the promise and then handle it outside

// Handling errors in a promise - the only way a promise rejects is when the internet connection goes down and there is no communication with the browser

// We are going to have to simulate this with the network connection in Google Dev tools
// Handle all errors at the end of the chain in a catch method - it will handle errors no matter where they happen in the chain.
// Errors propogate down until they are caught.
// We could also add a callback function on erroring to update the user interface - something like a renderfunction

/*
const getCountryData = () => {
  fetch(revGeoCodeAPI)
    .then((response) => {
      if (!response.ok)
        throw new Error(`real error message ${response.status}`);
      // this rejects the promise itself and then it will propogate down to the catch - it immediately rejects the promise when we throw a new error.

      return response.json();
    })
    // this response gets access to the data immediately
    .then((data) => {
      console.log(data);
      console.log(data.results[0].country);
      const country = data.results[0].country;

      return fetch(
        `https://restcountries.com/v3.1/name/${country}?fullText=true`
      );
    })
    .then((response) => {
      if (!response.ok)
        throw new Error(`real error message ${response.status}`);

      return response.json();
    })
    .then((data) => {
      console.log(data[0].currencies.GBP);
      console.log(data);
    })
    .catch((err) => {
      console.log(`${err}..${err.message}`);
    })
    .finally(() => {
      alert("promise is happening");
    });
};

// To note in 2018 the .finally () method was introduced on Promises. It allows us to specify a function to be executed regardless of the outcome of the promise. For example show a spinner whilst the promise is being executed and hide it when it completes. Finally only works on a promise.

getCountryData();

// Note we are repeating ourself in the manual error handling. So we could create a handler function to encapsulate into a function

// create a function to getJson

const getJson = (url, errorMsg = "Something went wrong!") => {
  fetch(revGeoCodeAPI).then((response) => {
    if (!response.ok) throw new Error(`real error message ${response.status}`);
    // this rejects the promise itself

    return response.json();
  });
};

*/

/// Consuming promise with async and await - an easier and better way to consumer promises

// We will recreate the getCountryData() function including errors
// Error handling is implemented via the try catch method
// Try catch statement - also used in regular javascript.

const postcode = "CB29FA";
const key = "501d1a499e4646b09d894301f006a623";
const revGeoCodeAPI = `https://api.geoapify.com/v1/geocode/search?text=${postcode}&format=json&apiKey=${key}`;

const getCountryData = async () => {
  try {
    const res = await fetch(revGeoCodeAPI);

    // if promise is rejected we can throw an new error

    if (!res.ok) throw new Error(`Problem getting country data`);

    const data = await res.json();
    console.log(data);
    const country = data.results[0].country;

    const res2 = await fetch(
      `https://restcountries.com/v3.1/name/${country}?fullText=true`
    );
    const data2 = await res2.json();
    console.log(data2);
    console.log(data2[0].currencies.GBP);
    return `Your property is based in ${country}`;
  } catch (err) {
    console.log(`${err} ⚠️`);
  }
};

//getCountryData();

/// Getting values out of async functions

// we could mix .then and .catch....

// Remember the getCountryData() is a promise.

// So we can use an IIFE - immediately invoked function
// Here is where we have a async function calling another function

(async function () {
  try {
    const yourCountry = await getCountryData();
    console.log(yourCountry);
  } catch (err) {}
})();

// Running promises in parallel
