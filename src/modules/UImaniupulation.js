export function displayMenu() {
    const main = document.querySelector("main#main")
    const taskContainer = document.querySelector(".taskContainer")
    main.classList.toggle("menuIsNotActive")
}

export function displayProjects(event) {
    const dropDown = document.querySelector(".dropDown")
    const caretSymbol = event.target.children[0]
    if (dropDown.style.display == "none") {
        dropDown.style.display = "block"
        caretSymbol.classList.toggle("fa-caret-down")
        caretSymbol.classList.toggle("fa-caret-up")
    } else {
        dropDown.style.display = "none"
        caretSymbol.classList.toggle("fa-caret-down")
        caretSymbol.classList.toggle("fa-caret-up")
    }
}