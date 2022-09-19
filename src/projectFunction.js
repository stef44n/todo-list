import { add } from 'lodash'
import pageLoad from './pageLoad'

const projectFactory = (title, deadline, description, priority) => {
    return {title, deadline, description, priority}
}

function addNewProject() {
    const card = document.createElement('div')
    card.setAttribute('class', 'card')
    pageLoad.content.append(card)

    const titleInput = document.createElement('input')
    titleInput.setAttribute('type', 'text')
    card.append(titleInput)

    const addTitleButton = document.createElement('button')
    addTitleButton.setAttribute('id', 'addTitleButton')
    addTitleButton.textContent = 'enter'
    card.append(addTitleButton)

    addTitleButton.addEventListener('click', () => {
        let newTitle = document.createElement('h1')
        newTitle.innerText = titleInput.value
        card.append(newTitle)
        titleInput.remove()
        addTitleButton.remove()
    })

    // return {card}
};

function addNewProjectCard() {
    const button = document.getElementById('newProject')
    button.addEventListener('click', () => {
        addNewProject()
    })
}

export default addNewProject;
export {addNewProjectCard};