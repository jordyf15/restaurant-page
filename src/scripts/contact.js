import contactMap from '../assets/images/contact-map.jpg';

function renderContact(){
    const contentContainer = document.querySelector('#content');
    const contactSection = document.createElement('section');
    contactSection.id = 'contact-section';
    contentContainer.appendChild(contactSection);

    const contact = document.createElement('p');
    contact.id = 'contact-text';
    const contactIcon = document.createElement('i');
    contactIcon.classList.add('fas', 'fa-envelope-open-text');
    contact.appendChild(contactIcon);
    const contactText = document.createElement('span');
    contactText.textContent = ' The mailbox of archet is at this coordinate 25.0S, 48.9W';
    contact.appendChild(contactText);
    contactSection.appendChild(contact);

    const location = document.createElement('p');
    const locationIcon = document.createElement('i');
    locationIcon.classList.add('fas', 'fa-map-marker');
    location.appendChild(locationIcon);
    location.id = 'location-text';
    const locationText = document.createElement('span');
    locationText.textContent = ' To the north-east of Bree and north of Combe, lies the once thriving and busy town of archet';
    location.appendChild(locationText)
    contactSection.appendChild(location);

    const mapImage = document.createElement('img');
    mapImage.src = contactMap;
    mapImage.alt = 'A map of bree marking archet';
    contactSection.appendChild(mapImage);
}

export {
    renderContact
}