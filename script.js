'use strict'

let labels = [];

let values = [];

let myChart;

const clicked = () => {

  let chartType = document.getElementById("chart-type").value;

  if(myChart){
    myChart.destroy();
  }

function getColors() {
  let red = Math.floor(Math.random()*255);
  let green = Math.floor(Math.random()*255);
  let blue = Math.floor(Math.random()*255);
  return `rgb(${red},${green},${blue})`;
}

let colors = [];

for (let i = 0; i < labels.length; i++) {
  colors.push(getColors());
}

let data = {
  labels: labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: colors,
    borderColor: 'rgb(255, 99, 132)',
    data: values,
  }]
};

let typz = 'line';

const config = {
  type: chartType,
  data: data,
  options: {}
};
 
  typz = chartType;
  
  myChart = new Chart(document.getElementById('myChart'),config);
}

function submitted(event) {
  event.preventDefault();
  let month = event.target.month.value;
  let monthValue = event.target.month_value.value;
  labels.push(month);
  values.push(parseInt(monthValue));
  document.getElementById("myForm").reset();
  localStorage.setItem(month, monthValue);
  clicked();
}