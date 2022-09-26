const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const exit = document.querySelector('#exit')
const total = document.querySelector('#total')

btn.addEventListener('click', function(e) {
    console.log(input.value + ' added in your')

    //exit.innerHTML += '<li>' + input.value + '</li>' 
    if (input.value === '') {
        return;
    }
    build_list(input.value)
    input.value = ''
})

function build_list(value) {
    console.log()

    const li = document.createElement('li')
    const btn_del = document.createElement('button')


    li.className = 'li'
    li.textContent = value

    btn_del.className = 'btn_del'
    btn_del.textContent = 'X'
    li.appendChild(btn_del)

    btn_del.addEventListener('click', function(e){
        console.log(li.innerText + ' was removed from your list')
        exit.removeChild(li)
    })

    exit.appendChild(li)
}
