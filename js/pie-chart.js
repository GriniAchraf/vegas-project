const CHART_COLORS = {
  Men: "rgb(255, 99, 132)",
  Woman: "rgb(255, 159, 64)",
};

const data = {
  labels: ["Men", "Woman"],
  datasets: [
    {
      label: "Dataset 1",
      data: [20, 80],
      backgroundColor: Object.values(CHART_COLORS),
    },
  ],
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
        text: "Chart.js Pie Chart",
      },
    },
  },
};

var ctx = document.getElementById("pie-chart").getContext("2d");
var myChart = new Chart(ctx, config);
