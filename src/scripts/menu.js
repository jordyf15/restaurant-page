function renderMenu(){
    const contentContainer = document.querySelector('#content');
    const menuSection = document.createElement('section');
    menuSection.id = 'menu-section';
    contentContainer.appendChild(menuSection);
    const test = document.createElement('p');
    test.textContent = 'This is the menu';
    menuSection.appendChild(test);
}



export {
    renderMenu
}