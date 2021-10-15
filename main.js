const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Some weapon'],
    attack: function() {
        console.log(this.name + ' ' + 'Fight...');
    }
};

const player2 = {
    player: 2,
    name: 'Subzero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Some other weapon'],
    attack: function() {
        console.log(this.name + ' ' + 'Fight...');
    }
};

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
}

function createPlayer(character) {
    const $player = createElement('div', 'player' + character.player);
    const $progressBar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    $life.style.width = `${character.hp}%`;
    const $name = createElement('div', 'name');
    $name.innerText = character.name;
    const $img = createElement('img');
    $img.src = character.img;

    $player.appendChild($progressBar);
    $player.appendChild($character);
    $progressBar.appendChild($life);
    $progressBar.appendChild($name);
    $character.appendChild($img);

    return $player;
}
function changeHP(player) {
    const $playerLife = document.querySelector('.player'+ player.player +' .life');
    player.hp -= randomNumber();
    $playerLife.style.width = player.hp + '%';

    if (player.hp <= 0) {
        player.hp = 0;
        $playerLife.style.width = '0%';
    }
    console.log(player.name + ' - ' + player.hp + ' hp left');
}

function gameOver() {
    const firstPlayer = document.querySelector('.player1 > .character');
    const secondPlayer = document.querySelector('.player2 > .character');
    $randomButton.remove();
    if (player1.hp > 0) {
        $arenas.appendChild(playerWin(player1.name));
        secondPlayer.style.opacity = '0';
    } else if (player2.hp > 0) {
        $arenas.appendChild(playerWin(player2.name));
        firstPlayer.style.opacity = '0';
    } else {
        $arenas.appendChild(playerWin('nobody'));
        firstPlayer.style.opacity = '0';
        secondPlayer.style.opacity = '0';
    }
}

function playerWin(name) {
    const $winTitle = createElement('div', 'loseTitle');
    $winTitle.innerText = name + ' wins';

    return $winTitle;
}

function randomNumber() {
    return Math.ceil(Math.random() * 20);
}

$randomButton.addEventListener('click', () => {
    console.log('Round: ');
    changeHP(player1);
    changeHP(player2);
    if (player1.hp <= 0 || player2.hp <= 0) {
        gameOver();
    }
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));