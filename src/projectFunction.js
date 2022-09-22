import { add, remove } from 'lodash'
import pageLoad from './pageLoad'
// import createPopUpForm from './ToDoClass'

const projectFactory = (title, deadline, description, priority) => {
    return {title, deadline, description, priority}
}

let index = 0

const addNewProject = (() => {
    const card = document.createElement('div')
    card.setAttribute('class', 'card')
    pageLoad.content.append(card)

    const titleInput = document.createElement('input')
    titleInput.setAttribute('type', 'text')
    titleInput.setAttribute('placeholder', 'set project title')
    card.append(titleInput)

    const addTitleButton = document.createElement('button')
    addTitleButton.setAttribute('id', 'addTitleButton')
    addTitleButton.textContent = 'enter'
    card.append(addTitleButton)

    addTitleButton.addEventListener('click', () => {
        let newTitle = document.createElement('h1')
        newTitle.innerText = titleInput.value
        card.prepend(newTitle)
        titleInput.remove()
        addTitleButton.remove()
    })

    const toDoSpace = document.createElement('div')
    toDoSpace.setAttribute('class', 'toDoSpace')
    card.append(toDoSpace)

    const newToDoButton = document.createElement('button')
    newToDoButton.textContent = 'add new ToDo'
    toDoSpace.append(newToDoButton)

    // let newToDo = ''
    // let addToDoContent = ''
    let projectArray = []

    index++
    let thisIndex = index
    newToDoButton.addEventListener('click', () => {
        // ------------------------------------------------------ POPUP FORM
    
        const formPopUp = document.createElement('div')
        formPopUp.setAttribute('class', 'form-popup')
        formPopUp.setAttribute('id', 'myForm')
        card.append(formPopUp)
        
        const formContainer = document.createElement('form')
        formContainer.setAttribute('class', 'form-container')
        formContainer.classList.add(`form${thisIndex}`)
        formPopUp.append(formContainer)
        
        const formHeading = document.createElement('h2')
        formHeading.textContent = 'New ToDo'
        formContainer.append(formHeading)
    
        const titleLabel = document.createElement('label')
        titleLabel.setAttribute('for', 'title')
        titleLabel.innerText = 'Title'
        formContainer.append(titleLabel)
    
        const toDoTitleInput = document.createElement('input')
        toDoTitleInput.setAttribute('type', 'text')
        toDoTitleInput.setAttribute('name', 'title')
        toDoTitleInput.setAttribute('required', '')
        formContainer.append(toDoTitleInput)
    
        const descLabel = document.createElement('label')
        descLabel.setAttribute('for', 'desc')
        descLabel.innerText = 'Description'
        formContainer.append(descLabel)
    
        const toDoDescInput = document.createElement('input')
        toDoDescInput.setAttribute('type', 'text')
        toDoDescInput.setAttribute('name', 'desc')
        formContainer.append(toDoDescInput)
    
        const deadlineLabel = document.createElement('label')
        deadlineLabel.setAttribute('for', 'deadline')
        deadlineLabel.innerText = 'Deadline'
        formContainer.append(deadlineLabel)
    
        const deadlineInput = document.createElement('input')
        deadlineInput.setAttribute('type', 'date')
        deadlineInput.setAttribute('name', 'deadline')
        formContainer.append(deadlineInput)
    
        const priorityLabel = document.createElement('label')
        priorityLabel.setAttribute('for', 'priority')
        priorityLabel.innerText = 'Priority'
        formContainer.append(priorityLabel)
    
        const priorityInput = document.createElement('input')
        priorityInput.setAttribute('type', 'text')
        priorityInput.setAttribute('name', 'priority')
        priorityInput.setAttribute('placeholder', 'Q1/2/3/4')
        formContainer.append(priorityInput)
    
        const submitButton = document.createElement('input')
        submitButton.setAttribute('type', 'submit')
        formContainer.append(submitButton)
        let newToDo = ''

        //----------------------------------------------- SUBMIT FORM

        function onSubmit(el) {
            el.preventDefault()
            // console.log('clicked submit')
            formPopUp.remove()
            newToDoButton.disabled = false

            newToDo = document.createElement('div')
            newToDo.setAttribute('class', 'ToDo')
            toDoSpace.append(newToDo)

            let NTDTitle = document.createElement('p')
            NTDTitle.textContent = toDoTitleInput.value
            newToDo.append(NTDTitle)

            let NTDDesc = document.createElement('p')
            NTDDesc.textContent = toDoDescInput.value
            newToDo.append(NTDDesc)
            NTDDesc.style.display = "none";

            let NTDDue = document.createElement('p')
            NTDDue.textContent = deadlineInput.value
            newToDo.append(NTDDue)
            NTDDue.style.display = "none";

            let NTDPriority = document.createElement('p')
            NTDPriority.textContent = priorityInput.value
            newToDo.append(NTDPriority)
            NTDPriority.style.display = "none";

            let delBtn = document.createElement('button')
            delBtn.textContent = 'DEL'
            newToDo.append(delBtn)
            delBtn.style.display = "none";

            delBtn.addEventListener('click', () => {
                newToDo.remove()
            })

            //------------------------------------------------ DISPLAY TODO DETAILS
            newToDo.addEventListener('click', () => {
                NTDDesc.classList.toggle('displayBlock')
                NTDDue.classList.toggle('displayBlock')
                NTDPriority.classList.toggle('displayBlock')
                delBtn.classList.toggle('displayBlock')
            })

            const todoObj = projectFactory(
                toDoTitleInput.value,
                deadlineInput.value,
                toDoDescInput.value,
                priorityInput.value
            )
            projectArray.push(todoObj)
            console.table(projectArray)
        }

        formContainer.addEventListener('submit', onSubmit)
    
    
        //--------------------------------------------------------------
        formPopUp.style.display = "block";
        newToDoButton.setAttribute('disabled', '')
        
        // addToDoContent = document.createElement('button')
        // newToDo.setAttribute('id', 'addToDoContentButton')
        // addToDoContent.textContent = '+'
        // newToDo.append(addToDoContent)

    })
    
    // addToDoContent.addEventListener('click', () => {
    //     createPopUpForm()
    // })

    const deleteProjectButton = document.createElement('button')
    deleteProjectButton.textContent = 'delete project'
    deleteProjectButton.setAttribute('class', 'deleteProjectButton')
    card.append(deleteProjectButton)

    deleteProjectButton.addEventListener('click', () => {
        card.remove()
    })


    return {
        card,
        // newToDo,
        toDoSpace,
    }
});

//-------------------------------------------------------- ADD NEW PROJECT
function addNewProjectCard() {
    const button = document.getElementById('newProject')
    button.addEventListener('click', () => {
        addNewProject()
    })
}

export default addNewProject;
export {addNewProjectCard};