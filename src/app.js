import './app.scss';
import { createElement } from './lib/dom';
import { createTitle } from './components/title';
import img from './assets/bike-easy-logo.png';
import { createSearch } from './components/search';

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

  return [header, main];
}
