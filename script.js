const logo = document.querySelector('.ham');
const xButons = document.querySelector('.close-button');
const menu = document.querySelector('#menu-pop');

logo.addEventListener('click', () => {
  menu.style.display = 'block';
});

xButons.addEventListener('click', () => {
  menu.style.display = 'none';
});

document.querySelectorAll('.popupButtons').forEach((n) => n.addEventListener('click', () => {
  menu.style.display = 'none';
}));

const attendees = [
  {
    image: 'images/stefano.jpeg',
    name: 'Stefano Domenicalli',
    role: 'President & CEO Formula1',
    history: 'After joining Ferrari as a young man,he worked his way up to become Team Principal',
  },

  {
    image: 'images/hamilton.jpeg',
    name: 'Lewis Hamilton',
    role: '103 Grand Prix Winner',
    history: 'British racing driver currently competing in Formula One, driving for Mercedes.',
  },

  {
    image: 'images/schumacher3.jpeg',
    name: 'Michael Schumacher',
    role: '91 Grand Prix Winner',
    history: 'Former German racing driver who competed in Formula One for Jordan, Benetton, Ferrari, and Mercedes',
  },

  {
    image: 'images/vettel2.jpeg',
    name: 'Sebastian Vettel',
    role: '53 Grand Prix Winner',
    history: 'German racing driver who competed in Formula One from 2007 to 2022 for BMW Sauber, Toro Rosso, Red Bull, Ferrari and Aston Martin.',
  },

  {
    image: 'images/verstappen.jpeg',
    name: 'Max Verstappen',
    role: '44 Grand Prix Winner',
    history: 'Dutch and Belgian racing driver and the 2021 and 2022 Formula One World Champion with Red Bull Racing.',
  },

  {
    image: 'images/leclerc.jpeg',
    name: 'Charles Leclerc',
    role: '21 Grand Prix Winner',
    history: 'Monégasque racing driver, currently racing in Formula One for Scuderia Ferrari.',
  },
];

const card = document.getElementById('speaker-card-container');

function displayCard(id) {
  card.innerHTML += `
    <div class="attendees-info">
      
        <img src="${attendees[id].image}" alt="speaker-image" class="image-speaker"/>
      
      <div>
        <h3 class="name-speaker">${attendees[id].name}</h3>
        <span class="position-speaker">${attendees[id].role}</span>
        <hr class="line-speaker" />
        <p class="explanation-speaker">${attendees[id].history}</p>
      </div>
    </div>
  `;
}

for (let i = 0; i < attendees.length; i += 1) {
  displayCard(i);
}