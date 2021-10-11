const CHART_COLORS_BAR = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(201, 203, 207)",
};

const labels_bar = ["2019", "2020", "2021"];
const data_sets_stacked = [
  {
    label: "[10k,20k]",
    data: [50, 30, 80],
    backgroundColor: CHART_COLORS_BAR.red,
  },
  {
    label: "[20k,50k]",
    data: [10, 20, 30],
    backgroundColor: CHART_COLORS_BAR.blue,
  },
  {
    label: "> 50k",
    data: [20, 60, 80],
    backgroundColor: CHART_COLORS_BAR.green,
  },
];
const title_stacked = "Chart.js Bar Chart - Stacked";
