// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Lynn Lukose
// Created on: apr 2025
// This file contains the JS functions for index.html

"use strict"

function check() {
  // input
  const day = document.getElementById("day").value
  const userAge = parseInt(document.getElementById("user-age").value)

  // process + output
  if (
    day === "Tuesday" ||
    day === "Thursday" ||
    (userAge > 12 && userAge < 21)
  ) {
    document.getElementById("answer").innerHTML =
      "You get a discount for the museum!"
  } else {
    document.getElementById("answer").innerHTML =
      "You must pay the regular price."
  }
}
