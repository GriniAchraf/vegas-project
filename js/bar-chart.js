const years = ["2019", "2020", "2021"];
const data_product = {
  labels: years,
  datasets: [
    {
      label: "Product-1",
      data: [50, 15, 23],
      borderColor: CHART_COLORS_3.red,
      backgroundColor: CHART_COLORS_3.red,
    },
    {
      label: "Product-2",
      data: [80, 45, 11],
      borderColor: CHART_COLORS_3.blue,
      backgroundColor: CHART_COLORS_3.blue,
    },
  ],
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
        text: "Chart.js Bar Chart",
      },
    },
  },
};
var ctx_4 = document.getElementById("bar-chart").getContext("2d");
var myChart_3 = new Chart(ctx_4, config_product);
