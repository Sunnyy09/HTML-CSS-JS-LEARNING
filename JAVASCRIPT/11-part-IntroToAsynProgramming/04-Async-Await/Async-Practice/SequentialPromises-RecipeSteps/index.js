function getRandomDelay() {
  return Math.floor(Math.random() * 2000) + 1000;
}

// Write an array of functions representing different steps of a recipe.
const recipeSteps = [
  function step1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Step 1: Boil water in a large pot.");
      }, getRandomDelay());
    });
  },
  function step2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Step 2: Add salt to the boiling water.");
      }, getRandomDelay());
    });
  },
  function step3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Step 3: Add pasta to the boiling water.");
      }, getRandomDelay());
    });
  },
  function step4() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Step 4: Stir the pasta occasionally.");
      }, getRandomDelay());
    });
  },
  function step5() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Step 5: Check if the pasta is cooked after 10 minutes.");
      }, getRandomDelay());
    });
  },
  function step6() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Step 6: Drain the pasta.");
      }, getRandomDelay());
    });
  },
  function step7() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Step 7: Serve the pasta with sauce and garnish.");
      }, getRandomDelay());
    });
  },
];

// const runRecipe = () => {
//   recipeSteps.reduce((promise, step) => {
//     return promise.then(() => step().then(console.log));
//   }, Promise.resolve());
// };

//let's to do it using async-await
async function runRecipe() {
  //   for (const step of recipeSteps) {
  //     const result = await step();
  //     console.log(result);
  //   }

  await recipeSteps.reduce(async (promise, step) => {
    await promise;
    const result = await step();
    console.log(result);
  }, Promise.resolve());
}

runRecipe();
