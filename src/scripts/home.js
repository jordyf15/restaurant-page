function renderHome(){

    const contentContainer = document.querySelector('#content');
    const homeContainer = document.createElement('div');
    homeContainer.id = 'home-container';
    contentContainer.appendChild(homeContainer);

    const quote = document.createElement('p');
    quote.id = 'home-quote';
    quote.textContent = 'Come on in traveller, sit by the fire and tell me your tale...';
    homeContainer.appendChild(quote);

    const enterTavernButton = document.createElement('button');
    enterTavernButton.id = 'enter-tavern-button';
    enterTavernButton.className = 'choice-button';
    enterTavernButton.textContent = 'Enter the Tavern';
    enterTavernButton.addEventListener('click', enterTavernPopup);
    homeContainer.appendChild(enterTavernButton);

    const continueJourneyButton = document.createElement('button');
    continueJourneyButton.id = 'continue-journey-button';
    continueJourneyButton.className = 'choice-button';
    continueJourneyButton.textContent = 'Continue your Journey';
    continueJourneyButton.addEventListener('click', continueJourneyPopup);
    homeContainer.appendChild(continueJourneyButton);
}

function enterTavernPopup() {
    const homeContainer = document.querySelector('#home-container');
    const popUpBackground=document.createElement('div');
    popUpBackground.id = 'popup-background';
    homeContainer.appendChild(popUpBackground);

    const popUpContainer = document.createElement('div');
    popUpContainer.id = 'popup-container';
    homeContainer.appendChild(popUpContainer);

    const popUpText = document.createElement('p');
    popUpText.id = 'popup-text';
    popUpText.textContent = 'As you enter the tavern on the cold windy night, the cold dissipates from your body as you can feel the warmth of the hearth, the laughters and chatter in the tavern that seem to swept your worries, and the smell of food that reminds you how long have you travelled tirelessly as you sit yourself somewhere in the tavern.'
    +'"Well, what are you waiting lad? Go order something" the tavern keeper mond said.';


    homeContainer.appendChild(popUpText);

    const closePopupButton = document.createElement('button');
    closePopupButton.textContent = 'Done';
}

function continueJourneyPopup(){
    const homeContainer = document.querySelector('#home-container');
    const popUpBackground=document.createElement('div');
    popUpBackground.id = 'popup-background';
    homeContainer.appendChild(popUpBackground);

    const popUpContainer = document.createElement('div');
    popUpContainer.id = 'popup-container';
    homeContainer.appendChild(popUpContainer);

    const popUpText = document.createElement('p');
    popUpText.id = 'popup-text';
    popUpText.textContent = 'You see folks going in and out of that tavern, but not you. You have business elsewhere. ' +
    'So you decided to continue your journey down the road as the noice from the tavern grows smaller and the road ahead of you seems darken. ' +
    'But that does not matter, you have business elsewhere and time is of the essence.'
    homeContainer.appendChild(popUpText);

    const closePopupButton = document.createElement('button');
    closePopupButton.textContent = 'Done';
}

export {renderHome}