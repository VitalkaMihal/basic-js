

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let end = 1;

    for (let item of arr) {
      if (Array.isArray(item)) {
        let notEnd = 1 + this.calculateDepth(item);
        if (notEnd > end) {
          end = notEnd;
        }
      }
    } return end;
  }
}; 