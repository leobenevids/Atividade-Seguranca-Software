const name = document.getElementById("name");
const email = document.getElementById("email");
const website = document.getElementById("website");
const comment = document.getElementById("comment");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];

  // validation functions
  //   function CheckIfItsEmpty(field) {
  //     if (field.value === "" || field.value == null) {
  //       let msg = `${field} is required`;
  //       return msg;
  //     }
  //   }

  //   CheckIfItsEmpty(name);

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
  }
});

function WordCount(sentence) {
  const words = sentence.split(" ");
  return words.length;
}
