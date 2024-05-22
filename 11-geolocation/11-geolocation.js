"use strict";

function userGeolocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position, refuse) => {
      let userLat = position.coords.latitude;
      let userLong = position.coords.longitude;

      if (refuse) {
        reject(new Error("The user has not given consent."));
      }

      resolve({
        userLat,
        userLong,
      });
    });
  });
}

userGeolocation()
  .then((data) => {
    console.log(data);
    document.querySelector(
      ".latitude"
    ).innerText = `Latitude:  ${data.userLat}`;
    document.querySelector(
      ".longitude"
    ).innerText = `Longitude:  ${data.userLong}`;
  })
  .catch((error) => console.log(`Error: ${error.message}`));
