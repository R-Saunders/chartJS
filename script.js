'use strict'

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];

function colourGenerator() {
  let red = Math.floor(Math.random()*255);
  let green = Math.floor(Math.random()*255);
  let blue = Math.floor(Math.random()*255);
  
  return `rgb(${red},${green},${blue})`;
}

console.log(colourGenerator());

const chartTypes = [
  "area",
  "bar",
  "bubble",
  "doughnut",
  "pie",
  "line",
  "polarArea",
  "radar",
  "scatter",
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My Chart",
      backgroundColor: ['rgb(25, 99, 132)', 'rgb(255, 9, 132)', 'rgb(255, 99, 13)', 'rgb(255, 99, 132)','rgb(55, 199, 232)','rgb(155, 99, 123)'],
      borderColor: "rgb(255, 99, 132)",
      data: [15, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {},
};

const myChart = new Chart(document.getElementById("myChart"), config);