const labels_line = ["2019", "2020", "2021"];
const data_line = {
  labels: labels_line,
  datasets: [
    {
      label: "Number of new clients",
      data: [10, 20, 50],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgb(255, 99, 132)",
    },
  ],
};
const config_line = {
  type: "line",
  data: data_line,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  },
};
var ctx_line = document.getElementById("line-chart").getContext("2d");

var myChart_line = new Chart(ctx_line, config_line);
