// quick reminder practice on destructuring from objects

// Here is a the object

const person = {
  name: "Alice",
  age: 30,
  address: {
    city: "New York",
    zip: "10001",
    coordinates: {
      lat: 40.7128,
      long: -74.006,
    },
  },
};

// Destructure to pull out the data

//const { name, address } = person;
//console.log(name, address);
//console.log(address);
// Destructure to pull out the Lat & Longs

//const {lat,long} = address.coordinates;
//console.log (lat, long)

// alternative way if we had not destructured address:

const {
  address: {
    coordinates: { lat, long },
  },
} = person;
console.log(lat, long);
