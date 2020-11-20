document.addEventListener('DOMContentLoaded', function() {
    function before() {
    }

    function after() {
        a = document.querySelector('p')
        a.innerHTML = 'A viagem do seu Aumigo foi finalizada! Clique aqui para avaliar o seu cãotorista'
    }
    a = document.querySelector('a')

    a.addEventListener('click', function() {
        before()
        setTimeout(after, 1)
    })
})
