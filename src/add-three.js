import { removeGreeting } from './utils.js';
import { addOne } from './add-one.js';

const mountAddThree = () => {
  document.getElementById('add-three').addEventListener('click', () => {
    removeGreeting()
    Array(3).fill().forEach(() => {
      addOne(Math.random() * 2000 + 1000);
    })
  })
}

export default mountAddThree;
