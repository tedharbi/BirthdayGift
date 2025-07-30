const fetchData = () => {
  // Hardcoded content is already in the HTML
  animationTimeline();
};

// Animation Timeline
const animationTimeline = () => {
  // Animate text by characters in the main section
  const textBoxChars = document.getElementById("textInChatBox");
  const hbd = document.querySelector(".wish-hbd");

  if (textBoxChars) {
    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
      .split("")
      .join("</span><span>")}</span>`;
  }

  if (hbd) {
    hbd.innerHTML = `<span>${hbd.innerHTML
      .split("")
      .join("</span><span>")}</span>`;
  }

  const tl = new TimelineMax();

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  tl.to(".container", 0.1, { visibility: "visible" })
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=1"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      { opacity: 0.9, y: 1400 },
      { opacity: 1, y: -1000 },
      0.2
    )
    .from(
      ".lydia-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        zIndex: -1,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 0.5, { x: -100, y: 350, rotation: -180, opacity: 0 })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(".wish h5", 0.5, { opacity: 0, y: 10, skewX: "-15deg" }, "party")
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
      },
      0.3
    )
    .to(".six", 0.5, { opacity: 0, y: 30, zIndex: "-1" })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(".last-smile", 0.5, { rotation: 90 }, "+=1");

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

// Run fetch and animation in sequence
fetchData();
