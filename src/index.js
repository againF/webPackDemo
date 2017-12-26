import _ from 'lodash';
import './style.css';
import Penguins from './Penguins.jpg';

function component() {
    var element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    var myPenguins = new Image();
    myPenguins.src = Penguins;
    element.appendChild(myPenguins);
    return element;
  }
  
  document.body.appendChild(component());