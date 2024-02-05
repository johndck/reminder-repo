// Implementing promises.all to get Country data using async function

// United Kingdom, France and Spain

const getCountryData = async (c1, c2, c3) => {
  // takes in an array of promises and returns a new array

  console.log(c1);

  const res2 = fetch(`https://restcountries.com/v3.1/name/${c1}?fullText=true`);
  const res3 = fetch(`https://restcountries.com/v3.1/name/${c2}?fullText=true`);
  const res4 = fetch(`https://restcountries.com/v3.1/name/${c3}?fullText=true`);

  const data = await Promise.all([res2, res3, res4]);
  const results = await data.json();
  console.log(results);
};

getCountryData("France", "Germany", "Spain");
