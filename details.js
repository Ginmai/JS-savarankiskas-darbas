const deleteAdService = function (id) {
  fetch("https://655db6be9f1e1093c599bbed.mockapi.io/skelbimas/" + id, {
    method: "DELETE",
  });

  document.getElementsByClassName("card")[0].remove();
  const message = document.createElement("h3");
  message.innerHTML = "Skelbimas sėkmingai ištrintas";

  const back = document.createElement("a");
  back.innerHTML = "Skelbimų sąrašas";
  back.setAttribute("href", "index.html");
  back.setAttribute("class", "button");

  const card = document.createElement("div");
  card.setAttribute("class", "card");
  card.append(message, back);

  document.getElementById("details").append(card);
};

const ad = function (ad) {
  const name = document.createElement("h2");
  name.innerHTML = ad.name;

  const location = document.createElement("h2");
  location.innerHTML = ad.location;

  const description = document.createElement("p");
  description.innerHTML = ad.description;

  const image = document.createElement("img");
  image.setAttribute("src", ad.image);
  image.setAttribute("class", "detailsImage");

  const price = document.createElement("p");
  price.innerHTML = ad.price;

  const deleteAd = document.createElement("button");
  deleteAd.innerHTML = "Ištrinti";
  deleteAd.addEventListener("click", function () {
    deleteAdService(ad.id);
  });

  const card = document.createElement("div");
  card.setAttribute("class", "card");
  card.append(name, location, description, image, price, deleteAd);

  document.getElementById("details").append(card);
};

var url = new URL(window.location.href);
var id = url.searchParams.get("ad");


fetch("https://655db6be9f1e1093c599bbed.mockapi.io/skelbimas/" + id)
  .then((res) => {
    return res.json();
  })
  .then((jsonRes) => {
    ad(jsonRes);
  });
