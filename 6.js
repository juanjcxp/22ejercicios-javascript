const minMaxNumbers = (arr) => {
    let minMax = [];
    minMax.push(Math.min(...arr));
    minMax.push(Math.max(...arr));
    return minMax;
  }
  console.log(minMaxNumbers([1000,80,73,100]));