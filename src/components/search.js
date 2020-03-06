import './search.scss';
import { createElement } from '../lib/dom';

export function createSearch() {
  const searchElement = createElement('input', {
    className: 'search',
    type: 'search',
    placeholder: 'where are you going next?'
  });
  return searchElement;
}
