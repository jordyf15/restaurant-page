import ale from '../assets/images/ale.png';
import beefAndShrooms from '../assets/images/beef-and-shrooms.png';
import breadAndStew from '../assets/images/bread-and-stew.png';
import cooper from '../assets/images/copper.png';
import gold from '../assets/images/gold.png';
import grilledFish from '../assets/images/grilled-fish.png';
import mead from '../assets/images/mead.png';
import silver from '../assets/images/silver.png';
import skewersAndCord from '../assets/images/skewers-and-corn.png';

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