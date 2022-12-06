const menuIcon = document.querySelector(".menuIcon")

menuIcon.addEventListener("click",()=>{
    const main = document.querySelector("main#main")
    const taskContainer = document.querySelector(".taskContainer")
    console.log(taskContainer)
    main.classList.toggle("menuIsNotActive")
})