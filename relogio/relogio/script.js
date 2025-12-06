let relogio = document.getElementById("horario")

console.log("Testando conexão")

function atualizarRelogio(){
    let dataatual = new Date();
    // console.log(dataatual)
    let hora = dataatual.getHours().toString().padStart(2, "0")
    let minuto = dataatual.getMinutes().toString().padStart(2, "0")
    let segundo = dataatual.getSeconds().toString().padStart(2, "0")
    let horario = hora + ":" +  minuto + ":" + segundo 
    // console.log(horario)

    relogio.innerText = horario
}

setInterval(atualizarRelogio, 1000 )

atualizarRelogio()

let cronometro = document.getElementById("cronometro")
let iniciar = document.getElementById("iniciar")
let parar = document.getElementById("parar")
let zerar = document.getElementById("zerar")

parar.style.display = "none"

let ativo = false

let horarioCronometro = [0, 0 , 0]
function atualizarCronometro(){
    console.log("teste2")
    horarioCronometro[2]++;

    if(horarioCronometro[2] == 60){
        horarioCronometro[2] = 0
        horarioCronometro [1]++;
    }
    if(horarioCronometro[1] == 60){
        horarioCronometro[1] = 0
        horarioCronometro [0]++;
    }
    
    cronometro.innerText = horarioCronometro[0].toString().padStart(2, "0") + ":" + horarioCronometro[1].toString().padStart(2, "0") + ":" + horarioCronometro[2].toString().padStart(2, "0") 
}

let id 
iniciar.addEventListener("click", ()=>{

    if(ativo == false){
    console.log("teste")
    id = setInterval(atualizarCronometro, 1000)
    ativo = true
    parar.style.display = "inline"
    }
})

parar.addEventListener("click", ()=>{
    clearInterval(id)
    ativo = false
})

zerar.addEventListener("click", ()=>{
    horarioCronometro= [0, 0, 0]
    cronometro.innerText = horarioCronometro[0].toString().padStart(2, "0") + ":" + horarioCronometro[1].toString().padStart(2, "0") + ":" + horarioCronometro[2].toString().padStart(2, "0") 
})

