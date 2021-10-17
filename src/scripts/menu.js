import ale from '../assets/images/ale.png';
import beefAndShrooms from '../assets/images/beef-and-shrooms.png';
import breadAndStew from '../assets/images/bread-and-stew.png';
import copper from '../assets/images/copper.png';
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

    const menuUl = document.createElement('ul');
    menuUl.id = 'menu-ul';
    menuSection.appendChild(menuUl);
    fillMenu();
}

function fillMenu(){
    const menuUl = document.querySelector('#menu-ul');
    menuList.forEach((menuItem)=>{
        const menuItemContainer = document.createElement('li');
        menuItemContainer.className = 'menu-items';
        menuUl.appendChild(menuItemContainer);

        const menuItemImage = document.createElement('img');
        menuItemImage.src = menuItem.image;
        menuItemImage.className = 'menu-item-images';
        menuItemImage.alt = menuItem.name;
        menuItemContainer.appendChild(menuItemImage);

        const menuItemName = document.createElement('p');
        menuItemName.textContent = menuItem.name;
        menuItemName.className = 'menu-item-names';
        menuItemContainer.appendChild(menuItemName);

        const menuItemPrice = document.createElement('p');
        menuItemPrice.className = 'menu-item-prices';
        menuItemContainer.appendChild(menuItemPrice);

        if(menuItem.gold){
            const goldPrice = document.createElement('span');
            goldPrice.textContent = ` ${menuItem.gold} `;
            menuItemPrice.appendChild(goldPrice);
            
            const goldImage = document.createElement('img');
            goldImage.src = gold;
            goldImage.alt = 'gold coin';
            goldPrice.appendChild(goldImage);
        }
        if(menuItem.silver){
            const silverPrice = document.createElement('span');
            silverPrice.textContent = ` ${menuItem.silver} `;
            menuItemPrice.appendChild(silverPrice);
            
            const silverImage = document.createElement('img');
            silverImage.src = silver;
            silverImage.alt = 'silver coin';
            silverPrice.appendChild(silverImage);
        }
        if(menuItem.copper){
            const copperPrice = document.createElement('span');
            copperPrice.textContent = ` ${menuItem.copper} `;
            menuItemPrice.appendChild(copperPrice);
            
            const copperImage = document.createElement('img');
            copperImage.src = copper;
            copperImage.alt = 'copper coin';
            copperPrice.appendChild(copperImage);
        }
    });
}

export {
    renderMenu
}