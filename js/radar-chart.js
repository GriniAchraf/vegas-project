const data_prod = {
  labels: labels_prod,
  datasets: radar_datasets,
};
const config_rad = {
  type: "radar",
  data: data_prod,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Chart.js Radar Chart",
      },
    },
    maintainAspectRatio: false,
  },
};
var ctx_radar = document.getElementById("radar-chart").getContext("2d");
var myChart_radar = new Chart(ctx_radar, config_rad);
