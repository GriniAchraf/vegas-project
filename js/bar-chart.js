const data_product = {
  labels: bar_labels,
  datasets: bar_data_sets,
};
const config_product = {
  type: "bar",
  data: data_product,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: bar_title,
      },
    },
  },
};
var ctx_4 = document.getElementById("bar-chart-2").getContext("2d");
var myChart_3 = new Chart(ctx_4, config_product);
