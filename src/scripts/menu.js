class MenuItem{
    image;
    name;
    gold;
    silver;
    copper;
    constructor(image, name, gold, silver, copper){
        this.image = image;
        this.name = name;
        this.gold = gold;
        this.silver = silver;
        this.copper = copper;
    }
}

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