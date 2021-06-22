(() => {
    let order = [];
    let clickedOrder = [];
    let score = 0;

    /*
        0- Verde
        1- Vermelho
        2- Amarelo
        3- Azul
    */

    const green = document.querySelector('.green');
    const red = document.querySelector('.red');
    const yellow = document.querySelector('.yellow');
    const blue = document.querySelector('.blue');
    
    // Cria ordem de cores aleatorias
    function shuflledOrder () {
        let colorOrder = Math.floor(Math.random() * 4);

        order[order.length] = colorOrder;
        clickedOrder = [];

        for (let i in order) {
            let elementColor = createColorElement(order[i]);
            lightColor(elementColor, Number(i) + 1);
        }
    }

    // Acende a próxima cor
    function lightColor (element, number) {
        number = number * 500;
        setTimeout(() => {
            element.classList.add("selected");
        }, number - 250);
        
        setTimeout(() => {
            element.classList.remove('selected');
        }, number);
    }   

    // check se os botões clicados são da mesma ordem
    function checkOrder () {
        for(let i in clickedOrder) {
            if (clickedOrder[i] != order[i]) {
                gameOver();
                break;
            }
        }

        if(clickedOrder.length == order.length) {
            alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
            nextLevel();
        }
    }

    // Click usuario
    function click (color) {
        clickedOrder[clickedOrder.length] = color;
        createColorElement(color).classList.add('selected');

        setTimeout(() => {
            createColorElement(color).classList.remove('selected')
            checkOrder();
        }, 250);

    }
    
    // funcao que retorna a cor
    function createColorElement (color) {
        if(color == 0) return green;
        else if (color == 1) return red;
        else if (color == 2) return yellow;
        else if (color == 3) return blue;
    }

    // Função para proximo nivel do jogo
    function nextLevel () {
        score++;
        shuflledOrder();
    }

    // Função para game over
    function gameOver () {
        alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em ok para iniciar um novo jogo`);
        order = [];
        clickedOrder = [];
        playGame();
    }

    function playGame () {
        alert(`Bem vindo ao Gênesis!\nIniciando um novo jogo!`);
        score = 0;

        nextLevel();
    }
    
    green.onclick = () => { click(0) };
    red.onclick = () => { click(1) };
    yellow.onclick = () => { click(2) };
    blue.onclick = () => { click(3) };
        
    playGame();
})()