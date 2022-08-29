'use strict'

function colourGenerator() {
  let red = Math.floor(Math.random()*255);
  let green = Math.floor(Math.random()*255);
  let blue = Math.floor(Math.random()*255);
  
  return `rgb(${red},${green},${blue})`;
}

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];

let colors = [];

for (let i = 0; i < labels.length; i++) {
  colors.push((colourGenerator()));
}

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
      backgroundColor: colors,
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