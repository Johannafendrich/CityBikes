import './bikes.scss';
import { createElement } from '../lib/dom';

export function createSearchResults(filteredBikes) {
  const container = createElement('div', {
    className: 'bikes'
  });

  filteredBikes.forEach(item => {
    const element = createElement('div', {
      innerText: item,
      className: 'bike'
    });
    container.appendChild(element);
  });
  return container;
}
