const labels_multiple = ["2019", "2020", "2021"];
const data_multiple = {
  labels: labels_multiple,
  datasets: [
    {
      label: "Age between 18 and 40",
      data: [50, 70, 45],
      borderColor: "rgb(51, 199, 255)",
      backgroundColor: "rgb(51, 199, 255)",
    },
    {
      label: "Age between 41 and 60",
      data: [10, 70, 45],
      borderColor: "rgb(255, 51, 119)",
      backgroundColor: "rgb(255, 51, 119)",
    },
    {
      label: "Age greater than 60",
      data: [50, 70, 65],
      borderColor: "rgb(175, 51, 255 )",
      backgroundColor: "rgb(175, 51, 255 )",
    },
  ],
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
        text: "Chart.js Line Chart",
      },
    },
    maintainAspectRatio: false,
  },
};
var ctx_multiple = document
  .getElementById("multiple-line-chart")
  .getContext("2d");
var myChart_1 = new Chart(ctx_multiple, config_multiple);
