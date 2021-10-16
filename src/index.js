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
    homeAnchor.classList.add('chosen-anchor');
    menuAnchor.classList.remove('chosen-anchor');
    contactAnchor.classList.remove('chosen-anchor');
});

const menuAnchor = document.querySelector('#menu');
menuAnchor.addEventListener('click', () =>{
    contentContainer.innerHTML = '';
    renderMenu();
    homeAnchor.classList.remove('chosen-anchor');
    menuAnchor.classList.add('chosen-anchor');
    contactAnchor.classList.remove('chosen-anchor');
})

const contactAnchor = document.querySelector('#contact');
contactAnchor.addEventListener('click', ()=>{
    contentContainer.innerHTML = '';
    renderContact();
    homeAnchor.classList.remove('chosen-anchor');
    menuAnchor.classList.remove('chosen-anchor');
    contactAnchor.classList.add('chosen-anchor');
});