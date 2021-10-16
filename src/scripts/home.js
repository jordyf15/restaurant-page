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
    homeContainer.appendChild(enterTavernButton);

    const continueJourneyButton = document.createElement('button');
    continueJourneyButton.id = 'continue-journey-button';
    continueJourneyButton.className = 'choice-button';
    continueJourneyButton.textContent = 'Continue your Journey';
    homeContainer.appendChild(continueJourneyButton);
}



export {renderHome}