const CHART_COLORS_3 = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(201, 203, 207)",
};
const data_3 = {
  labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
  datasets: [
    {
      label: "Dataset 1",
      data: [20, 20, 20, 20, 20],
      backgroundColor: Object.values(CHART_COLORS_3),
    },
  ],
};
const config_3 = {
  type: "doughnut",
  data: data_3,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Doughnut Chart",
      },
    },
  },
};

var ctx_3 = document.getElementById("doughnut-chart").getContext("2d");
var myChart_3 = new Chart(ctx_3, config_3);
