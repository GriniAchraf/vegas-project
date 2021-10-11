const data_bar = {
  labels: labels_bar,
  datasets: data_sets_stacked,
};
const config_bar = {
  type: "bar",
  data: data_bar,
  options: {
    plugins: {
      title: {
        display: true,
        text: title_stacked,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  },
};
var ctx_bar = document.getElementById("bar-chart").getContext("2d");

var myChart_bar = new Chart(ctx_bar, config_bar);
