//Adds to the infrastructure of the HTML dynamically
const searchDiv = document.getElementsByClassName('search-container');
const searchForm = document.createElement('form');
const searchSearch = document.createElement('input');
const searchSubmit = document.createElement('input');

// const galleryDiv = document.getElementById('gallery');
// const cardDiv = document.createElement('div');
// const cardImgDiv = document.createElement('div');
// const cardImg = document.createElement('img');
// const cardInfoDiv = document.createElement('div');
// const nameh3 = document.createElement('h3');
// const cardEmail = document.createElement('p');
// const cardArea = document.createElement('p');

const modalContainerDiv = document.createElement('div');
const body = document.body;
const bodyScript = body.lastElementChild;
const modalDiv = document.createElement('div');
const modalButton = document.createElement('button');
const strong = document.createElement('strong');
const modalInfoDiv = document.createElement('div');
const modalImg = document.createElement('img');
const modalh3 = document.createElement('h3');
const modalEmail = document.createElement('p');
const modalCity = document.createElement('p');
const modalHr = document.createElement('hr');
const modalPhone = document.createElement('p');
const modalAddress = document.createElement('p');
const modalBirthday = document.createElement('p');

searchSearch.type = 'search';
searchSearch.id = 'search-input';
searchSearch.className = 'search-input';
searchSearch.placeholder = 'Search...'
searchSubmit.type = 'submit';
searchSubmit.value = '&#x1F50D;';
searchSubmit.id = 'search-submit';
searchSubmit.className = 'search-submit';

// cardDiv.className = 'card';
// cardImgDiv.className = 'card-img-container';
// cardImg.className = 'card-img';
// cardImg.src = 'https://placehold.it/90x90';
// cardImg.alt = 'profile picture'
// cardInfoDiv.className = 'card-info-container';
// nameh3.id = 'name';
// nameh3.className = 'card-name cap';
// nameh3.textContent = 'first last';
// cardEmail.className = 'card-text';
// cardEmail.textContent = 'email';
// cardArea.className = 'card-text cap';
// cardArea.textContent = 'city, state';

modalContainerDiv.className = 'modal-container';
modalDiv.className = 'modal';
modalButton.type = 'button';
modalButton.id = 'modal-close-btn';
modalButton.className = 'modal-close-btn';
modalInfoDiv.className = 'modal-info-container';
modalImg.className = 'modal-img';
modalImg.src = 'https://placehold.it/125x125';
modalImg.alt = 'profile picture';
modalh3.id = 'name';
modalh3.className = 'modal-name cap';
modalh3.textContent = 'name';
modalEmail.className = 'modal-text';
modalEmail.textContent = 'email';
modalCity.className = 'modal-text cap';
modalCity.textContent = 'city';
modalPhone.className = 'modal-text';
modalPhone.textContent = '(555) 555-5555';
modalAddress.className = 'modal-text';
modalAddress.textContent = '123 Portland Ave., Portland, OR 97204';
modalBirthday.className = 'modal-text';
modalBirthday.textContent = 'Birthday: 10/21/2015';

searchDiv[0].appendChild(searchForm);
searchForm.appendChild(searchSearch);
searchForm.appendChild(searchSubmit);

// galleryDiv.appendChild(cardDiv);
// cardDiv.appendChild(cardImgDiv);
// cardImgDiv.appendChild(cardImg);
// cardDiv.appendChild(cardInfoDiv);
// cardInfoDiv.appendChild(nameh3);
// cardInfoDiv.appendChild(cardEmail);
// cardInfoDiv.appendChild(cardArea);

body.insertBefore(modalContainerDiv, bodyScript);
modalContainerDiv.appendChild(modalDiv);
modalDiv.appendChild(modalButton);
modalButton.appendChild(strong);
modalDiv.appendChild(modalInfoDiv);
modalInfoDiv.appendChild(modalImg);
modalInfoDiv.appendChild(modalh3);
modalInfoDiv.appendChild(modalEmail);
modalInfoDiv.appendChild(modalCity);
modalInfoDiv.appendChild(modalHr);
modalInfoDiv.appendChild(modalPhone);
modalInfoDiv.appendChild(modalAddress);
modalInfoDiv.appendChild(modalBirthday);

modalContainerDiv.style.display = 'none';


//Get and display 12 random users Image, First & Last, Email, City or Location
function fetchData(url) {
  return fetch(url)
            //.then(checkStatus)
            .then(res => res.json())
            .catch(error => console.log('Looks like theres an error', error))

}

fetchData('https://randomuser.me/api/')
  .then(data => {
    const galleryDiv = document.getElementById('gallery');
    const cardDiv = document.createElement('div');
    const cardImgDiv = document.createElement('div');
    const cardImg = document.createElement('img');
    const cardInfoDiv = document.createElement('div');
    const nameh3 = document.createElement('h3');
    const cardEmail = document.createElement('p');
    const cardArea = document.createElement('p');

    const user = data.results[0]

    cardDiv.className = 'card';
    cardImgDiv.className = 'card-img-container';
    cardImg.className = 'card-img';
    cardImg.src = 'https://placehold.it/90x90';
    cardImg.alt = 'profile picture'
    cardInfoDiv.className = 'card-info-container';
    nameh3.id = 'name';
    nameh3.className = 'card-name cap';
    nameh3.textContent = `${user.name.first} ${user.name.last}`;
    cardEmail.className = 'card-text';
    cardEmail.textContent = user.email;
    cardArea.className = 'card-text cap';
    cardArea.textContent = `${user.location.city}, ${user.location.state}`;

    galleryDiv.appendChild(cardDiv);
    cardDiv.appendChild(cardImgDiv);
    cardImgDiv.appendChild(cardImg);
    cardDiv.appendChild(cardInfoDiv);
    cardInfoDiv.appendChild(nameh3);
    cardInfoDiv.appendChild(cardEmail);
    cardInfoDiv.appendChild(cardArea);


    console.log(user)
    console.log(user.name.first) //First Name
    console.log(user.name.last) //Last Name
    console.log(user.email) //email
    console.log(user.location.city) //City
    console.log(user.location.state) //state
  })

  const test = document.getElementById('gallery');
  console.log(test);
//Create a modal window
