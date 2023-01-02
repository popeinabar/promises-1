// create a function and following the progressions inside the function.

// Progression 1: Create a promise call which fetches data

function populateData() {
  //where the data has to be populated
  const gridElement = document.getElementById('message');
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      //on success
      console.log(res.data);
      const result = res.data;

      //iterate the data

      result.forEach((contact) => {
        //creating HTML elements

        const contactElement = document.createElement('div');
        contactElement.setAttribute('class', 'player');
        const nameElement = document.createElement('div');
        const emailElement = document.createElement('div');
        const cityElement = document.createElement('div');
        const phoneElement = document.createElement('div');
        const companyElement = document.createElement('div');

        //mapping the data to the elements
        nameElement.innerText = contact.name;
        emailElement.innerText = contact.email;
        cityElement.innerText = contact.address.city;
        phoneElement.innerText = contact.phone;
        companyElement.innerText = contact.company.name;

        //Forming the HTML structure
        contactElement.append(nameElement);
        contactElement.append(emailElement);
        contactElement.append(cityElement);
        contactElement.append(phoneElement);
        contactElement.append(companyElement);

        gridElement.append(contactElement);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
// Progression 2: Display the fetched data in the form of list
// Progression 3: When the promise call is rejected then throw an error
