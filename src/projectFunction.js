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
    let num = 0

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
        
        const formHeading = document.createElement('h3')
        formHeading.textContent = `New ${titleInput.value} item #${num}`
        formHeading.setAttribute('id', 'formHeading')
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
    
        const priorityInput = document.createElement('select')
        priorityInput.setAttribute('name', 'priority')

        const priOptX = document.createElement('option')
        priorityInput.append(priOptX)

        const priOpt1 = document.createElement('option')
        priOpt1.textContent = 'Q1'
        priorityInput.append(priOpt1)

        const priOpt2 = document.createElement('option')
        priOpt2.textContent = 'Q2'
        priorityInput.append(priOpt2)

        const priOpt3 = document.createElement('option')
        priOpt3.textContent = 'Q3'
        priorityInput.append(priOpt3)

        const priOpt4 = document.createElement('option')
        priOpt4.textContent = 'Q4'
        priorityInput.append(priOpt4)

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
            newToDo.setAttribute('value', `${num}`)

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
            delBtn.setAttribute('value', `${num}`)

            delBtn.addEventListener('click', () => {
                newToDo.remove()
                // projectArray.splice(todoObj.value, 1)

                // projectArray = projectArray.filter(function(todo) {
                //     if (todo.value != projectArray[todoObj.value]['value']) {
                //         console.table(todo) // loops over objects (index) that satisfy TRUE (!=)
                //         console.table(projectArray[todo.value]) // same as pure 'todo'

                //         console.log(todo.value) // loops over the objects' 'value' that satisfy TRUE (eg. 1)
                //         console.log(projectArray[todo.value]['value']) // same as pure 'todo.value'

                //         console.log(projectArray[todoObj.value]['value']) // value of the clicked object (eg. 1)
                //         console.log(todoObj.value) // value of the clicked object (eg. 1)

                //         console.table(projectArray[todoObj.value]) // what i click on (object)
                //         console.table(todoObj) // what i click on (object)
                //         return true
                //     }
                // })
                
                projectArray = projectArray.filter(function(todo) {
                    if (todo.value != todoObj.value) {
                        // console.table(todo) // loops over objects (index) that satisfy TRUE (!=) LOOPS OTHER
                        // console.table(projectArray[todo.value]) // same as pure 'todo' LOOPS OTHER

                        console.log(todo.value) // loops over the objects' 'value' that satisfy TRUE (eg. 1) LOOPS OTHER
                        // console.log(projectArray[todo.value]['value']) // same as pure 'todo.value' LOOPS OTHER

                        // console.log(projectArray[todoObj.value]['value']) // value of the clicked object (eg. 1)
                        // console.log(todoObj.value) // value of the clicked object (eg. 1) CLICKED ONLY

                        // console.table(projectArray[todoObj.value]) // what i click on (object)
                        // console.table(todoObj) // what i click on (object) CLICKED ONLY
                        return true
                    }
                })

                // console.log(thisOne)
                console.table(projectArray)
            })

            //------------------------------------------------ DISPLAY TODO DETAILS
            newToDo.addEventListener('click', () => {
                NTDDesc.classList.toggle('displayBlock')
                NTDDue.classList.toggle('displayBlock')
                NTDPriority.classList.toggle('displayBlock')
                delBtn.classList.toggle('displayBlock')
            })

            //--------------------------------------------- ADD TODOS INTO ARRAY
            const todoObj = projectFactory(
                toDoTitleInput.value,
                deadlineInput.value,
                toDoDescInput.value,
                priorityInput.value
            )
            todoObj.value = num
            projectArray.push(todoObj)
            // console.log(projectArray[todoObj.value]['value'])
            console.table(projectArray)
            num++
        }

        formContainer.addEventListener('submit', onSubmit)
    
    
        //--------------------------------------------------------------
        formPopUp.style.display = "block";
        newToDoButton.setAttribute('disabled', '')
        toDoTitleInput.focus()

        formHeading.addEventListener('click', () => {
            // formPopUp.style.display = "none"
            formPopUp.remove()
            newToDoButton.disabled = false
            // formPopUp.classList.toggle('displayBlock')
        })
        
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