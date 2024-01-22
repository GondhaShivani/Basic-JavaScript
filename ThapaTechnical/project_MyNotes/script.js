const addButton = document.querySelector("#add");

const updateLocalStorageData = () => {
  const notes = document.querySelectorAll(".note");
  const notesData = [];

  notes.forEach((note) => {
    const textarea = note.querySelector("textarea");
    notesData.push(textarea.value);
  });

  localStorage.setItem("notes", JSON.stringify(notesData));
};

const addNewNote = (text = " ") => {
  {
    //want to add this div dynamicaly
    /* <div class="note">
    <div class="operation">
      <button class="edit"><i class="fas fa-edit"></i></button>
      <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main"></div>
    <textarea class=""></textarea>
  </div> */
  }
  const note = document.createElement("div");
  note.classList.add("note");

  const htmlData = `
    <div class="operation">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
  `;

  note.insertAdjacentHTML("afterbegin", htmlData);
  //console.log(note.insertAdjacentHTML("afterbegin", htmlData));
  //console.log(note);

  //getting the references
  const editButton = note.querySelector(".edit");
  const delButton = note.querySelector(".delete");
  const mainDiv = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  //deleting
  delButton.addEventListener("click", () => {
    note.remove();
    updateLocalStorageData();
  });

  //editing
  textArea.value = text;
  mainDiv.innerHTML = text;

  editButton.addEventListener("click", () => {
    mainDiv.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("change", (event) => {
    const value = event.target.value;
    //console.log(value);
    mainDiv.innerHTML = value;
    mainDiv.style.fontSize = "20px";

    updateLocalStorageData();
  });

  document.body.appendChild(note);
  //it appends a node as last child of a node
  //pepend - it pepends a node as 1st child of a node
  updateLocalStorageData();
};

//getting data from localstorage
const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach((note) => addNewNote(note));
}

addButton.addEventListener("click", () => addNewNote());
