// traversing the dom means moving up and down the dom tree
const btns = document.querySelectorAll(".question-btn");
// console.log(btns);
// loop over them
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // console.log(e.currentTarget.parentElement.parentElement);
    const question = e.currentTarget.parentElement.parentElement;
    // toggle add the show-text css to the question element...toggle mean add or remove
    question.classList.toggle("show-text");
  });
});

//using selectors inside the element
