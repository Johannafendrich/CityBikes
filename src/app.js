import './app.scss';
import { createElement } from './lib/dom';
import logoImage from './assets/bike-easy-logo.png';
import imgBike from './assets/bike.jpeg';
import { createSearch } from './components/search';
import { createSearchResults } from './components/bikes';

const allBikes = ['London', 'Paris', 'Cologne', 'Franfurt', 'Basel'];

export function app() {
  const header = createElement('header', {
    className: 'header'
  });
  const main = createElement('main', {
    className: 'main'
  });
  const logo = createElement('img', {
    className: 'logo',
    src: logoImage
  });
  const img = createElement('img', {
    className: 'backgroundImage',
    src: imgBike
  });
  header.appendChild(logo);
  main.appendChild(img);

  const searchElement = createSearch();
  main.appendChild(searchElement);
  const searchResults = createElement('div', {});
  main.appendChild(searchResults);

  searchElement.addEventListener('input', event => {
    searchResults.innerHTML = '';

    const searchValue = event.target.value.toLowerCase();
    const filteredBikes = allBikes.filter(bike => {
      return bike.toLowerCase().startsWith(searchValue);
    });

    const bikesElement = createSearchResults(filteredBikes);
    searchResults.appendChild(bikesElement);
  });

  return [header, main];
}
