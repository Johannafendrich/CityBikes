import './app.scss';
import { createElement } from './lib/dom';
import { createTitle } from './components/title';
import img from './assets/bike-easy-logo.png';
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
    src: img
  });

  const title = createTitle('CityBikes');

  const searchElement = createSearch();
  header.appendChild(logo);
  header.appendChild(title);
  main.appendChild(searchElement);
  const searchResults = createElement('div', {});
  main.appendChild(searchResults);

  searchElement.addEventListener('input', event => {
    searchResults.innerHTML = ''; // clear search results

    const searchValue = event.target.value.toLowerCase();
    const filteredBikes = allBikes.filter(bike => {
      return bike.toLowerCase().startsWith(searchValue);
    });

    const bikesElement = createSearchResults(filteredBikes);
    searchResults.appendChild(bikesElement);
  });

  return [header, main];
}
