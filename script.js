const body = document.querySelector(".main");
body.className =
  "flex justify-center relative flex-col items-center bg-rose-800 font-mono min-h-screen";
document.body.appendChild(body);

const container = document.createElement("div");
container.className =
  "flex justify-center relative flex-col items-center gap-9 bg-rose-700 px-10 py-11";
body.appendChild(container);

const header = document.createElement("h1");
header.innerText = "Memory Game";
container.appendChild(header);
header.className = "text-5xl font-bold text-white";

const game = document.createElement("div");
container.appendChild(game);
game.className = "w-[430px] h-[430px] flex flex-wrap gap-2.5";

const button = document.createElement("button");
button.innerText = "Reset Game";
container.appendChild(button);
button.className =
  "border px-3 py-2 text-2xl font-semi-bold outline-double rounded-md bg-white hover:rounded-lg text-rose-700 hover:pointer hover:bg-rose-800 hover:text-white";
button.onclick = function () {
  location.reload();
};

const imgs = [
  "😀",
  "🙃",
  "🥳",
  "🤩",
  "😇",
  "🤗",
  "😁",
  "🙋‍♀️",
  "😀",
  "🙃",
  "🥳",
  "🤩",
  "😇",
  "🤗",
  "😁",
  "🙋‍♀️",
];
const randomImages = imgs.sort(() => 0.5 - Math.random());

let firstCard = null;
let secondCard = null;
let matchesFound = 0;

randomImages.forEach((emoji) => {
  // Create the outer span element (container)
  const span = document.createElement("span");
  span.className = "item relative w-[100px] h-[100px]";
  span.style.cursor = "pointer";

  // Create the inner div that will handle the flip
  const innerDiv = document.createElement("div");
  innerDiv.className = "item-inner";
  innerDiv.style.position = "relative";
  innerDiv.style.width = "100%";
  innerDiv.style.height = "100%";
  innerDiv.style.transformStyle = "preserve-3d";
  innerDiv.style.transition = "transform 0.6s";

  // Create the front face (background color)
  const frontDiv = document.createElement("div");
  frontDiv.className = "item-front";
  frontDiv.style.position = "absolute";
  frontDiv.style.width = "100%";
  frontDiv.style.height = "100%";
  frontDiv.style.display = "flex";
  frontDiv.style.justifyContent = "center";
  frontDiv.style.alignItems = "center";
  frontDiv.style.fontSize = "2rem";
  frontDiv.style.backfaceVisibility = "hidden"; // Ensure it's hidden when rotated
  frontDiv.style.backgroundColor = "rgb(244 63 94)"; // bg-rose-300 color
  frontDiv.style.transform = "rotateY(0deg)"; // Front side facing user

  // Create the back face (emoji)
  const backDiv = document.createElement("div");
  backDiv.className = "item-back";
  backDiv.innerText = emoji;
  backDiv.style.position = "absolute";
  backDiv.style.width = "100%";
  backDiv.style.height = "100%";
  backDiv.style.display = "flex";
  backDiv.style.justifyContent = "center";
  backDiv.style.alignItems = "center";
  backDiv.style.fontSize = "2rem";
  backDiv.style.backfaceVisibility = "hidden"; // Hidden when front side is visible
  backDiv.style.backgroundColor = "white";
  backDiv.style.color = "white";
  backDiv.style.transform = "rotateY(180deg)"; // Back side, facing away initially

  // Append front and back divs to the innerDiv
  innerDiv.appendChild(frontDiv);
  innerDiv.appendChild(backDiv);

  // Append innerDiv to the span (item container)
  span.appendChild(innerDiv);

  // Handle card click to flip and match
  span.onclick = function () {
    if (innerDiv.style.transform === "rotateY(180deg)") {
      return; // Don't allow flipping back if already revealed
    }

    innerDiv.style.transform = "rotateY(180deg)"; // Flip to reveal back (emoji)

    // Check if this is the first or second card clicked
    if (!firstCard) {
      firstCard = { element: span, emoji };
    } else if (!secondCard) {
      secondCard = { element: span, emoji };

      // Check if the cards match
      if (firstCard.emoji === secondCard.emoji) {
        setTimeout(() => {
          // Hide the matched cards
          firstCard.element.style.visibility = "hidden";
          secondCard.element.style.visibility = "hidden";
          matchesFound += 2;

          // Reset card tracking
          firstCard = null;
          secondCard = null;

          // Check if all matches are found
          if (matchesFound === randomImages.length) {
            setTimeout(() => {
              alert("You won the game!");
            }, 1000);
          }
        }, 1000);
      } else {
        // Flip the cards back if they don't match
        setTimeout(() => {
          firstCard.element.querySelector(".item-inner").style.transform =
            "rotateY(0deg)";
          secondCard.element.querySelector(".item-inner").style.transform =
            "rotateY(0deg)";
          firstCard = null;
          secondCard = null;
        }, 1000);
      }
    }
  };

  // Append the span to the game container
  game.appendChild(span);
});
