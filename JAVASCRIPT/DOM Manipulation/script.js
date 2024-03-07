    // Accessing the paragraph element with ID "exampleParagraph"
    var paragraph = document.getElementById("exampleParagraph");
    console.log(paragraph.innerHTML);
    
    // Manipulate element 
    paragraph.textContent = "This text is changed dynamically using Javascript!"
    console.log(paragraph.innerHTML);

    // Accessing the div element with ID "exampleDiv"
    var divElement = document.getElementById("exampleDiv")
    divElement.style.background = "red";

     // Adding a new paragraph after the existing one
     var newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a new paragraph added dynamically.";

    // Adding a new attribute to an element
    newParagraph.setAttribute("class", "new-paragraph");

    // all changes should be appended
    divElement.appendChild(newParagraph);