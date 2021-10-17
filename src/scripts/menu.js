import ale from '../assets/images/ale.png';
import beefAndShrooms from '../assets/images/beef-and-shrooms.png';
import breadAndStew from '../assets/images/bread-and-stew.png';
import cooper from '../assets/images/copper.png';
import gold from '../assets/images/gold.png';
import grilledFish from '../assets/images/grilled-fish.png';
import mead from '../assets/images/mead.png';
import silver from '../assets/images/silver.png';
import skewersAndCorn from '../assets/images/skewers-and-corn.png';

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

const menuList = [
    new MenuItem(beefAndShrooms, 'Beef and Shrooms', 0, 4, 18),
    new MenuItem(grilledFish, 'Grilled Fish', 0, 2, 7),
    new MenuItem(breadAndStew, 'Bread and Stew', 0, 0, 80),
    new MenuItem(skewersAndCorn, 'Skewers and Corn', 0, 1, 47),
    new MenuItem(ale, 'Ale', 0, 0, 30),
    new MenuItem(mead, 'Mead', 0, 0, 40)
]

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