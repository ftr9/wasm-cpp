const c_plus_plus_Btn = document.querySelector('.c_plus_plus');
const js_Btn = document.querySelector('.js');
const userInput = document.querySelector('#num');

const calculateFromJsSide = () => {
  const userInputValue = parseInt(userInput.value);
  let count = 0;

  //---------Benchmark---------------
  console.time('jsSide');
  for (let i = 0; i < userInputValue; i++) {
    count++;
  }
  console.timeEnd('jsSide');
  //--------------------------------
  console.log('result from js side', count);
};

const calculateFromCplusplusSide = () => {
  const userInputValue = parseInt(userInput.value);
  const calculateSum = Module.cwrap('square', 'number', ['number']); //this is coming from c++ side

  //---------Benchmark---------------
  console.time('C++ side');
  const result = calculateSum(userInputValue);
  console.timeEnd('C++ side');
  //--------------------------------

  console.log('result from c++ side', result);
};

const runApp = () => {
  c_plus_plus_Btn.addEventListener('click', calculateFromCplusplusSide);
  js_Btn.addEventListener('click', calculateFromJsSide);
};

var Module = {
  onRuntimeInitialized: runApp,
};
