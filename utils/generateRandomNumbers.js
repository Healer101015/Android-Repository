const generateRandomNumbers = () => {
  const numbers = [];
  while (numbers.length < 6) {
    const randomNumber = Math.floor(Math.random() * 60) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers.sort((a, b) => a - b);
};

export default generateRandomNumbers;
