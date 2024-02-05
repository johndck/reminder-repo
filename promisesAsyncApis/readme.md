Revision notes on Promises, Async and APIs

A modern javascript feature to replace callback hell!

# Promises - key takeaways

- gets us away from callback hell
- they are an object that contain future values
- promises have a lifecycle - Pending & settled - (a)fulfilled or (b)rejected
- promises have to be built but we mainly consumer them for API data

# Consuming Promises

- implemented by following a set of steps in the code

- step 1 - fetch (url);
- step 2 - fetch returns a promise, so we chain on .then(response)
- step 3 - convert the response to a readable object - response.json()
- step 4 - response.json returns a promise, so we chain .then(data)
- step 5 - execute function on the data returned.

# Chaining Promises

- 2 sequential API calls

# Handling errors

- summary at the end
