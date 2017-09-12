export default function (x, y) {
  let i = 1,
    xData = [],
    yData = [],
    width = 95 / x;

  while (i <= x) {
    xData.push({ index: i, style: `width: ${width}%` });
    i += 1;
  }

  i = 1;
  while (i <= y) {
    yData.push(String.fromCharCode(64 + i));
    i += 1;
  }

  return { xData: xData, yData: yData };
}
