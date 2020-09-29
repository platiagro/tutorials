const data = { labels: [], datasets: [] };
data.labels = [
  "Vibração 1",
  "Vibração 2",
  "Vibração 3",
  "Vibração 4",
  "Vibração 5",
  "Vibração 6",
];
data.datasets.push({
  label: "Medidas de Vibração",
  backgroundColor: "#0094AD",
  borderColor: "#0094AD",
  borderWidth: 1,
  data: [100, 80, 90, 70, 80, 60],
});

export default data;
