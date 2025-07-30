function showMessage(response) {
  if (response === "No") {
    // Font styling for 'No' response
    const noMessage = document.getElementById("question");
    noMessage.style.fontFamily = "Georgia";
    noMessage.style.fontSize = "50px";
    noMessage.style.fontWeight = "normal";

    // Other actions for 'No' response
    const noButton = document.getElementById("no-button");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    // Set button position to absolute
    noButton.style.position = "absolute";

    // Change image source to "oi.jpg" and add styling class
    const image = document.getElementsByClassName("image")[0];
    image.src = "/img/oi.jpg"; // Set the replacement image source
    image.classList.add("replacement"); // Add the new class for styling

    // Generate random coordinates within the visible container
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    // Apply new coordinates to the button
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Update text content and hide name message
    noMessage.textContent = "'No' is not a valid answer:p";
    document.getElementById("name").style.display = "none";

    // Fade out the .question div
    const questionDiv = document.querySelector(".question");
    questionDiv.classList.add("hidden"); // Add the hidden class to apply fade-out effect
    const picDiv = document.querySelector("#mark");
    picDiv.classList.add("hidden"); // Add the hidden class to apply fade-out effect
  }

  if (response === "Yes") {
    // Remove name message and no button
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();
    document.getElementById("additional-message").textContent =
      "can't take you out on a date tho, cuz im shy";
    document.getElementById("additional-message").style.display = "block";

    // Font styling for 'Yes' response
    const yesMessage = document.getElementById("question");

    // Other actions for 'Yes' response
    yesMessage.textContent = "HOORAY!";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";

    // Change image to 'chipi.gif'
    document.getElementsByClassName("image")[0].src = "/img/chipi.gif";

    // Remove yes button
    document.getElementById("yesButton").remove();
  }
}
