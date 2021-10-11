const PERCENTAGES = [30, 30, 40];
const CHART_COLORS = {
  Men: "rgb(255, 99, 132,0.5)",
  Woman: "rgb(255, 159, 64,0.5)",
  z: "rgb(47,79,79,0.5)",
};

const PIE_DATA_SETS = [
  {
    label: "Dataset 1",
    data: PERCENTAGES,
    backgroundColor: Object.values(CHART_COLORS),
  },
];
const PIE_LABELS = ["x", "y", "z"];
const PIE_TITLE = "Chart.js Pie Chart";
