import './bikes.scss';
import { createElement } from '../lib/dom';

export function createSearchResults(props) {
  const container = createElement('div', {
    className: 'bikes'
  });

  props.forEach(item => {
    const element = createElement('div', {
      innerText: item,
      className: 'bike'
    });
    element.addEventListener('click', () => {
      props.onSearchResultClick(item);
    });
    container.appendChild(element);
  });
  return container;
}
