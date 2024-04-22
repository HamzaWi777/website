document.addEventListener("DOMContentLoaded", function() {
  var chatIcon = document.querySelector(".chat-icon");
  var chatPopup = document.querySelector(".chat-popup");
  var chatPopupClose = document.querySelector(".chat-popup-close");
  var userInputField = document.getElementById("user-input");

  chatIcon.addEventListener("click", function() {
      chatPopup.style.display = "block";
      userInputField.focus(); // Mettre le focus sur le champ de saisie lorsque la fenêtre de chat s'ouvre
      displayBotResponse("Bonjour ! Comment puis-je vous aider aujourd'hui ? Vous pouvez me poser des questions sur le menu, les ingrédients, les informations nutritionnelles, les heures d'ouverture ou l'emplacement.");
  });

  chatPopupClose.addEventListener("click", function() {
      chatPopup.style.display = "none";
  });

  window.addEventListener("click", function(event) {
      if (event.target === chatPopup) {
          chatPopup.style.display = "none";
      }
  });

  userInputField.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
          sendMessage();
      }
  });
});

function sendMessage() {
  var userInputField = document.getElementById("user-input");
  var userInput = userInputField.value.trim();
  var chatMessages = document.querySelector(".chat-messages");

  if (userInput === "") {
      return; // Ignore empty messages
  }

  displayUserMessage(userInput);
  userInputField.value = ""; // Clear the input field

  var botResponse = generateBotResponse(userInput);

  setTimeout(function() {
      displayBotResponse(botResponse);
  }, 500);
}


function displayUserMessage(message) {
  var chatMessages = document.querySelector(".chat-messages");
  chatMessages.innerHTML += "<p><strong>Vous :</strong> " + message + "</p>";
}

function displayBotResponse(response) {
  var chatMessages = document.querySelector(".chat-messages");
  chatMessages.innerHTML += "<p><strong>Bot :</strong> " + response + "</p>";
}

