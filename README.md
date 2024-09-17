# GUVI-Memory-game

A simple flip-flop memory game built using JavaScript, HTML, and TailwindCSS (using inline styles) where players try to match pairs of emoji cards by flipping them over. When two matching cards are found, they are hidden. Once all the cards are matched, the game displays a "You won the game!" message.

<h3>Features:</h3>
<b>Memory Game Mechanics:</b> Players flip over two cards at a time to try to match them.<br>
<b>Emoji Matching:</b> The cards contain various emojis, and players need to match the same emojis to win.<br>
<b>Flip Animation:</b> Cards flip to reveal emojis using a smooth rotation effect.<br>
<b>Winning Message:</b> Displays a "You won the game!" message once all pairs of cards are successfully matched.<br>
<b>Reset Button:</b> Allows players to reset and restart the game at any point.<br>

<h3>Technologies Used</h3>
<b>HTML5:</b> Basic HTML structure for the game.<br>
<b>JavaScript:</b> Used to handle the game logic, card matching, and animations.<br>
<b>TailwindCSS:</b> For styling the layout and design of the game board, cards, and elements, applied dynamically via JavaScript.

<h3>Installation & Setup</h3>
To run this game locally, follow these steps:

<ol>
  <li>Clone the repository </li>
  <li>Open the project directory</li>
  <li>Open the index.html file in your web browser</li></ol>

<h3>Game Rules</h3>
The game starts with all cards facing down (showing only the front background).<br>
Players click on a card to flip it over, revealing an emoji.<br>
The player then clicks on a second card. If the emojis match, the cards are hidden.<br>
If they do not match, both cards are flipped back after a short delay.<br>
The game continues until all cards are matched.<br>
Once all pairs are found, a "You won the game!" message will appear.<br>
The game can be reset at any time by clicking the "Reset Game" button.

<h3>The main logic for the memory game is handled in JavaScript:</h3>

<b>Card Generation:</b> A set of emojis is randomly shuffled, and cards are dynamically generated and added to the game board.<br>
<b>Flip Animation:</b> Cards flip between front and back using rotateY() CSS transformations triggered by JavaScript event listeners.<br>
<b>Card Matching:</b> The game tracks two cards at a time to check if they match. If the two cards match, they remain visible; otherwise, they flip back over.<br>
<b>Winning Condition:</b> The game tracks the number of matched cards, and once all pairs are matched, a "You won the game!" message is displayed.
