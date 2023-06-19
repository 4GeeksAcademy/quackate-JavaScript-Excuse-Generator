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

const generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = [
    "bunch of bees",
    "mad dog",
    "cool tiger",
    "funny clown",
    "purple duck",
    "smelly donkey",
    "crazy racoon",
    "pink gorilla",
    "pack of flamingoes",
    "tiny giraffe"
  ];
  let just = ["just"];
  let verb = [
    "ate my",
    "burned my",
    "danced with my",
    "abducted my",
    "poured grape juice over my",
    "played twister with my",
    "cooked my",
    "unfroze my",
    "put jelly on my",
    "partied with my"
  ];
  let object = [
    "book",
    "left shoe",
    "math teacher",
    "frozen taco",
    "brand new laptop",
    "next door neighbor",
    "special pillow",
    "little brother",
    "penguin butler",
    "pet tiger",
    "mother"
  ];
  let place = [
    "inside my livingroom",
    "in the shower",
    "while riding a rollercoaster",
    "under my bed",
    "behind my mother's curtain",
    "inside of a magical box",
    "at Burger King",
    "while eating cheese",
    "in my backyard",
    "on a plane"
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
