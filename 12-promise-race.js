"use strict";

async function getProductById(id) {
  try {
    const response = await fetch("https://dummyjson.com/products/" + id);
    if (!response.ok) {
      throw new Error("Data not received");
    }
    return response.json();
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

async function whoIsFirst(promisesArr) {
  return Promise.race(promisesArr);
}

whoIsFirst([
  getProductById(5),
  getProductById(2),
  getProductById(4),
  getProductById(3),
  getProductById(1),
])
  .then((firstProduct) => console.log(firstProduct))
  .catch((error) => console.error(`Error: ${error.message}`));
