const time = new Date()
const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
const day = days[time.getDay() - 1]
const month = months[time.getMonth() - 1] 
const year = time.getFullYear()
const day_view = document.querySelector(".day")
day_view.textContent = day
const number_view = document.querySelector(".number-day")
number_view.textContent = time.getDate()
const month_view = document.querySelector(".month")
month_view.textContent = month
const year_view = document.querySelector(".year")
year_view.textContent = year

let check_modal_add = false
const box_insert = document.querySelector(".box-insert")

const toggleModal = () => {
    if (!check_modal_add) {
        check_modal_add = true
        box_insert.style.display = "flex"
        return 0 
    }
    check_modal_add = false
    box_insert.style.display = "none"
}

const value_input = document.querySelector("input")

const clearInput = () => {
    value_input.value = ""
}

let tasks = []

const addTask = () => {
    if( value_input.value.length == 0 ) {
        return 0
    }
    tasks.push(value_input.value)
    value_input.value = ""
    toggleModal()
    viewTask()
}

const view_task = document.querySelector(".content")

const viewTask = () => {
    view_task.innerHTML = ""
    tasks.map( task => {
        view_task.innerHTML += 
        `<div class="task">
            <span class="value"> ${task.length > 10 ? task.slice(0,11) + "..." : task} </span> 
            <button class="btn-delete" onclick="deleteTask('${task}')"> 
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>`
    } )
}

const deleteTask = (value) => {
    tasks = tasks.filter(task => task != value)
    viewTask()
}