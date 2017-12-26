import _ from 'lodash';
import './style.css';
import Penguins from './Penguins.jpg';

function component() {
    var element = document.createElement('div');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    var myPenguins = new Image();
    myPenguins.src = Penguins;
    element.appendChild(myPenguins);
    return element;
  }
  
  document.body.appendChild(component());