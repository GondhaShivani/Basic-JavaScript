const joke = document.querySelector("#joke");
const jokebtn = document.querySelector("#jokebtn");

const setHeader = {
  Headers: {
    Accept: "application / json",
  },
};
const generateJoke = () => {
  fetch("https://icanhazdadjoke.com/", setHeader)
    .then((res) =>
      //fullfiled
      console.log(res.json())
    )
    .catch((error) =>
      //reject
      console.log(`the error is ${error}`)
    );
};

jokebtn.addEventListener("click", generateJoke());
generateJoke(); //for already 1 joke show before click

//14 8 19
