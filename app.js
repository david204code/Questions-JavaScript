// traversing the dom means moving up and down the dom tree
// const btns = document.querySelectorAll(".question-btn");
// // console.log(btns);
// // loop over them
// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     // console.log(e.currentTarget.parentElement.parentElement);
//     const question = e.currentTarget.parentElement.parentElement;
//     // toggle add the show-text css to the question element...toggle mean add or remove
//     question.classList.toggle("show-text");
//   });
// });

//using selectors inside the element
const questions = document.querySelectorAll(".question");
// console.log(questions);

// loop over the nodelist of questions
questions.forEach(function (question) {
  // console.log(question);
  const btn = question.querySelector(".question-btn");
  // console.log(btn);
  btn.addEventListener("click", function () {
    // only have show-text for ONE question, closing the rest
    questions.forEach(function (item) {
      // if the article does not match the click button then remove show-text
      // console.log(item);
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
