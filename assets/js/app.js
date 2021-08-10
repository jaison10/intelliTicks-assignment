// Read

const addNewButton = document.getElementById("addNewButton");
const cancel = document.getElementById("cancelButton");
const confirm = document.getElementById("confirmButton");

const onlyPropLists = document.querySelector(".listOfOnlyItems");

addNewButton.addEventListener('click', openForm);

function openForm(){
    const oldBox = document.querySelector(".mainBox");
    const newBox = document.querySelector(".formBox");
    const emptyNote = document.querySelector(".formBox");
    // oldBox.style.visibility = "hidden";
    oldBox.classList.add("hideme");
    emptyNote.classList.add("hideme");
    newBox.classList.add("showme");
}

cancel.addEventListener('click', cancelSub);

function cancelSub(){
    oldBox.classList.add("showme");
    // emptyNote.classList.add("hideme");
    newBox.classList.add("hideme");
    if(onlyPropLists.children.length > 1){
        emptyNote.classList.add("showme");
    }
    else{
        emptyNote.classList.add("hideme");
    }
}