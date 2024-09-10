'use strict';

const $table = document.querySelector('table');

console.log('hello world');

const renderTable = (grid) => {
  console.log(grid, $table);
};

fetch('http://localhost:3003/canvas')
  .then((res) => res.json())
  .then(renderTable);
