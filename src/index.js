import _ from 'lodash';
import './style.css';
import printMe from './print.js';
import pageLoad from './pageLoad.js'
import addNewProject from './projectFunction'
import {addNewProjectCard} from './projectFunction'

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
  }

addNewProjectCard()
addNewProject()
  // document.body.appendChild(component());