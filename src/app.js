import './app.scss';
import { createElement } from './lib/dom';
import { createTitle } from './components/title';

export function app() {
  const header = createElement('header', {
    className: 'header'
  });
  const main = createElement('main', {
    className: 'main'
  });
  const title = createTitle('CityBikes');

  header.appendChild(title);
  return [header, main];
}
