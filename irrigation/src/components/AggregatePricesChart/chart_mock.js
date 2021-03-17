var _seed = 0;

const rand = (min, max) => {
  var seed = _seed;
  min = min === undefined ? 0 : min;
  max = max === undefined ? 1 : max;
  _seed = (seed * 9301 + 49297) % 233280;
  return min + (_seed / 233280) * (max - min);
};

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [{
    label: "Dataset 1",
    backgroundColor: "#777acd",
    stack: "Stack 0",
    data: [
      Math.round(rand(-100, 100)),
      Math.round(rand(-100, 100)),
      Math.round(rand(-100, 100)),
      Math.round(rand(-100, 100)),
      Math.round(rand(-100, 100)),
      Math.round(rand(-100, 100)),
      Math.round(rand(-100, 100))
    ]
  }, {
    label: "Dataset 2",
    backgroundColor: "#b4943e",
    stack: "Stack 0",
    data: [
      Math.round(rand(-100, 100)),
      Math.round(rand(-100, 100)),
      Math.round(rand(-100, 100)),
      Math.round(rand(-100, 100)),
      Math.round(rand(-100, 100)),
      Math.round(rand(-100, 100)),
      Math.round(rand(-100, 100))
    ]
  }, {
    label: "Dataset 3",
    backgroundColor: "#c45ca2",
    stack: "Stack 1",
    data: [
      Math.round(rand(-100, 100)),
      Math.round(rand(-100, 100)),
      Math.round(rand(-100, 100)),
      Math.round(rand(-100, 100)),
      Math.round(rand(-100, 100)),
      Math.round(rand(-100, 100)),
      Math.round(rand(-100, 100))
    ]
  }]
};

export default data;
