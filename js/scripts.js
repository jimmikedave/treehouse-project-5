//Adds to the infrastructure of the HTML dynamically
const searchDiv = document.getElementsByClassName('search-container');
const searchForm = document.createElement('form');
const searchSearch = document.createElement('input');
const searchSubmit = document.createElement('input');
const galleryDiv = document.getElementById('gallery');
let userArray = [];

searchSearch.type = 'search';
searchSearch.id = 'search-input';
searchSearch.className = 'search-input';
searchSearch.placeholder = 'Search...'
searchSubmit.type = 'submit';
searchSubmit.value = 'Search';
searchSubmit.id = 'search-submit';
searchSubmit.className = 'search-submit';

searchDiv[0].appendChild(searchForm);
searchForm.appendChild(searchSearch);
searchForm.appendChild(searchSubmit);

//Get and display 12 random users Image, First & Last, Email, City or Location
function fetchData(url) {
  return fetch(url)
            //.then(checkStatus)
            .then(res => res.json())
            .catch(error => console.log('Looks like theres an error', error))
}

for(i = 0; i < 12; i += 1) {
  fetchData('https://randomuser.me/api/')
    .then(data => {
        const user = data.results[0]
        generateCard(user)
        userArray.push(user);
    })
    .then(data => {
      if (userArray.length === 12){
        const cardArray = document.querySelectorAll('div.card');

        for(i = 0; i < 12; i += 1) {
          cardArray[i].addEventListener('click', e => {
            const cardEmail = e.currentTarget
              .getElementsByClassName('card-text')[0]
              .textContent;

              for(i = 0; i < 12; i += 1){
                if(cardEmail === userArray[i].email) {
                  console.log(userArray[i])
                  generateModal(userArray[i]);
              }
            }
          })
        }
      }
    })
  }

  function generateCard(user) {
    const cardDiv = document.createElement('div');
    const cardImgDiv = document.createElement('div');
    const cardImg = document.createElement('img');
    const cardInfoDiv = document.createElement('div');
    const nameh3 = document.createElement('h3');
    const cardEmail = document.createElement('p');
    const cardArea = document.createElement('p');

    cardDiv.className = 'card';
    cardImgDiv.className = 'card-img-container';
    cardImg.className = 'card-img';
    cardImg.src = user.picture.large;
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
}

function generateModal(user){

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

  modalContainerDiv.className = 'modal-container';
  modalDiv.className = 'modal';
  modalButton.type = 'button';
  modalButton.id = 'modal-close-btn';
  modalButton.className = 'modal-close-btn';
  modalInfoDiv.className = 'modal-info-container';
  modalImg.className = 'modal-img';
  modalImg.src = user.picture.large;
  modalImg.alt = 'profile picture';
  modalh3.id = 'name';
  modalh3.className = 'modal-name cap';
  modalh3.textContent = `${user.name.first} ${user.name.last}`;
  modalEmail.className = 'modal-text';
  modalEmail.textContent = user.email;
  modalCity.className = 'modal-text cap';
  modalCity.textContent = user.location.city;
  modalPhone.className = 'modal-text';
  modalPhone.textContent = user.cell;
  modalAddress.className = 'modal-text';
  modalAddress.textContent = `${user.location.street.number} ${user.location.street.name},
    ${user.location.city}, ${user.location.state} ${user.location.postcode}`;
  modalBirthday.className = 'modal-text';
  modalBirthday.textContent = `Birthday: ${user.dob.date}`;

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

  modalContainerDiv.style.display = '';

  modalButton.addEventListener('click', e => {
    modalContainerDiv.style.display = 'none';
  })
};
