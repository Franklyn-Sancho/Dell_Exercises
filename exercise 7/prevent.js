//Função do clique do botão
function clickButton() {
    document.querySelector('.btn-wrapper').click()
}

button.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()
    clickButton()
})

//we can false retorn too

button.addEventListener('click', (event) => {
    clickButton()
    return false
})


//jquery
$('.btn-wrapper').click(function(event) {
    event.preventDefault()
    event.stopPropagation()

})

//we can return false
