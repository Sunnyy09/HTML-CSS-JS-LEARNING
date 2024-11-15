function getProductDetails(productId) {
  return new Promise((resolve, reject) => {
    if (productId) {
      resolve({ productId: productId, name: `Product ${productId}` });
    } else {
      reject("There is no such product.");
    }
  });
}

function getProductReviews(productId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (productId) {
        resolve({
          1: {
            reviewer: "Alex J.",
            rating: 4,
            comment: "Great quality, arrived quickly. Runs a bit large.",
          },
          2: {
            reviewer: "Jamie L.",
            rating: 5,
            comment: "Love it! Comfortable, stylish, and worth it.",
          },
          3: {
            reviewer: "Taylor R.",
            rating: 3,
            comment: "Decent, but not premium quality. Fast delivery.",
          },
        });
      } else {
        reject("There is no product review avaiable");
      }
    });
  });
}

// const getFullProductInfo = (productId) => {
//   Promise.all([getProductDetails(productId), getProductReviews(productId)])
//     .then(([product, reviews]) => {
//       console.log(product);
//       console.log(reviews);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

async function getFullProductInfo(productId) {
  const product = await getProductDetails(productId);
  const reviews = await getProductReviews(productId);

  product.reviews = reviews;

  console.log(product);
  //   console.log(reviews);
}

getFullProductInfo(1);
getFullProductInfo(2);
