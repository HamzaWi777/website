document.addEventListener("DOMContentLoaded", function() {
    const trend = document.querySelectorAll(".trend");

    let count = 0;
    trend.forEach((curElem , index) => {
        curElem.style.left = `${index * 100}%`;
    });

    const myFood = () => {
        trend.forEach((curImg) => {
            curImg.style.transform = `translateX(-${count * 100}%)`;
        });
    };

    setInterval(() => {
        count++;
        if (count == trend.length) {
            count = 0;
        }
        myFood();
    }, 4200);
});
function showMore(button) {
    // Find the parent element of the button (which is the blogCard)
    var blogCard = button.parentElement;
  
    // Find the hidden content within the blogCard
    var hiddenContent = blogCard.querySelector('.hidden-content');
    
    // Toggle the display property to show/hide the content
    if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
        hiddenContent.style.display = 'block';
        blogCard.style.height = 'auto'; // Expand the height of the blogCard
        
    } else {
        hiddenContent.style.display = 'none';
        blogCard.style.height = '300px'; // Set back to initial height
       
    }
}
// Define a map of intents and their corresponding responses
const responses = {
    "greeting": "Hello! How can I assist you today?",
    "menu": "Sure, here is our menu: [List of menu items]",
    "ingredients": "The ingredients for [Menu Item] are [List of ingredients].",
    "nutrition": "The nutritional information for [Menu Item] is [Nutritional info].",
    "hours": "Our opening hours are [Opening hours].",
    "location": "You can find us at [Location].",
    "fallback": "I'm sorry, I didn't understand that. Could you please rephrase your question?"
};

// Function to classify the user's query into intents
function classifyIntent(query) {
    if (query.includes("hello") || query.includes("hi") || query.includes("hey")) {
        return "greeting";
    } else if (query.includes("menu")) {
        return "menu";
    } else if (query.includes("ingredients")) {
        return "ingredients";
    } else if (query.includes("nutrition")) {
        return "nutrition";
    } else if (query.includes("hours")) {
        return "hours";
    } else if (query.includes("location")) {
        return "location";
    } else {
        return "fallback";
    }
}

// Function to generate a response based on the classified intent
function generateResponse(intent, query) {
    switch(intent) {
        case "greeting":
            return responses["greeting"];
        case "menu":
            return responses["menu"];
        case "ingredients":
            const menuItem = // Extract menu item from the query
            return responses["ingredients"].replace("[Menu Item]", menuItem);
        case "nutrition":
            const menuItem = // Extract menu item from the query
            return responses["nutrition"].replace("[Menu Item]", menuItem);
        case "hours":
            return responses["hours"];
        case "location":
            return responses["location"];
        default:
            return responses["fallback"];
    }
}

// Function to handle user queries
function handleQuery(query) {
    const intent = classifyIntent(query.toLowerCase());
    const response = generateResponse(intent, query);
    return response;
}

// Example usage
const userInput = "What are the ingredients of the spaghetti carbonara?";
const botResponse = handleQuery(userInput);
console.log(botResponse);

// Your existing code for the trend carousel and showMore function can go here
document.addEventListener("DOMContentLoaded", function() {
    const trend = document.querySelectorAll(".trend");

    let count = 0;
    trend.forEach((curElem , index) => {
        curElem.style.left = `${index * 100}%`;
    });

    const myFood = () => {
        trend.forEach((curImg) => {
            curImg.style.transform = `translateX(-${count * 100}%)`;
        });
    };

    setInterval(() => {
        count++;
        if (count == trend.length) {
            count = 0;
        }
        myFood();
    }, 4200);
});

function showMore(button) {
    // Find the parent element of the button (which is the blogCard)
    var blogCard = button.parentElement;
  
    // Find the hidden content within the blogCard
    var hiddenContent = blogCard.querySelector('.hidden-content');
    
    // Toggle the display property to show/hide the content
    if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
        hiddenContent.style.display = 'block';
        blogCard.style.height = 'auto'; // Expand the height of the blogCard
        
    } else {
        hiddenContent.style.display = 'none';
        blogCard.style.height = '300px'; // Set back to initial height
       
    }
}
