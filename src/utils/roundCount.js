const roundCount = (count) => {
  if (count >= 1000) {
    return Math.round(count / 100) / 10 + " k";
  }
  return "" + count;
};

export default roundCount;
