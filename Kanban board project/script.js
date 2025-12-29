
let addBtn = document.querySelector('.add-btn')
let modalCont = document.querySelector('.modal-cont')
let mainCont = document.querySelector('.main-cont')
let taskArea = document.querySelector('.textArea-cont')
let allPriorityColors = document.querySelectorAll('.priority-color')
let toolBoxPriorityColors = document.querySelectorAll('.color')

let isModalVisible = false 

const lockClass = 'fa-lock'
const unlockClass = 'fa-lock-open'

let ticketColor = 'lightpink'
let colors = ['lightpink', 'lightgreen', 'lightblue', 'black']

//If user is clicking on add-btn, then the modal should pop-up
addBtn.addEventListener('click', function() {
    //! -> reverses the value, if it is TRUE, it will become false and vice-vera.
    isModalVisible = !isModalVisible

    if(isModalVisible === true) {
        //Make the modal visible.
        modalCont.style.display = "flex"; 
    } else {
        //Hide the modal.
        modalCont.style.display = "none";
    }
})

//Event to create a ticket when user presses shift key.
modalCont.addEventListener('keydown', function(event) {
    if(event.key == "Shift") {
        //Create a ticket.
        let ticketCont = document.createElement('div')
        ticketCont.setAttribute("class", "ticket-cont")

        let ticketId = shortid() // UUID - Universally Unique Identifiers.

        //Get the task description from the text Area.
        let taskText = taskArea.value 

        ticketCont.innerHTML = `
            <div class="ticket-color" style="background-color: ${ticketColor}"></div>
            <div class="ticket-id">${ticketId}</div>
            <div class="task-area">${taskText}</div>
            <div class="ticket-lock">
                <i class="fa-solid fa-lock"></i>
            </div>
        `

        mainCont.appendChild(ticketCont)

        //After createing the ticket, make the modal container hidden.
        modalCont.style.display = "none"
        isModalVisible = false

        taskArea.value = ""

        //Handle lock for this ticket.
        handleLock(ticketCont)

        handleTicketColor(ticketCont)
    }
})

function handleLock(ticket) {
    let ticketLockCont = ticket.querySelector('.ticket-lock')
    let ticketLockIcon = ticketLockCont.children[0]
    let ticketTaskArea = ticket.querySelector('.task-area')

    ticketLockIcon.addEventListener('click', function() {
        if(ticketLockIcon.classList.contains(lockClass)) {
            //remove fa-lock and add fa-lock-open
            ticketLockIcon.classList.remove(lockClass)
            ticketLockIcon.classList.add(unlockClass)

            //Make the task area editable.
            ticketTaskArea.setAttribute('contenteditable', 'true')
        } else {
            //remove fa-lock-open and add fa-lock
            ticketLockIcon.classList.remove(unlockClass)
            ticketLockIcon.classList.add(lockClass)

            //Make the task area non-editable.
            ticketTaskArea.setAttribute('contenteditable', 'false')
        }
    })
}


// Moving the active class to the color which has been clicked by the user.
allPriorityColors.forEach(function(colorElem) {
    colorElem.addEventListener('click', function() {
        allPriorityColors.forEach(function(priorityColor) {
            priorityColor.classList.remove('active')
        } ) 

        colorElem.classList.add('active')
        ticketColor = colorElem.classList[0]
    })
})


//Change the color of ticket band on user click.
function handleTicketColor(ticket) {
    let ticketColorBand = ticket.querySelector('.ticket-color')

    ticketColorBand.addEventListener('click', function() {
        let currentColor = ticketColorBand.style.backgroundColor;

        //Find the index of current color in the list of colors.
        let currentColorIndex
        for(let i = 0; i < colors.length; i++) {
            if(colors[i] === currentColor) {
                currentColorIndex = i
            }
        }

        let newColorIndex = (currentColorIndex + 1) % colors.length
        let newColor = colors[newColorIndex]

        ticketColorBand.style.backgroundColor = newColor
    })
}

toolBoxPriorityColors.forEach(function(color) {
    color.addEventListener("click", function() {
        let allTickets = document.querySelectorAll('.ticket-cont') // all the tickets in the document.

        let selectedColor = color.classList[0] // the first element in the classList is the color of the div element.
        allTickets.forEach(function(ticket) {
            let ticketColorBand = ticket.querySelector('.ticket-color')
            if(ticketColorBand.style.backgroundColor === selectedColor) {
                //This ticket should be visible.
                ticket.style.display = "block"
            } else {
                ticket.style.display = "none"
            }
        })
    })
}) 


/*

x = 1, size = 4

(x+1) % size

x = 0 => 1%4 = 1
x = 1 => 2%4 = 2
x = 2 => 3%4 = 3
x = 3 => 4%4 = 0


m % n => [0, n-1]


size = 100 => index : 0 to 99

currentIndex = 99
currentIndex + 1 = 100 % size = 0

*/