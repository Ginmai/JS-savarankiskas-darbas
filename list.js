const ads = function (ads) {

  const sortedAds = ads.sort((a, b) => {
    return parseInt(a.price) < parseInt(b.price) ? -1 : 1;
  });

  sortedAds.forEach((ad) => {
    const link = document.createElement("a");
    link.setAttribute("href", "details.html?ad=" + ad.id);

    const name = document.createElement("h2");
    name.innerHTML = ad.name;

    link.append(name);

    const image = document.createElement("img");
    image.setAttribute("src", ad.image);

    const price = document.createElement("p");
    price.innerHTML = ad.price;

    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.append(link, image, price);

    document.getElementById("list").append(card);
  });
};

fetch("https://655db6be9f1e1093c599bbed.mockapi.io/skelbimas")
  .then((res) => {
    return res.json();
  })
  .then((jsonRes) => { 
    ads(jsonRes); 
  });
