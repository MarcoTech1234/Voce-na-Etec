const perg = document.querySelector('.personagem');
const bug = document.querySelector('.bug');


const jump = () => {
    perg.classList.add('jump');

    setTimeout(() => {

        perg.classList.remove('jump');

    }, 550);
}

const loop = setInterval(() => {

    console.log(loop)

    const bugPosition = bug.offsetLeft;
    const pergPosition = +window.getComputedStyle(perg).bottom.replace('px', '');

    console.log(pergPosition);

    if (bugPosition <= 68 && bugPosition > 0 && pergPosition < 55) {

        bug.style.animation = 'none';
        bug.style.left = `${bugPosition}px`;

        perg.style.animation = 'none';
        perg.style.bottom = `${pergPosition}px`

        perg.src = './img/death-perg.png';
        perg.style.width = '80px'
        perg.style.marginLeft = '30px'

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);