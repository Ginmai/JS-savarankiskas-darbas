const create = function() {
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const img = document.getElementById("img").value;
    const location = document.getElementById("location").value;
    const price = document.getElementById("price").value;

    let ad = {
        name: name , 
        description: description, 
        image: img, 
        location: location, 
        price: price
    };

    fetch("https://655db6be9f1e1093c599bbed.mockapi.io/skelbimas", {
      method: "POST",
      headers: {'content-type':'application/json'},
      body: JSON.stringify(ad),
    });

    document.getElementsByClassName("form")[0].remove();

    const message = document.createElement("h3");
    message.innerHTML = "Skelbimas sėkmingai sukurtas";

    const back = document.createElement("a");
    back.innerHTML = "Skelbimų sąrašas";
    back.setAttribute("href", "index.html");
    back.setAttribute("class", "button");

    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.append(message, back);

    document.getElementById("create").append(card);  

}


