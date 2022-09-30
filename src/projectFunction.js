import { add, isElement, remove } from 'lodash'
import pageLoad from './pageLoad'
// import createPopUpForm from './ToDoClass'

const projectFactory = (title, deadline, description, priority, checklist) => {
    return {title, deadline, description, priority, checklist}
}

let index = 0

const addNewProject = (() => {
    const card = document.createElement('div')
    card.setAttribute('class', 'card')
    pageLoad.content.append(card)

    const titleBox = document.createElement('div')
    titleBox.setAttribute('id', 'titleBox')
    card.append(titleBox)

    const titleInput = document.createElement('input')
    titleInput.setAttribute('type', 'text')
    titleInput.setAttribute('placeholder', 'set project title')
    titleBox.append(titleInput)
    titleInput.focus()

    const addTitleButton = document.createElement('button')
    addTitleButton.setAttribute('id', 'addTitleButton')
    addTitleButton.innerHTML = '&#8629;'
    titleBox.append(addTitleButton)

    const addTitleButtonFunction = (() => {
        addTitle()
    })
    addTitleButton.addEventListener('click', addTitleButtonFunction)

    const titleInputFunction = ((event) => {
        if (event.key === 'Enter') {
            addTitle()
        }
    })
    titleInput.addEventListener("keypress", titleInputFunction)
    
    const addTitle = (() => {
        let newTitle = document.createElement('h1')
        newTitle.innerText = titleInput.value
        titleBox.prepend(newTitle)
        titleInput.remove()
        addTitleButton.remove()
        addChangeTitleButton()
    })

    const changeTitleButton = document.createElement('button')
    changeTitleButton.setAttribute('id', 'changeTitleButton')
    changeTitleButton.textContent = 'edit title'
    titleBox.append(changeTitleButton)
    changeTitleButton.style.display = "none";

    const changeTitleButtonFunction = (() => {
        titleBox.prepend(titleInput)
        titleBox.querySelector('h1').remove()
        titleBox.insertBefore(addTitleButton, titleBox.children[1])
        changeTitleButton.style.display = "none"
        titleInput.focus()
    })
    changeTitleButton.addEventListener('click', changeTitleButtonFunction)

    const addChangeTitleButton = (() => {
        changeTitleButton.style.display = "block";
    })

    const toDoSpace = document.createElement('div')
    toDoSpace.setAttribute('class', 'toDoSpace')
    card.append(toDoSpace)

    const newToDoButton = document.createElement('button')
    newToDoButton.textContent = 'new item +'
    newToDoButton.setAttribute('class', 'newToDoButton')
    toDoSpace.append(newToDoButton)

    // let newToDo = ''
    // let addToDoContent = ''
    let projectArray = []
    let num = 0

    index++
    let thisIndex = index
    const newToDoButtonFunction = (() => {
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

        const checklistLabel = document.createElement('label')
        checklistLabel.setAttribute('for', 'checklist')
        checklistLabel.innerText = 'Checklist'
        formContainer.append(checklistLabel)

        const checklistInput = document.createElement('input')
        checklistInput.setAttribute('type', 'checkbox')
        checklistInput.setAttribute('name', 'checklist')
        formContainer.append(checklistInput)
    
        const submitButton = document.createElement('input')
        submitButton.setAttribute('type', 'submit')
        formContainer.append(submitButton)
        let newToDo = ''

        //----------------------------------------------- SUBMIT FORM

        const onSubmit = ((el) => {
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

            let NTDChecklist = document.createElement('input')
            NTDChecklist.setAttribute('type', 'checkbox')
            let checkBOX = false
            if (checklistInput.checked == true) {
                NTDChecklist.checked = true
                checkBOX = true
            }
            // NTDChecklist.disabled = true
            NTDChecklist.style.pointerEvents = 'none'
            newToDo.prepend(NTDChecklist)
            // NTDChecklist.style.display = "none";

            let toDoButtonsContainer = document.createElement('div')
            toDoButtonsContainer.setAttribute('id', 'toDoButtonsContainer')
            newToDo.append(toDoButtonsContainer)
            toDoButtonsContainer.style.display = "none";

            let delBtn = document.createElement('button')
            delBtn.textContent = 'DELETE'
            toDoButtonsContainer.append(delBtn)
            delBtn.style.display = "none";
            delBtn.setAttribute('value', `${num}`)
            delBtn.setAttribute('id', `delBtn`)

            const delBtnFunction = (() => {
                newToDo.remove()
                
                projectArray = projectArray.filter(function(todo) {
                    if (todo.value != todoObj.value) {
                        console.log(todo.value) // loops over the objects' 'value' that satisfy TRUE (eg. 1) LOOPS OTHER
                        return true
                    }
                })

                // console.log(thisOne)
                console.table(projectArray)
            })
            delBtn.addEventListener('click', delBtnFunction)

            let editBtn = document.createElement('button')
            editBtn.textContent = 'EDIT'
            toDoButtonsContainer.append(editBtn)
            editBtn.style.display = "none";
            editBtn.setAttribute('value', `${num}`)
            editBtn.setAttribute('id', `editBtn`)

            const editBtnFunction = (() => {
                let currentValue = todoObj.value
            
                num = currentValue
                // console.log(`num changed= ${num}`)
                card.append(formPopUp)
                toDoTitleInput.focus()
                
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
                newToDoButton.disabled = true
            })
            editBtn.addEventListener('click', editBtnFunction)

            //------------------------------------------------ DISPLAY/TOGGLE TODO DETAILS ON CLICK
            const newToDoFunction = (() => {
                NTDDesc.classList.toggle('displayBlock')
                NTDDue.classList.toggle('displayBlock')
                NTDPriority.classList.toggle('displayBlock')
                // NTDChecklist.classList.toggle('displayBlock')
                toDoButtonsContainer.classList.toggle('displayFlex')
                delBtn.classList.toggle('displayBlock')
                editBtn.classList.toggle('displayBlock')
            })
            newToDo.addEventListener('click', newToDoFunction)

            //--------------------------------------------- ADD TODOS INTO ARRAY
            const todoObj = projectFactory(
                toDoTitleInput.value,
                deadlineInput.value,
                toDoDescInput.value,
                priorityInput.value,
                checkBOX
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
            // console.log(findHighestNum().highest)

            num = findHighestNum().highest

            // console.log(projectArray[todoObj.value]['value'])
            console.table(projectArray)
            num++
            console.log(`the next num value will be = ${num} --------> V2.0`)
        })

        formContainer.addEventListener('submit', onSubmit)    
    
        //--------------------------------------------------------------
        formPopUp.style.display = "block";
        newToDoButton.setAttribute('disabled', '')
        toDoTitleInput.focus()

        const formHeadingFunction = (() => {
            // formPopUp.style.display = "none"
            if (projectArray === '') {
                // console.log('EMPTY ARRAY')
                formPopUp.remove()
                newToDoButton.disabled = false
            } else if (toDoTitleInput.value != '' || toDoDescInput.value != '' || priorityInput.value != '') {
                // console.log('NON-EMPTY INPUT')
                submitButton.click()
            } else {
                // console.log('EMPTY INPUT')
                // submitButton.click()
                formPopUp.remove()
                newToDoButton.disabled = false
            }
            // formPopUp.classList.toggle('displayBlock')
        })
        formHeading.addEventListener('click', formHeadingFunction)

    })
    newToDoButton.addEventListener('click', newToDoButtonFunction)

    const deleteProjectButton = document.createElement('button')
    deleteProjectButton.innerHTML = '&#10060;'
    deleteProjectButton.setAttribute('class', 'deleteProjectButton')
    card.append(deleteProjectButton)

    const deleteProjectButtonFunction = (() => {
        deleteProjectButton.setAttribute('disabled', '')
        deleteProjectValidation()
        // card.remove()
    })
    deleteProjectButton.addEventListener('click', deleteProjectButtonFunction)

    const deleteProjectValidation = (() => {
        const delValidation = document.createElement('div')
        delValidation.setAttribute('id', 'delValidation')
        card.append(delValidation)
    
        const delQuestion = document.createElement('h4')
        delQuestion.textContent = 'DELETE PROJECT?'
        delValidation.append(delQuestion)

        const delValButtons = document.createElement('div')
        delValButtons.setAttribute('id', 'delValButtons')
        delValidation.append(delValButtons)
    
        const delYes = document.createElement('button')
        delYes.textContent = 'DELETE'
        delValButtons.append(delYes)

        delYes.addEventListener('click', () => {
            card.remove()
        })
    
        const delNo = document.createElement('button')
        delNo.textContent = 'KEEP'
        delValButtons.append(delNo)
        
        delNo.addEventListener('click', () => {
            delValidation.remove()
            deleteProjectButton.disabled = false
        })
    })

    return {
        card,
        // newToDo,
        toDoSpace,
    }
});

//-------------------------------------------------------- ADD NEW PROJECT
const addNewProjectCard = (() => {
    const button = document.getElementById('newProject')
    button.addEventListener('click', () => {
        addNewProject()
    })
})

export default addNewProject;
export {addNewProjectCard};