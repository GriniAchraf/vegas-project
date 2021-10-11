const data_line = {
  labels: labels_line,
  datasets: datasets_line,
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
        text: "title_line",
      },
    },
    maintainAspectRatio: false,
  },
};
var ctx_line = document.getElementById("line-chart").getContext("2d");

var myChart_line = new Chart(ctx_line, config_line);
