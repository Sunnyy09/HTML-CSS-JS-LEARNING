//Write a function buildSentence(words) that takes an array of words and
//returns a complete sentence ending with a period.

const words = ["JavaScript", "is", "fun"];

const buildSentence = (array) => {
  let sentence = array.join(" ");
  if (!sentence.endsWith(".")) {
    sentence += ".";
  }
  return sentence;
};
console.log(buildSentence(words));
//
//
//
//Phone Number Formatter:
const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const output = `(${digits.slice(0, 3).join("")}) ${digits
  .slice(3, 6)
  .join("")}-${digits.slice(6, 9).join("")}`;
console.log(output);
//
//
//
//CSV Generator:
const data = [
  ["Name", "Age", "City"],
  ["Alice", "25", "New York"],
  ["Bob", "30", "Los Angeles"],
];

// const csvString = `${data.join("\n")}`;
const csvString = data.map((arr) => arr.join(",")).join("\n");
console.log(csvString);

//
//
//
//Remove Vowels and Join:
const arr = ["hello", "world", "javascript"];
function removeVowelsAndJoin(array) {
  const result = arr.join("_");

  function removeVolwels(result) {
    return result.replace(/[aeiouAEIOU]/g, "");
    //g (global flag): Ensures that all occurrences of vowels in the string
    //are replaced, not just the first one.
  }
  return removeVolwels(result);
}
const res = removeVowelsAndJoin(arr);
console.log(res);
//
//
//
//another removeVowels function
function removeVowels(str) {
  const vowels = "aeiouAEIOU";
  return str
    .split("")
    .filter((char) => !vowels.includes(char))
    .join("");
}
console.log(removeVowels("Javascript"));
