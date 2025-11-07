const todos = [
  { text: "Lära mig branches", done: false },
  { text: "Skapa PR och få review", done: false },
  { text: "Lösa en mergekonflikt", done: false },
];

const listEl = document.getElementById("todoList");
const addBtn = document.getElementById("addBtn");
const inputEl = document.getElementById("todoInput");

let currentFilter = 'all';

function render() {
  listEl.innerHTML = "";
  
  // Filtrera todos baserat på currentFilter
  const filtered = todos.filter(todo => {
    if (currentFilter === 'active') return !todo.done;
    if (currentFilter === 'done') return todo.done;
    return true; // 'all'
  });
  
  filtered.forEach((t, i) => {
    // Hitta original index i todos-arrayen
    const originalIndex = todos.indexOf(t);
    
    const li = document.createElement("li");
    li.className = "item" + (t.done ? " done" : "");

    const label = document.createElement("span");
    label.textContent = t.text;

    const spacer = document.createElement("span");
    spacer.className = "spacer";

    const toggle = document.createElement("button");
    toggle.textContent = t.done ? "Ångra" : "Klar";
    toggle.onclick = () => {
      todos[originalIndex].done = !todos[originalIndex].done;
      render();
    };

    const del = document.createElement("button");
    del.textContent = "Ta bort";
    del.onclick = () => {
      todos.splice(originalIndex, 1);
      render();
    };

    li.append(label, spacer, toggle, del);
    listEl.appendChild(li);
  });
}

// CONFLICT-SEED: Ändra den här hjälpfunktionen i två olika branches för att skapa en konflikt.
function addTodo(text) {
  todos.unshift({ text, done: false });
}

addBtn.addEventListener("click", () => {
  const val = inputEl.value.trim();
  if (!val) return;
  addTodo(val);
  inputEl.value = "";
  render();
});

// Filter-knappar
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    render();
  });
});

render();
