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
    titleInput.focus()

    const addTitleButton = document.createElement('button')
    addTitleButton.setAttribute('id', 'addTitleButton')
    addTitleButton.textContent = 'enter'
    card.append(addTitleButton)

    addTitleButton.addEventListener('click', () => {
        addTitle()
    })

    titleInput.addEventListener("keypress", function(event) {
        if (event.key === 'Enter') {
            addTitle()
        }
    })
    
    function addTitle() {
        let newTitle = document.createElement('h1')
        newTitle.innerText = titleInput.value
        card.prepend(newTitle)
        titleInput.remove()
        addTitleButton.remove()
    }

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
            // toDoSpace.append(newToDo)
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

            let editBtn = document.createElement('button')
            editBtn.textContent = 'EDIT'
            newToDo.append(editBtn)
            editBtn.style.display = "none";
            editBtn.setAttribute('value', `${num}`)

            editBtn.addEventListener('click', () => {
                let currentValue = todoObj.value
            
                console.log(editBtn.value)
                
                // console.log(currentValue)
                console.log(`num at edit click= ${num}`)
                num = currentValue
                console.log(`num changed= ${num}`)
                card.append(formPopUp)
                // num = currentNum
                
                console.log(`num after form append= ${num}`)
                // console.log(`currentNum after form append= ${currentNum}`)
                // console.log(todoObj.value)
                
                projectArray = projectArray.filter(function(todo) {
                    if (todo.value != todoObj.value) {
                        // console.log(todo.value)
                        return true
                    }
                })
                let thisOne = projectArray.filter(function(todo) {
                    if (todo.value == todoObj.value) {
                        return true
                    }
                })
                console.table(thisOne)
                newToDo.remove()
            })

            //------------------------------------------------ DISPLAY/TOGGLE TODO DETAILS ON CLICK
            newToDo.addEventListener('click', () => {
                NTDDesc.classList.toggle('displayBlock')
                NTDDue.classList.toggle('displayBlock')
                NTDPriority.classList.toggle('displayBlock')
                delBtn.classList.toggle('displayBlock')
                editBtn.classList.toggle('displayBlock')
            })

            //--------------------------------------------- ADD TODOS INTO ARRAY
            const todoObj = projectFactory(
                toDoTitleInput.value,
                deadlineInput.value,
                toDoDescInput.value,
                priorityInput.value
            )
            todoObj.value = num
            console.log(`num just before object is pushed into array = ${num}`)
            projectArray.push(todoObj)
            let ordered = projectArray.sort((a, b) => a.value - b.value);
            console.table(projectArray)

            let indexOfThisToDoObject = projectArray.indexOf(todoObj, 0)
            console.log(`index of this ${todoObj.value} num = ${indexOfThisToDoObject}`)

            toDoSpace.insertBefore(newToDo, toDoSpace.children[indexOfThisToDoObject + 1])
            // console.table(ordered);

            
            // function findHighestNum() { // as function
            const findHighestNum = (() => { // as a module
                const highestNum = projectArray
                highestNum.sort(function(a, b){return a.value-b.value});
                let lowest = highestNum[0]['value'];
                let highest = highestNum[highestNum.length-1]['value'];
                let stat = `highest = ${highest} || lowest = ${lowest}`
                return {
                    stat,
                    lowest,
                    highest,
                }
            })
            console.log(findHighestNum().stat)
            console.log(findHighestNum().highest)

            num = findHighestNum().highest

            // console.log(projectArray[todoObj.value]['value'])
            console.table(projectArray)
            num++
            console.log(`the next num value will be = ${num} -------->`)
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
        deleteProjectButton.setAttribute('disabled', '')
        deleteProjectValidation()
        // card.remove()
    })

    function deleteProjectValidation() {
        const delValidation = document.createElement('div')
        delValidation.setAttribute('id', 'delValidation')
        card.append(delValidation)
    
        const delQuestion = document.createElement('h4')
        delQuestion.textContent = 'DELETE PROJECT?'
        delValidation.append(delQuestion)
    
        const delYes = document.createElement('button')
        delYes.textContent = 'Yes'
        delValidation.append(delYes)

        delYes.addEventListener('click', () => {
            card.remove()
        })
    
        const delNo = document.createElement('button')
        delNo.textContent = 'No'
        delValidation.append(delNo)
        
        delNo.addEventListener('click', () => {
            delValidation.remove()
            deleteProjectButton.disabled = false
        })
    }


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