const data = {
  labels: PIE_LABELS,
  datasets: PIE_DATA_SETS,
};
const config = {
  type: "pie",
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: PIE_TITLE,
      },
    },
  },
};

var ctx = document.getElementById("pie-chart").getContext("2d");
var myChart = new Chart(ctx, config);
