const liPoint = document.querySelectorAll("li i");
const filed = document.getElementById("filed");
const eyeIcon = document.querySelector("#filed+i");

// Json Code To RGX
const rule = [
  {
    re: /.{10,}/, //Least 10 Characters
    index: 0,
  },
  {
    re: /[a-z]+/i, //Upper & lower case letter
    index: 1,
  },
  {
    re: /\d+/i, //At Least 1 Number
    index: 2,
  },
  {
    re: /[^\w\d]+/, //A symbol (#$&)
    index: 3,
  },
];

eyeIcon.addEventListener("click", function (e) {
  // Change Type Input
  filed.type = filed.type === "password" ? "text" : "password";
  //  Change ClassList EyeIcon
  e.target.classList = `fa-solid fa-eye${
    filed.type === "password" ? "-slash" : ""
  }`;
});

// Func To Match Rules Password
filed.addEventListener("input", test);

function test() {
  rule.forEach((element) => {
    if (element.re.test(filed.value)) {
      liPoint[element.index].classList = "fa-solid fa-check";
      liPoint[element.index].parentNode.children[1].classList = "check";
    } else {
      liPoint[element.index].classList = "fa-solid fa-circle";
      liPoint[element.index].parentNode.children[1].classList = "";
    }
  });
  check();
}

// Func To Level

function check() {
  let num = document.querySelectorAll("li i.fa-check");
  document.querySelectorAll(".level span").forEach((e) => {
    e.classList = "";
  });
  for (i = 0; i < num.length; i++) {
    document.querySelectorAll(".level span")[i].classList = "show";
  }
  level(num);
}

// Func To Change Text Level

function level(num) {
  let span = document.querySelector(".text-level span");
  let level = ["Weak", "Fair", "Good", "Strong"];
  span.textContent = level[num.length - 1];

  if (span.textContent == "") {
    span.parentNode.style.display = "none";
  } else {
    span.parentNode.style.display = "block";
  }
}
