const data_multiple = {
  labels: labels_multiple,
  datasets: multiple_data_sets,
};
const config_multiple = {
  type: "line",
  data: data_multiple,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: title_multiple_chart,
      },
    },
    maintainAspectRatio: false,
  },
};
var ctx_multiple = document
  .getElementById("multiple-line-chart")
  .getContext("2d");
var myChart_1 = new Chart(ctx_multiple, config_multiple);
