const PERCENTAGES = [49.999, 50.001];
const CHART_COLORS = {
  Men: "rgb(255, 99, 132)",
  Woman: "rgb(255, 159, 64)",
};

const PIE_DATA_SETS = [
  {
    label: "Dataset 1",
    data: PERCENTAGES,
    backgroundColor: Object.values(CHART_COLORS),
  },
];
const PIE_LABELS = ["Men", "Woman"];
const PIE_TITLE = "Chart.js Pie Chart";
