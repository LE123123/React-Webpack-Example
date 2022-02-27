import test from "../public/test.jpg";

const img = document.createElement("img", {
  src: test,
  alt: "test picture",
});

document.getElementById("root").appendChild(img);