function generateBotResponse(userInput) {
  userInput = userInput.toLowerCase();
  if (userInput.includes("bonjour") || userInput.includes("salut")) {
      return "Bonjour ! Comment puis-je vous aider ?";
  } else if (userInput.includes("au revoir") || userInput.includes("bye")) {
      return "Au revoir ! Bonne journée !";
  } else if (userInput.includes("menu")) {
      return "Notre menu comprend une variété de plats délicieux tels que des pizzas, des pâtes, des sandwichs, des salades, et plus encore. Souhaitez-vous que je vous fournisse plus de détails sur un plat spécifique ?";
  } else if ((userInput.includes("ingrédients")) || (userInput.includes("ingredients"))) {
      return "Bien sûr ! Je peux fournir des informations sur les ingrédients utilisés dans nos plats. Pour quel plat êtes-vous intéressé ?";
  } else if (userInput.includes("nutrition")) {
      return "Les informations nutritionnelles sont disponibles pour nos plats du menu. Veuillez me dire quel plat vous souhaitez consulter.";
  } else if ((userInput.includes("horaires"))|| (userInput.includes("heures")) ||(userInput.includes("horaire")) ) {
      return "Nous sommes ouverts de 8:00h a 21:00h sauf lundi . Y a-t-il autre chose que vous aimeriez savoir ?";
  } else if (userInput.includes("emplacement")) {
      return "Notre restaurant est situé à monastir rue blabla . N'hésitez pas à nous rendre visite à tout moment !";
  }
  else if ((userInput.includes("Baguette Farcie")) || (userInput.includes("Farcie"))) {
    return "La Bguette Farcie est garnie de viandes, fromages, légumes et condiments.";
  }
  else if (userInput.includes("pâtes alfredo aux crevettes ricardo")) {
    return "Les Pâtes Alfredo aux crevettes Ricardo sont accompagnées de crevettes succulentes, sauce Alfredo crémeuse et fromage parmesan.";
  }
  else if (userInput.includes("gâteau frigo vanille ")) {
    return "Le Gâteau frigo vanille et Ferrero Rocher est composé de couches de vanille et de Ferrero Rocher.";
  }
  else if (userInput.includes("ferrero rocher")) {
    return "Le Gâteau frigo vanille et Ferrero Rocher est composé de couches de vanille et de Ferrero Rocher.";
  }
  else if (userInput.includes("lasagne")) {
    return "Un plat italien classique composé de fines feuilles de pâtes intercalées avec une sauce bolognaise savoureuse, une béchamel onctueuse et du fromage fondant, le tout cuit au four jusqu'à obtenir une délicieuse perfection dorée.";
  }
  else if (userInput.includes("spaghetti")) {
    return "Une délicieuse préparation de spaghetti associée à une sauce tomate maison aux scalopes, offrant une combinaison savoureuse de pâtes et de viande dans une sauce riche et savoureuse";
  }
  else if (userInput.includes("pâtes à la tomate")) {
    return "Un plat savoureux et équilibré où des pâtes sont accompagnées d'une sauce tomate maison, enrichie d'épinards frais sautés et de champignons, offrant une combinaison délicieuse de légumes verts et de saveurs riches en umami.";
  }
  else if (userInput.includes("verrine au mascarpone")) {
    return "Un dessert élégant et raffiné composé de couches de mascarpone crémeux alternées avec des biscuits imbibés de café ou de liqueur, offrant une combinaison de textures et de saveurs délicieuses dans un format individuel et élégant.";
  }
  else if (userInput.includes("pancake")) {
    return "Une délicieuse préparation à base de pâte à crêpe épaisse, cuite à la poêle et servie traditionnellement avec du sirop d'érable, du beurre fondu, des fruits frais ou d'autres garnitures sucrées ou salées, offrant une option délicieusement réconfortante pour le petit-déjeuner ou le brunch.";
  }
  else if (userInput.includes("cheesesteak")) {
    return "Un sandwich emblématique de la ville de Philadelphie, composé de fines tranches de bœuf grillées ou sautées, généralement associées à des poivrons et des oignons sautés, le tout servi sur un pain à sous-marin moelleux et garni de fromage fondu, offrant une explosion de saveurs salées et riches en umami.";
  }
  else if (userInput.includes("Pizza Pepperoni")) {
    return "Une pizza classique garnie de sauce tomate, de fromage mozzarella et de fines tranches de pepperoni, un salami italien épicé, offrant une combinaison irrésistible de saveurs salées et épicées sur une croûte croustillante.";
  }
  else if (userInput.includes("pizza aux épinards")) {
    return "Une délicieuse variante de pizza garnie de sauce tomate ou de crème fraîche, de fromage mozzarella et de feuilles d'épinards frais, offrant une combinaison savoureuse de saveurs végétales et de fromage fondant sur une croûte croustillante.";
  }
  else if (userInput.includes("crêpe au chocolat")) {
    return "Une crêpe délicieusement garnie de chocolat fondu ou de Nutella, et garnie de tranches de fruits frais tels que des fraises, des bananes, des framboises ou des kiwis.";
  }
  else if (userInput.includes("poisson aux légumes")) {
    return "Un plat délicieux et sain qui marie la tendresse du poisson avec la fraîcheur et la saveur des légumes.";
  }
  else if (userInput.includes("pizza au thon")) {
    return "Une pizza garnie de sauce tomate ou de crème fraîche, de fromage mozzarella et de morceaux de thon en conserve, souvent accompagnés d'olives noires, d'oignons rouges et parfois de câpres, offrant une combinaison savoureuse de saveurs marines sur une croûte croustill";
  }
  else {
      return "Désolé, je n'ai pas compris. Vous pouvez me poser des questions sur le menu, les ingrédients, les informations nutritionnelles, les heures d'ouverture ou l'emplacement.";
  }
}
