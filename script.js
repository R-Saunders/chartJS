'use strict'

function getColors() {
  let red = Math.floor(Math.random()*255);
  let green = Math.floor(Math.random()*255);
  let blue = Math.floor(Math.random()*255);
  return `rgb(${red},${green},${blue})`;
}

let colors = [];

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];

for (let i = 0; i < labels.length; i++) {
  colors.push(getColors());
}

const data = {
  labels: labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: colors,
    borderColor: 'rgb(255, 99, 132)',
    data: [35, 10, 5, 2, 20, 30, 45],
  }]
};

let typz = 'line';

const config = {
  type: typz,
  data: data,
  options: {}
};

const clicked = () => {
  let chartType = document.getElementById("chart-type").value;
  typz = chartType;
  config.type = `${typz}`;
  console.log(typz);
  let grapharea = document.getElementById("myChart").getContext("2d");
  let myChart = new Chart(grapharea, {type: typz, data: data, option: {}});
  myChart.destroy();
  myChart = new Chart(grapharea, { type: typz, data:data,options:{}})
}

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);

