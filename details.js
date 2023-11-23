const ad = function (ad) {

    const name = document.createElement("h2");
    name.innerHTML = ad.name;

    const location = document.createElement("h2");
    location.innerHTML = ad.location;

    const description = document.createElement("p");
    description.innerHTML = ad.description;

    const image = document.createElement("img");
    image.setAttribute("src", ad.image);

    const price = document.createElement("p");
    price.innerHTML = ad.price;

    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.append(name, location, description, image, price);

    document.getElementById("details").append(card);

};

fetch("https://655db6be9f1e1093c599bbed.mockapi.io/skelbimas/3")
  .then((res) => {
    return res.json();
  })
  .then((jsonRes) => {
    console.log(jsonRes);

    ad(jsonRes);
  });
