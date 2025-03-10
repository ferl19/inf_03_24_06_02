const odpowiedzi = [
    "Świetnie!",
    "Kto gra główną rolę?",
    "Lubisz filmy Tego reżysera?",
    "Będę 10 minut wcześniej",
    "Może kupimy sobie popcorn?",
    "Ja wolę Colę",
    "Zaproszę jeszcze Grześka",
    "Tydzień temu też byłem w kinie na Diunie",
    "Ja funduję bilety"
];

function wyslij() {
    const messageInput = document.getElementById('wiadomosc');
    const chat = document.getElementById('chat');

    const jolkaDiv = document.createElement('div');
    jolkaDiv.classList.add('wypowiedz');
    jolkaDiv.classList.add('wypjolka');

    const jolkaImg = document.createElement('img');
    jolkaImg.src = 'Jolka.jpg';
    jolkaImg.alt = 'Jolka';

    const jolkaP = document.createElement('p');
    jolkaP.textContent = messageInput.value;

    jolkaDiv.appendChild(jolkaImg);
    jolkaDiv.appendChild(jolkaP);
    chat.appendChild(jolkaDiv);

    chat.scrollTop = chat.scrollHeight;

    messageInput.value = '';
}

function generowanie() {
    const randomIndex = Math.floor(Math.random() * odpowiedzi.length);
    const randomResponse = odpowiedzi[randomIndex];
    const chat = document.getElementById('chat');

    const krzysiekDiv = document.createElement('div');
    krzysiekDiv.classList.add('wypowiedz');
    krzysiekDiv.classList.add('wypkrzysiek');

    const krzysiekImg = document.createElement('img');
    krzysiekImg.src = 'Krzysiek.jpg';
    krzysiekImg.alt = 'Krzysiek';

    const krzysiekP = document.createElement('p');
    krzysiekP.textContent = randomResponse;

    krzysiekDiv.appendChild(krzysiekImg);
    krzysiekDiv.appendChild(krzysiekP);
    chat.appendChild(krzysiekDiv);

    chat.scrollTop = chat.scrollHeight;
}