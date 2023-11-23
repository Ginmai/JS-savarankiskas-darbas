const ads = function (ads) {
  ads.forEach((ad) => {
    const name = document.createElement("h2");
    name.innerHTML = ad.name;

    const image = document.createElement("img");
    image.setAttribute("src", ad.image);

    const price = document.createElement("p");
    price.innerHTML = ad.price;

    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.append(name, image, price);

    document.getElementById("list").append(card);
  });
};

fetch("https://655db6be9f1e1093c599bbed.mockapi.io/skelbimas")
  .then((res) => {
    return res.json();
  })
  .then((jsonRes) => {
    console.log(jsonRes);

    ads(jsonRes);
  });
