import Type from "typed.js"
import { timeoutPromise, removeGreeting } from './utils.js';

export const addOne = async ms => {
  const timeDiv = document.createElement('div');
  const textSpan = document.createElement('span');

  timeDiv.appendChild(textSpan);
  document.getElementById('container').appendChild(timeDiv);

  const loadingTyped = new Type(textSpan, {
    strings: ['Loading...'],
    typeSpeed:60,
  });

  await timeoutPromise(ms);
  
  loadingTyped.destroy()

  const completedTyped = new Type(textSpan, {
    strings: ['Completed !', (new Date()).toString()],
    typeSpeed:60,
    onComplete: () => {
      completedTyped.cursor.remove()
    }

  });

}

const mountAddOne = () => {
  document.getElementById('add-one').addEventListener('click', () => {
    removeGreeting()
    addOne(Math.random() * 1000);
  })
}

export default mountAddOne;
