const fakeDescriptions = [
  "In sollicitudin feugiat sapien, maximus dictum urna facilisis vel. In velit nisl, feugiat id orci non, tincidunt cursus elit. Quisque et magna sapien. Cras eget molestie magna, et molestie nulla.",
  "Quisque eu ullamcorper urna. Mauris sagittis et nulla sed rutrum. Suspendisse efficitur volutpat blandit. Nunc lobortis auctor augue, vel accumsan enim. Donec sodales vehicula metus ac sollicitudin. Nulla vestibulum faucibus lectus vitae convallis.",
  "Ut vulputate, lorem quis ornare sodales, nisl sem congue leo, ac scelerisque mi ante eget dui.",
  "Aenean vel hendrerit odio, dignissim varius odio. ",
  "Donec sodales vehicula metus ac sollicitudin. Aenean vel hendrerit odio, dignissim varius odio. ",
];
const fakeNames = [
  "Code Orange",
  "Name Helix",
  "Jasper Marketing Inc",
  "Decentralized Service 95",
  "Web3 Unicorn",
  "The NFT Tree",
  "ClosedSea",
  "Oasis",
];

export function getRandomDescription() {
  return fakeDescriptions[Math.floor(Math.random() * fakeDescriptions.length)];
}

export function getRandomName() {
  return fakeNames[Math.floor(Math.random() * fakeNames.length)];
}

export function getRandomSetOfN(n) {
  let projectNames = [];
  for (let i = 0; i < n; i++) {
    let name = getRandomName();
    let description = getRandomDescription();
    projectNames.push({
      name: name,
      description: description,
    });
  }
  return projectNames;
}
