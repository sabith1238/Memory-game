document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'fries',
            img: 'image/fries.png'
        },
        {
            name: 'fries',
            img: 'image/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'image/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'image/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'image/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'image/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'image/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'image/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'image/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'image/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'image/pizza.png'
        },
        {
            name: 'pizza',
            img: 'image/pizza.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenID = []
    let cardsWon = []

//create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'image/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

//check for matches
    function checkForMatch() {
        let cards = document.querySelectorAll('img')
        const optionOneID = cardsChosenID[0]
        const optionTwoID = cardsChosenID[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!')
            cards[optionOneID].setAttribute('src', 'image/white.png')
            cards[optionTwoID].setAttribute('src', 'image/white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneID].setAttribute('src', 'image/blank.png')
            cards[optionTwoID].setAttribute('src', 'image/blank.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenID = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You won!'
        }
    }


//flip your card
    function flipcard() {
        let cardID = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardID].name)
        cardsChosenID.push(cardID)
        this.setAttribute('src', cardArray[cardID].img)
        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }




    createBoard()


})

