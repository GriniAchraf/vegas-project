const labels_prod = ["Leasing", "Revolving", "Credit conso"];
const data_prod = {
  labels: labels_prod,
  datasets: [
    {
      label: "Age between 18 and 40",
      data: [50, 70, 45],
      borderColor: "rgb(51, 199, 255)",
      backgroundColor: "rgb(51, 199, 255,0.2)",
    },
    {
      label: "Age between 41 and 60",
      data: [10, 70, 45],
      borderColor: "rgb(255, 51, 119)",
      backgroundColor: "rgb(255, 51, 119,0.2)",
    },
    {
      label: "Age greater than 60",
      data: [50, 70, 65],
      borderColor: "rgb(175, 51, 255 )",
      backgroundColor: "rgb(175, 51, 255,0.2 )",
    },
  ],
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
