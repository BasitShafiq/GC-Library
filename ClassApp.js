console.log(`Welcome!`)
storage()

function storage() {
    var notes = localStorage.getItem("notes");

    let notesObj;
    if (notes == null) {
        notesObj = [];

    } else {
        notesObj = JSON.parse(notes);

    } console.log(notesObj)
    let string = '';
    Array.from(notesObj).forEach(function (element, index) {
        let body = document.getElementById(`body`)
        string += `
                <tr>
                    
                    <td>${element.name}</td>
                    <td>${element.author}</td>
                    <td>${element.type}</td>
                    <td><button id="${index}" onclick="del(this.id)" class="btn btn-danger">Delete</button></td>

                </tr>
    `
        if (notesObj.length == 0) {
            body.innerHTML = ' '
        } else {

            body.innerHTML = string;
        }

    });

}
function del(index) {
    var notes = localStorage.getItem("notes");

    let notesObj;
    if (notes == null) {
        notesObj = [];

    } else {
        notesObj = JSON.parse(notes);

    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj))

    storage()

}
class BookValue {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }

}
class Display {
    add(Books) {
        var notes = localStorage.getItem("notes");
        let notesObj;
        if (notes == null) {
            notesObj = [];

        } else {
            notesObj = JSON.parse(notes);

        }
        notesObj.push(Books)
        console.log(Books)
        localStorage.setItem('notes', JSON.stringify(notesObj))
        let body = document.getElementById(`body`)
        storage()
    }
   
    clear() {
        let FormSubmit = document.getElementById(`FormSubmit`)
        FormSubmit.reset()
    }
    show(type, message) {

        let alert = document.getElementById(`alert`)
        alert.innerHTML = `
        <div class="alert alert-${type}" role="alert">
      ${message}
        </div>`
        setTimeout(function () {

            alert.innerHTML = ''

        }
            , 3000);
    }
    check(Books) {
        if (Books.name.length < 3 || Books.author.length < 3) {
            return false
        }
        else {
            return true
        }
    }

}


let FormSbumit = document.getElementById(`FormSubmit`).addEventListener(`submit`, function (e) {
    console.log(`Form is submitted`)
    let Name = document.getElementById(`Name`).value;
    let Author = document.getElementById(`Author`).value;
    let type

    let science = document.getElementById(`science`)
    let arts = document.getElementById(`arts`)
    let novel = document.getElementById(`novel`)

    if (science.checked) {
        type = science.value
    }
    else if (arts.checked) {
        type = arts.value
    }
    else if (novel.checked) {
        type = novel.value
    }
    let Books = new BookValue(Name, Author, type)
    // console.log(Books.name)
    let display = new Display()
    if (display.check(Books)) {

        display.add(Books)
        display.clear()
        display.show(`success`, `Your Book has been submitted successflly`);



    }
    else {
        display.show(`danger`, `please fill up the required fields correctly`)

    }
    e.preventDefault()



})
