const addNote = document.querySelector('.add-box');
const Popup = document.querySelector('.popup');
const closebtn = document.querySelector('.fa-xmark');
const addButton = document.querySelector('#button');
const inputTitle = document.querySelector('#title');
const inputDesc = document.querySelector('#description');
const edit = document.querySelectorAll(".edit-btn");
const popupHeader = document.querySelector('.popup-header');

const Notes = JSON.parse(localStorage.getItem("notes")) || [];
const Months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

addNote.addEventListener('click', () => {
    Popup.style.display = "flex";
    popupHeader.innerHTML = "Add a New Note";
    addButton.innerHTML = "Add Note";
});

closebtn.addEventListener('click', () => {
    Popup.style.display = "none";
});

function ShowNotes()
{
    document.querySelectorAll('.note-box').forEach((note) => note.remove());
    Notes.forEach((note, index) => {
        let divTag = `
        <div class="note-box flex">
            <h3 class="note-title">${note.Title}</h3>
            <div class="note-desc">${note.Description}</div>
            <div class="note-detail flex">
                <div class="date">${note.NoteDate}</div>
                <i class="fa-solid fa-ellipsis-vertical">
                    <div class="action-menu flex">
                        <div class="edit-btn hover-btn flex" onclick="editNote(${index})">
                            <i class="fa-solid fa-pen"></i>
                            <span>Edit</span>
                        </div>
                        <div class="delete-btn hover-btn flex" onclick="deleteNote(${index})">
                            <i class="fa-solid fa-trash"></i>
                            <span>Delete</span>
                        </div>
                    </div>
                </i>
            </div>
        </div>
    `
    addNote.insertAdjacentHTML('afterend', divTag);

    });
    
}

addButton.addEventListener('click', function createNote(e){
    e.preventDefault();

    var title = inputTitle.value;
    var descripton = inputDesc.value;

    const dateObj = new Date();
    let month = Months[dateObj.getMonth()];
    let date = dateObj.getDate();
    let year = dateObj.getFullYear();
    var createDate = `${month}, ${date} ${year}`;
    let note = {
        Title: title,
        Description: descripton,
        NoteDate: createDate
    };

    Notes.push(note);
    localStorage.setItem("notes", JSON.stringify(Notes));

    inputTitle.value="";
    inputDesc.value="";
    Popup.style.display = "none";

    ShowNotes();

});

function editNote(index){
    console.log(index);
    Popup.style.display = "flex";
    popupHeader.innerHTML = "Update a Note";
    addButton.innerHTML = "Update Note";
    inputTitle.value = Notes[index].Title;
    inputDesc.value = Notes[index].Description;
    
    Notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(Notes));
    ShowNotes();
}

function deleteNote(index){
    console.log(index);
    Notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(Notes));
    ShowNotes();
}



