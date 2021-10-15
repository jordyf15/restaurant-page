import ownerImgSrc from '../images/owner.jpeg';

function renderMain(){
    console.log('asd');
    const contentContainer = document.querySelector('#content');
    const mainContainer = document.createElement('div');
    contentContainer.appendChild(mainContainer);

    const quote = document.createElement('p');
    quote.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt";
    quote.id = 'quote';
    contentContainer.appendChild(quote);
    const author = document.createElement('p');
    author.id = 'author';
    author.textContent = 'Mond';
    contentContainer.appendChild(author);

    const ownerImg = document.createElement('img');
    ownerImg.src = ownerImgSrc;
    ownerImg.alt = 'mond the tavern owner';
    contentContainer.appendChild(ownerImg);
}

export {renderMain}