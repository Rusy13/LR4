var sum = 0;
function work() {
  var Cost = 0;
  var Name;
  var row;
  var td1;
  var td2;
  var td3;
  Cost = document.getElementById("cost");
  Name = document.getElementById("name");

  row = document.createElement("TR");
  td1 = document.createElement("TD");
  td2 = document.createElement("TD");
  td1.textContent = Name.value;
  td2.textContent = Cost.value;
  row.append(td1, td2);
  document.getElementById("table1").appendChild(row);

  sum = sum + parseInt(Cost.value);
}

function Sum_Output() {
  dd1.innerHTML = 'Общая сумма товаров = ' + sum;
}

let currentElem = null;

table1.onmouseover = function(event) {
  if (currentElem) return;

  let target = event.target.closest('tr');

  if (!target) return;


  if (!table1.contains(target)) return;

  currentElem = target;
  target.style.background = 'pink';


  target.onclick = function () {
    tableText(this);
  }
};


table1.onmouseout = function(event) {
  if (!currentElem) return;

  let relatedTarget = event.relatedTarget;

  while (relatedTarget) {
    if (relatedTarget == currentElem) return;

    relatedTarget = relatedTarget.parentNode;
  }

  currentElem.style.background = '';
  currentElem = null;
};




function tableText(tableCell) {
  var strr;
  strr=tableCell.innerHTML
  hhh.innerHTML += strr + "<br />";

}



















































































































































/*

var sum = 0;
function work() {
  var Cost = 0;
  var Name;
  var row;
  var td1;
  var td2;
  var td3;
  Cost = document.getElementById("cost");
  Name = document.getElementById("name");

  row = document.createElement("TR");
  td1 = document.createElement("TD");
  td2 = document.createElement("TD");
  td1.textContent = Name.value;
  td2.textContent = Cost.value;
  row.append(td1, td2);
  document.getElementById("table1").appendChild(row);

  sum = sum + parseInt(Cost.value);
}

function Sum_Output() {
  dd1.innerHTML = 'Общая сумма товаров = ' + sum;
}

// ячейка <td> под курсором в данный момент (если есть)
let currentElem = null;

table1.onmouseover = function(event) {
  // перед тем, как войти на следующий элемент, курсор всегда покидает предыдущий
  // если currentElem есть, то мы ещё не ушли с предыдущего <td>,
  // это переход внутри - игнорируем такое событие
  if (currentElem) return;

  let target = event.target.closest('tr');

  // переход не на <td> - игнорировать
  if (!target) return;

  // переход на <td>, но вне нашей таблицы (возможно при вложенных таблицах)
  // игнорировать
  if (!table1.contains(target)) return;

  // ура, мы зашли на новый <td>
  currentElem = target;
  target.style.background = 'pink';


  target.onclick = function () {
    tableText(this);
    /////////////////////////
  }
};


table1.onmouseout = function(event) {
  // если мы вне <td>, то игнорируем уход мыши
  // это какой-то переход внутри таблицы, но вне <td>,
  // например с <tr> на другой <tr>
  if (!currentElem) return;

  // мы покидаем элемент – но куда? Возможно, на потомка?
  let relatedTarget = event.relatedTarget;

  while (relatedTarget) {
    // поднимаемся по дереву элементов и проверяем – внутри ли мы currentElem или нет
    // если да, то это переход внутри элемента – игнорируем
    if (relatedTarget == currentElem) return;

    relatedTarget = relatedTarget.parentNode;
  }

  // мы действительно покинули элемент
  currentElem.style.background = '';
  currentElem = null;
};




function tableText(tableCell) {
  var strr;
  strr=tableCell.innerHTML
  hhh.innerHTML += strr + "<br />";

}*/