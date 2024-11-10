async function fetchQuestions() {
  const apiUrl =
    "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";

  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);
}
fetchQuestions();
