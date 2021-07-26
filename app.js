console.log(`Welcome!`)

// Constructor
function BookValue(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}


// function to display all things on the page

// Display Constructor
function Display() {

}

// adding prototype to the oop 
Display.prototype.add = function display(Books) {
    let body = document.getElementById(`body`)
    let string = `
            <tr>
                
                <td>${Books.name}</td>
                <td>${Books.author}</td>
                <td>${Books.type}</td>
            </tr>
`
    body.innerHTML += string;
}
Display.prototype.clear = function () {
    let FormSubmit = document.getElementById(`FormSubmit`)
    FormSubmit.reset()
}
Display.prototype.show = function (type, message) {

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
Display.prototype.check = function (Books) {
    if (Books.name.length < 3 || Books.author.length < 3) {
        return false
    }
    else {
        return true
    }
}


// Adding event listner to the button 
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

