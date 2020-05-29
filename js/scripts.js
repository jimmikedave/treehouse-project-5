const galleryDiv = document.getElementById('gallery');
let userArray = [];

//converts API to json and checks for an error
function fetchData(url) {
  return fetch(url)
            //.then(checkStatus)
            .then(res => res.json())
            .catch(error => console.log('Looks like theres an error', error))
}

//12 random users are pulled
for(i = 0; i < 12; i += 1) {
  fetchData('https://randomuser.me/api/')
    //pushes each object into an array
    //generates a card for the object
    .then(data => {
        const user = data.results[0]
        generateCard(user)
        userArray.push(user);
    })
    //displays a modal window when the object card is clicked
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

  //dynamically creates a card for the API object
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

  //dynamically creates a modal window for the API object
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
    const dob =  user.dob.date.split('');
    const birthday = dob.slice(0, 10).join('');
    

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
