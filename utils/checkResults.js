const checkResults = (userNumbers, generatedNumbers) => {
  const matchedNumbers = userNumbers.filter(num => generatedNumbers.includes(num));
  return {
    matchedNumbers,
    isWinner: matchedNumbers.length >= 4, // Ganha se acerta 4 ou mais
  };
};

export default checkResults;
