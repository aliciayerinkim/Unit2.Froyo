const userInputString = prompt(
  "Please enter froyo flavor separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

function trackFlavors(userInputString) {
  const stringArray = userInputString.split(",");

  const flavors = {};

  for (let i = 0; i < stringArray.length; i++) {
    const str = stringArray[i];
    if (str in flavors) {
      flavors[str]++;
    } else {
      flavors[str] = 1;
    }
  }

  return flavors;
}

const flavors = trackFlavors(userInputString);

console.table(flavors);