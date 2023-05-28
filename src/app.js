/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#click").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console! ");
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = [
    "bunch of aliens",
    "huge dog",
    "cool tiger",
    "funny clown",
    "weird monkey",
    "smelly donkey",
    "crazy racoon",
    "pink gorilla",
    "pack of flamingoes",
    "tiny giraffe"
  ];
  let just = ["just"];
  let verb = [
    "ate my",
    "kicked my",
    "danced on my",
    "abducted my",
    "seduced my",
    "became besties with my",
    "stole my",
    "unfroze my",
    "put jelly on my",
    "drank tequila with my"
  ];
  let object = [
    "grandma",
    "left shoe",
    "math teacher",
    "frozen taco",
    "brand new laptop",
    "bowl of purple ants",
    "baby elephant",
    "little brother",
    "penguin butler",
    "teaspoon",
    "bigfoot neighbor"
  ];
  let place = [
    "inside my livingroom",
    "in the shower",
    "while riding a rollercoaster",
    "under my bed",
    "behind my mother's curtain",
    "inside of a magical box",
    "at McDonald's",
    "while eating cheese",
    "in my backyard",
    "in the 90s"
  ];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let justIndx = Math.floor(Math.random() * just.length);
  let verbIndx = Math.floor(Math.random() * verb.length);
  let objIndx = Math.floor(Math.random() * object.length);
  let placeIndx = Math.floor(Math.random() * place.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subjIndx] +
    " " +
    just[justIndx] +
    " " +
    verb[verbIndx] +
    " " +
    object[objIndx] +
    " " +
    place[placeIndx]
  );
};
