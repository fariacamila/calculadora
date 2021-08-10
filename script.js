function tabuada(){
    var num = document.querySelector('#numero')
    var tab = document.querySelector('#selecttabuada')
    
    if (num.value.length == 0)
    {
        alert('Por favor digite um numero!')
    }
    else
    {
        var n = Number(num.value)
        var c = 1
        while (c <= 10){
            var item = document.createElement('option')//createElement cria um elemento no HTML
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}