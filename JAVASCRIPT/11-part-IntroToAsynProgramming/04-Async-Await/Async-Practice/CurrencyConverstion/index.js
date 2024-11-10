function getExchangeRate(fromCurr, toCurr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exchangeRate = {
        USD_IND: 84,
        IND_USD: 0.012,
      };
      const conversion = `${fromCurr}_${toCurr}`;
      const rate = exchangeRate[conversion]; //conversion=key

      if (rate) {
        resolve(rate);
      } else {
        reject("Currency rate is not available.");
      }
    }, 2000);
  });
}

// function convertCurrency(amount, fromCurr, toCurr) {
//   return getExchangeRate(fromCurr, toCurr).then((rate) => {
//     const convertedAmount = amount * rate;
//     return convertedAmount;
//   });
// }

// convertCurrency(1, "USD", "IND")
//   .then((convertedAmount) => {
//     console.log(`${convertedAmount} Rupee`);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// convertCurrency(84, "IND", "USD")
//   .then((convertedAmount) => {
//     console.log(`${convertedAmount} Dollar`);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// let's do it using async-await
async function convertCurrency(amount, fromCurr, toCurr) {
  try {
    const rate = await getExchangeRate(fromCurr, toCurr);
    const convertedAmount = amount * rate;
    console.log(`${convertedAmount} ${toCurr}`);
  } catch (error) {
    console.error(error);
  }
}

convertCurrency(1, "USD", "IND");
convertCurrency(100, "IND", "USD");
