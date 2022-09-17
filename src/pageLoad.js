export const pageLoad = (() => {
    const mainContainer = document.createElement('div')
    mainContainer.setAttribute('id', 'mainContainer')
    document.body.append(mainContainer)

    const header = document.createElement('header')
    header.textContent = 'ToDo App'
    mainContainer.append(header)
    
    const mainContent = document.createElement('div')
    mainContent.setAttribute('id', 'mainContent')
    mainContainer.append(mainContent)

    const sidebar = document.createElement('div')
    sidebar.setAttribute('id', 'sidebar')
    mainContent.append(sidebar)

    const content = document.createElement('div')
    content.setAttribute('id', 'content')
    mainContent.append(content)

    const footer = document.createElement('footer')
    footer.setAttribute('id', 'footer')
    mainContainer.append(footer)
})();