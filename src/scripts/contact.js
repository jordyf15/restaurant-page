function renderContact(){
    const contentContainer = document.querySelector('#content');
    const contactSection = document.createElement('section');
    contentContainer.appendChild(contactSection);

    const test = document.createElement('p');
    test.textContent = 'this is contact';
    contactSection.appendChild(test);

}

export {
    renderContact
}