//Display the shopping items
const darkSoulsGames = [
  {
    title: "Dark Souls",
    cost: "$19.99",
    rating: 4.8,
    reviews: [
      "An absolute masterpiece! The difficulty is brutal but fair.",
      "The world-building and lore are phenomenal. A must-play.",
      "Challenging but rewarding. Prepare to die, a lot.",
    ],
  },
  {
    title: "Dark Souls II",
    cost: "$29.99",
    rating: 4.5,
    reviews: [
      "A solid sequel with some changes. Still a great experience.",
      "Not as good as the first, but the combat is still top-notch.",
      "Loved the new areas and enemies. A worthy follow-up.",
    ],
  },
  {
    title: "Dark Souls III",
    cost: "$39.99",
    rating: 4.9,
    reviews: [
      "The best in the series! Amazing graphics and gameplay.",
      "Incredible final installment. The bosses are epic!",
      "Dark Souls III perfects the formula. Highly recommend.",
    ],
  },
];

let shoppingCartItems = [];

for (let i = 0; i < darkSoulsGames.length; i++) {
    //Create
    const itemContainer = document.createElement("div");
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    const addToCartBtn = document.createElement("button");
    //Modify
    summary.textContent = `${darkSoulsGames[i].title} : ${darkSoulsGames[i].cost} -- ${darkSoulsGames[i].rating}/5`;
    addToCartBtn.textContent = "Add to Cart";
    addToCartBtn.addEventListener("click", (event) => {
        //Create the string that we want to add to the cart
        const cartItem = `${darkSoulsGames[i].cost}: ${darkSoulsGames[i].title}`;
        
        //Is the item already in the shopping cart?
        if (!shoppingCartItems.includes(cartItem)) {
            //If not, then add the item to the cart
            shoppingCartItems.push(cartItem);
        }
    });

    itemContainer.classList.add("item-container");

    for (let j = 0; j < darkSoulsGames[i].reviews.length; j++) {
        const para = document.createElement("p");
        para.textContent = darkSoulsGames[i].reviews[j];
        details.append(para);
    }

    //Append
    details.append(summary);
    itemContainer.append(details, addToCartBtn);
    document.getElementById("shopping-items").append(itemContainer);
}

function showCart() {
    //Create
    const cartModal = document.createElement("div");
    const cartCard = document.createElement("div");
    const cartHeader = document.createElement("h2");
    const cartList = document.createElement("ul");
    const closeCartButton = document.createElement("button");
    //Modify
    cartModal.classList.add("modal");
    cartCard.classList.add("modal-card");
    cartHeader.textContent = "Shopping Cart";
    closeCartButton.textContent = "X";
    closeCartButton.addEventListener("click", () => cartModal.remove());


    for (let i = 0; i < shoppingCartItems.length; i++) {
        const newLi = document.createElement("li");
        newLi.textContent = shoppingCartItems[i];
        cartList.append(newLi);
    }

    //Append
    cartModal.append(cartCard);
    cartCard.append(cartHeader, cartList, closeCartButton);
    document.querySelector("main").append(cartModal);
}

const cartButton = document.querySelector("#cart-id");
cartButton.addEventListener("click", showCart);