import './search.scss';
import { createElement } from '../lib/dom';

export function createSearch() {
  const searchElement = createElement('input', {
    className: 'search',
    type: 'search',
    placeholder: 'find a bike'
  });
  return searchElement;
}
