const name = document.getElementById("name");
const email = document.getElementById("email");
const website = document.getElementById("website");
const comment = document.getElementById("comment");
const form = document.getElementById("form");
const gender = document.getElementsByName("gender");
const errorElement = document.getElementById("error");
const dataElement = document.getElementById("data");

form.addEventListener("submit", (e) => {
  let messages = [];

  if (name.value === "" || name.value == null) {
    messages.push("Name is required");
  }

  if (email.value === "" || email.value == null) {
    messages.push("Email is required");
  }

  if (website.value === "" || website.value == null) {
    messages.push("Website is required");
  }

  if (comment.value === "" || comment.value == null) {
    messages.push("Comment is required");
  } else {
    if (WordCount(comment.value) < 3) {
      messages.push("Comment must have at least 3 words");
    }
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerHTML = messages.join(", ");
  } else {
    const formValues = {
      name: name.value.trim(),
      email: email.value,
      website: website.value,
      comment: comment.value,
    };

    window.localStorage.setItem("form", JSON.stringify(formValues));
  }
});

function WordCount(sentence) {
  const words = sentence.split(" ");
  return words.length;
}

const localStorageData = JSON.parse(window.localStorage.getItem("form"));
console.log(localStorageData);

 dataElement.innerHTML = localStorageData;
