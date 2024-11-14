const getWeather = (city) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const weatherData = {
        "new york": 22,
        london: 18,
        tokyo: 26,
        paris: 20,
      };
      if (weatherData[city]) {
        resolve({ name: city, temp: weatherData[city] });
      } else {
        reject("city is not found.");
      }
    }, 2000);
  });
};

// const displayWeather = (city) => {
//   getWeather(city)
//     .then((city) => {
//       console.log(`Weather in [${city.name}] : [${city.temp}]`);
//     })
//     .catch((error) => {
//       console.log("Error: ", error);
//     });
// };
// displayWeather("new york");
// displayWeather("paris");
// displayWeather("london");
//let's do it with async-await
async function displayWeather(city) {
  try {
    const data = await getWeather(city);
    console.log(`Weather in [${data.name.toUpperCase()}] : [${data.temp}.C]`);
  } catch (error) {
    console.error("Error: ", error);
  }
}
displayWeather("new york");
displayWeather("paris");
displayWeather("london");
