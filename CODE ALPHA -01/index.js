let counter = 0;
const dleted = [];
let dlCount = 1;

function priorityUp(cnts) {
  console.log(dleted.includes(cnts + 1));
  if (dleted.includes(cnts - 1)) {
    console.log("entered");
    let crnsTodo = document.getElementById(cnts).innerHTML;
    let noOneTodo = document.getElementById(cnts - dlCount).innerHTML;
    document.getElementById(cnts - dlCount).innerHTML = crnsTodo;
    document.getElementById(cnts).innerHTML = noOneTodo;
  } else {
    let crnsTodo = document.getElementById(cnts).innerHTML;
    let noOneTodo = document.getElementById(cnts - 1).innerHTML;
    document.getElementById(cnts - 1).innerHTML = crnsTodo;
    document.getElementById(cnts).innerHTML = noOneTodo;
  }
}

function priorityDown(cnts) {
  if (dleted.includes(cnts + 1)) {
    let crnsTodo = document.getElementById(cnts).innerHTML;
    let noOneTodo = document.getElementById(cnts + dlCount).innerHTML;
    document.getElementById(cnts + dlCount).innerHTML = crnsTodo;
    document.getElementById(cnts).innerHTML = noOneTodo;
  } else {
    let crnsTodo = document.getElementById(cnts).innerHTML;
    let noOneTodo = document.getElementById(cnts + 1).innerHTML;
    document.getElementById(cnts + 1).innerHTML = crnsTodo;
    document.getElementById(cnts).innerHTML = noOneTodo;
  }
}

function delet(cnts, btn1, btn2, btn3, cards) {
  let crnsCrd = document.getElementById(cnts);
  let btns1 = document.getElementById(btn1);
  let btns2 = document.getElementById(btn2);
  let btns3 = document.getElementById(btn3);
  let cardsx = document.getElementById(cards);
  dlCount = dlCount + 1;

  crnsCrd.remove();
  btns1.remove();
  btns2.remove();
  btns3.remove();
  cardsx.remove();

  dleted.push(cnts);
  console.log(dleted);
}

function createTodo() {
  let todoContent = document.getElementById("todo").value;
  let temp = document.getElementById("temp");
  if (counter == 0) {
    temp.remove();
  }

  if (todoContent != "") {
    timer = new Date();
    timer = timer.toString();
    timer = timer.slice(0, -34);
    counter = counter + 1;
    let crnsCounter = counter;
    let btn1 = counter + "a";
    let btn2 = counter + "b";
    let btn3 = counter + "c";
    let cards = counter + "d";
    let todoSec = document.getElementById("todoList");
    let card = document.createElement("div");
    let timeCard = document.createElement("p");
    card.setAttribute("class", "cards");
    card.setAttribute("id", cards);
    timeCard.setAttribute("id", "time");

    let todoCard = document.createElement("label");
    todoCard.setAttribute("id", counter);
    todoCard.setAttribute("class", "labelClass");
    let prioBtn = document.createElement("button");
    prioBtn.setAttribute("id", btn1);
    prioBtn.setAttribute("class", "btnClz");
    let prioBtnDown = document.createElement("button");
    prioBtnDown.setAttribute("id", btn2);
    prioBtnDown.setAttribute("class", "btnClz");
    let deletBtn = document.createElement("button");
    deletBtn.setAttribute("id", btn3);
    deletBtn.setAttribute("class", "btnClz");
    prioBtn.addEventListener("click", function () {
      priorityUp(crnsCounter);
    });
    prioBtnDown.addEventListener("click", function () {
      priorityDown(crnsCounter);
    });
    deletBtn.addEventListener("click", function () {
      delet(crnsCounter, btn1, btn2, btn3, cards);
    });
    prioBtn.innerHTML = "⬆️";
    prioBtnDown.innerHTML = "⬇️";
    deletBtn.innerHTML = "❌";
    todoCard.innerHTML = "💡" + todoContent;
    timeCard.innerHTML = "⏰ " + timer;
    card.appendChild(todoCard);
    card.appendChild(prioBtn);
    card.appendChild(prioBtnDown);
    card.appendChild(deletBtn);
    card.appendChild(timeCard);

    todoSec.appendChild(card);

    document.getElementById("todo").value = "";
  } else {
  }
}
