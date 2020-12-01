document.addEventListener('DOMContentLoaded', function() {
    function after() {
        let elemento1 = document.querySelector(".popup")
        elemento1.classList.remove("hidden")
        let elemento2 = document.querySelector(".body")
        elemento2.classList.add("opacity")
    }
    setTimeout(after, 15000)
    
})
