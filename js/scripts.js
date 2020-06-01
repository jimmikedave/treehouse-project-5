//dynamically creates the search bar
const searchContainer = document.getElementsByClassName('search-container');
const searchForm = document.createElement('form');
const searchInput = document.createElement('input');
const searchSubmit = document.createElement('input');

searchForm.action = '#';
searchForm.method = 'get';
searchInput.type = 'search';
searchInput.id = 'search-input';
searchInput.className = 'search-Input';
searchInput.placeholder = 'Search...';
searchSubmit.type = 'submit';
searchSubmit.value = 'Search';
searchSubmit.id = 'search-submit';
searchSubmit.className = 'search-submit';

searchContainer[0].appendChild(searchForm);
searchForm.appendChild(searchInput);
searchForm.appendChild(searchSubmit);

//targets the search elements created
const search = document.getElementById('search-input');
const submit = document.getElementById('search-submit');

//converts API to json and checks for an error
function fetchData(url) {
  return fetch(url)
            //.then(checkStatus)
            .then(res => res.json())
            .catch(error => console.log('Looks like theres an error', error))
}

//12 random users are pulled
fetchData('https://randomuser.me/api/?nat=ch,gb,ie,us&results=12')
  .then(data => {
    const user = data.results;
//calls the generateCard function to create a card for each API
    for(i = 0; i < 12; i += 1) {
          generateCard(user[i]);
          const cardArray = document.querySelectorAll('div.card');

      if (cardArray.length === 12) {
        for(i = 0; i < 12; i += 1) {
        cardArray[i].addEventListener('click', e => {
          const cardEmail = e.currentTarget
            .getElementsByClassName('card-text')[0]
            .textContent

            for(i = 0; i < 12; i += 1){
              if(cardEmail === user[i].email) {
                generateModal(user[i], i, user);
              }
            }
          })
        }
      }
    }
  })

  // dynamically creates a card for the API object
  function generateCard(user) {
    const galleryDiv = document.getElementById('gallery');
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

  //dynamically creates a modal window for the API object
  function generateModal(user, i, modal){

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
    const dob =  user.dob.date.split('');
    const birthday = dob.slice(0, 10).join('');
    const modalCycle = document.createElement('div');
    const modalPrev = document.createElement('button');
    const modalNext = document.createElement('button');

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
    modalBirthday.textContent = `Birthday: ${birthday}`;
    modalCycle.className = 'modal-btn-container';
    modalPrev.type = 'button';
    modalPrev.id = 'modal-prev';
    modalPrev.className = 'modal-prev btn';
    modalPrev.textContent = 'Prev';
    modalNext.type = 'button';
    modalNext.id = 'modal-next';
    modalNext.className = 'modal-next btn';
    modalNext.textContent = 'Next';

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
    modalDiv.appendChild(modalCycle);
    modalCycle.appendChild(modalPrev);
    modalCycle.appendChild(modalNext);

    modalContainerDiv.style.display = '';

    const next = document.getElementById('modal-next');
    const prev = document.getElementById('modal-prev');
    const modalD = document.querySelector('div.modal-container');

    //closes the modal window when clicked
    modalButton.addEventListener('click', e => {
      body.removeChild(modalD);
    })

    //closes the current modal window and loads the next user
    next.addEventListener('click', (e) => {
       body.removeChild(modalD);
       let nextIndex = i + 1;
       console.log(i);
       if (i === 11) {
         let nextIndex = 0 + 1;
         generateModal(modal[0], nextIndex, modal)
       } else {
         generateModal(modal[nextIndex], nextIndex, modal)
       }
    })

    //closes the current modal window and loads the previous user
    prev.addEventListener('click', (e) => {
       body.removeChild(modalD);
       let prevIndex = i - 1;
       console.log(i);
       if (i === 0) {
         let prevIndex = 11 - 1;
         generateModal(modal[11], prevIndex, modal)
       } else {
         generateModal(modal[prevIndex], prevIndex, modal)
       }
    })
  };

  //displays names based on index matching
  function searchFilter() {
    const apiArray = document.querySelectorAll('div.card');

    for(i = 0; i < 12; i += 1) {
      const apiName = apiArray[i].getElementsByClassName('card-name')[0].textContent

      if(apiName.toLowerCase().indexOf(search.value.toLowerCase()) > -1){
        apiArray[i].style.display = '';
      } else {
        apiArray[i].style.display = 'none';
      }
    }
  }

//filters through the names based on the input value
search.addEventListener('input', () => {
  searchFilter()
});

//filters through the names based on the input value
submit.addEventListener('click', () => {
  searchFilter()
})
