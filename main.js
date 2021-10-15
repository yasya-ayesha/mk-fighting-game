const $arenas = document.querySelector('.arenas');

const player1 = {
    name: 'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Some weapon'],
    attack: function() {
        console.log(this.name + ' ' + 'Fight...');
    }
};

const player2 = {
    name: 'Subzero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Some other weapon'],
    attack: function() {
        console.log(this.name + ' ' + 'Fight...');
    }
};

player1.attack();
player2.attack();

function createPlayer(position, character) {
    const $player = document.createElement('div');
    $player.classList.add(position);

    const $progressBar = document.createElement('div');
    $progressBar.classList.add('progressbar');

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = `${character.hp}%`;

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = character.name;

    const $img = document.createElement('img');
    $img.src = character.img;

    $player.appendChild($progressBar);
    $player.appendChild($character);
    $progressBar.appendChild($life);
    $progressBar.appendChild($name);
    $character.appendChild($img);
    $arenas.appendChild($player);
}

createPlayer('player1', player1);
createPlayer('player2', player2);