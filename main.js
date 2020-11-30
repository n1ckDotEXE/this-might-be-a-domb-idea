// Change the font color of the paragraph to light blue.
let pTag = document.querySelector('p');
pTag.style.color = 'lightblue';

// Change the font size of the heading to 5 em.
let h1Tag = document.querySelector('h1');
h1Tag.style.fontSize = '5em';

// Change the text of the paragraph to be the following Hipster Ipsum:
// Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.
pTag.textContent = 'Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.';

// Change the 13th item to be half transparent.
let item13 = document.querySelector('#item-13');
item13.style.opacity = '0.5';

// Change the 3rd item's text to say:
// I say, "Hi!"
let item3 = document.querySelector('#item-3');
item3.textContent = `I say, "Hi!"`;

// Change the image below the list to be this image.
let dinoPic = document.querySelector('img');
dinoPic.src = 'http://www.tioxic.com/wp-content/uploads/trex_4.jpg';

// Change that image's size to be 300 pixels high.
dinoPic.height = '300';

// Add a new image of your choice below or to the right of the other image, using HTML, and then, with JavaScript, make it 300 pixels high.
let newPic = document.querySelector('#newPic');
newPic.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Raspberry_Pi_Logo.svg/200px-Raspberry_Pi_Logo.svg.png';

newPic.height = '300';

// Add a 16th <li> to the list. You can use the html file to write in the li, and then, with JavaScript, give it the same class as the others and an id that follows the others' numbering scheme.
let item16 = document.querySelector('#item-16');
item16.textContent = `Won't get fooled again.`;