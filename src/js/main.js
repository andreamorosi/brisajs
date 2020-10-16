import {optionsFade} from './animations.js';
import {observingScroll} from './observer.js';
import styles from './../scss/main.scss';

export function start () {
  observingScroll(optionsFade);
}