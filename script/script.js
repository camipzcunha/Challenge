// BARRA DE PESQUISA

let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY >0 );
})

// RANKING
const users = [
    { name: 'Pedro Campos', eCoins: 150, quizzes: 10, cards: 5 },
    { name: 'Fernanda Rod.', eCoins: 200, quizzes: 15, cards: 10 },
    { name: 'Carlos Souza', eCoins: 180, quizzes: 12, cards: 7 },
    { name: 'David Dourado', eCoins: 170, quizzes: 9, cards: 8 }
];

function calculateTotalPoints(user) {
    // Ajuste a fórmula de pontuação conforme necessário
    return user.eCoins + (user.quizzes * 10) + (user.cards * 20);
}

function renderRanking() {
    const rankingBody = document.getElementById('ranking-body');
    users.forEach(user => user.totalPoints = calculateTotalPoints(user));
    users.sort((a, b) => b.totalPoints - a.totalPoints);
    rankingBody.innerHTML = '';
    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td><i class='bx bxs-user'></i>${user.name}</td>
            <td><i class='bx bx-coin-stack'></i>${user.eCoins}</td>
            <td><i class='bx bx-book'></i>${user.quizzes}</td>
            <td><i class='bx bx-collection'></i>${user.cards}</td>
            <td><i class='bx bx-trophy'></i>${user.totalPoints}</td>
        `;
        rankingBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', renderRanking);


// CARROSSEL
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let i = 0;

function carrossel(){
    i++;
    if(i > img.length - 1){
        i = 0;
    }

    imgs.style.transform = `translateX(${-i*355}px)`
}

setInterval(carrossel, 1800);