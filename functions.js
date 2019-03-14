
const images = [5,4,3,2,1,3,3,4,5,3,6,5,3,2,1,1,11]

function functions() {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(images.length / 10); i++) {
    pageNumbers.push(i);
  }
  return pageNumbers
};

module.exports = functions;
