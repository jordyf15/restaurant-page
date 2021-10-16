import './styles/index.css';
import './styles/home.css';
import './styles/menu.css';
import './styles/contact.css';

import {renderHome} from './scripts/home.js';
import {renderMenu} from './scripts/menu';
import {renderContact} from './scripts/contact';

const contentContainer = document.querySelector('#content');
renderHome();
const homeAnchor = document.querySelector('#home');
homeAnchor.addEventListener('click', ()=>{ 
    contentContainer.innerHTML = '';
    renderHome();
});

const menuAnchor = document.querySelector('#menu');
menuAnchor.addEventListener('click', () =>{
    contentContainer.innerHTML = '';
    renderMenu();
})

const contactAnchor = document.querySelector('#contact');
contactAnchor.addEventListener('click', ()=>{
    contentContainer.innerHTML = '';
    renderContact();
});