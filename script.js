const hamburger = document.querySelector('.btn');
const navMenu = document.querySelector('.menu-sec');
const worksSection = document.getElementById('work');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.menu-sec').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

const cardsData = [
  {
    image: 'image/Snapshoot Portfolio7.png',
    name: 'Tonic',
    description:
     '  A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '',
    sourceLink: '',
  },
  {
    image: 'image/Snapshoot Portfolio4.png',
    name: 'Multi-Post Stories',
    description:
     '  A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '',
    sourceLink: '',
  },
  {
    image: 'image/Snapshoot Portfolio.png',
    name: 'Tonic',
    description:
     '  A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '',
    sourceLink: '',
  },
  {
    image: 'image/Snapshoot Portfolio2.png',
    name: 'Multi-Post Stories',
    description:
     '  A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '',
    sourceLink: '',
  },
];

function display() {
  let displayCard = '';
  for (let i = 0; i < 4; i += 1) {
    displayCard += `
  
    <article class="card-1">
    <img src="${cardsData[i].image}" alt="image1" >
    <div class="gridd">
        <h3 class="tonic">${cardsData[i].name}</h3>
    <div class="canop">
        <p class="can-info">Canopy</p>
        <div class="point"></div>
        <p class="back">Back End Dev</p>
        <div class="point"></div>
        <p class="back">2015</p>
    </div>
    <p class="paranic">
        A daily selection of privately personalized reads; no accounts or sign-ups required
    </p>
    <ul class="languages">
        <li><a href="#">HTML</a></li>
        <li><a href="#">CSS</a></li>
        <li><a href="#">JavaScript</a></li>
    </ul>
    <button class="see">See project</button>
    </div>
    
</article>

  
     `;
  }
  worksSection.innerHTML = displayCard;
}

display();

const showPopupBtn = document.querySelectorAll('.see');
const popUpContainer = document.createElement('section');
popUpContainer.className = 'popup_section';
// popUpContainer.classList.add('bg_color6');
showPopupBtn.forEach((e, i) => {
  e.addEventListener('click', () => {
    const popupEle = `
    
    <article class="popup">
        <div class="popup-window">
            <div class="all-details">
                <div class="toni-flex">
                    <h3 class="tonic-popup">${cardsData[i].name}</h3>
                    <div class="canop-popup">
                        <p class="can-info-popup">CANOPY</p>
                        <div class="point-popup"></div>
                        <p class="back-popup">Back End Dev</p>
                        <div class="point-popup"></div>
                        <p class="back-popup">2015</p>
                    </div>
                </div>
                <button class="popup-btn" type="button"><i class='bx bx-x'></i></button>
            </div>
            <div class="popup-over">
            <img src="${cardsData[i].image}" alt="image1" >
            </div>
            <div class="detail-popup">
                <p class="par-popup">
                    A daily selection of privately personalized reads; no <br> accounts or sign-ups required.
                </p>
                <div class="popup-techno">
                    <ul class="languages-popup">
                        <li><a href="#">HTML</a></li>
                        <li><a href="#">CSS</a></li>
                        <li><a href="#">JavaScript</a></li>
                    </ul>
                    <div class="btn-popup">
                        <button class="live" type="button">See Live<i class='bx bx-male-sign'></i></button>
                        <button class="source" type="button">See source<i class='bx bxl-github'></i></button>
                    </div>
                </div>
            </div>
        </div>
    </article>  

    `;

    const body = document.querySelector('body');
    body.appendChild(popUpContainer);
    const popUpBox = document.querySelector('.popup_section');
    popUpBox.innerHTML = popupEle;
    const closePopup = document.querySelectorAll('.popup-btn');
    closePopup.forEach((e) => {
      e.addEventListener('click', () => {
        popUpContainer.remove();
      });
    });
  });
});

const error = document.getElementById('error-msg');
const form = document.querySelector('.form-set');
const userEmail = document.getElementById('user-email');
const fName = document.getElementById('name');
const textArea = document.getElementById('textarea');
const showError = 'Please write your email address in lower case';

// Local storage

const formChangeEvents = [fName, userEmail, textArea];
formChangeEvents.forEach((eachField) => {
  eachField.addEventListener('change', () => {
    error.innerHTML = '';
    const formDataObject = {
      nameKey: fName.value,
      emailKey: userEmail.value,
      textAreaKey: textArea.value,
    };
    localStorage.setItem('formValues', JSON.stringify(formDataObject));
  });
});

window.addEventListener('load', () => {
  const formInfo = JSON.parse(localStorage.getItem('formValues'));
  if (formInfo) {
    fName.value = formInfo.nameKey;
    userEmail.value = formInfo.emailKey;
    textArea.value = formInfo.textAreaKey;
  } else {
    fName.value = '';
    userEmail.value = '';
    textArea.value = '';
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const userInput = userEmail.value;
  if (userInput !== userInput.toLowerCase()) {
    error.innerText = showError;
  } else {
    error.innerText = '';
    form.submit();
  }
});