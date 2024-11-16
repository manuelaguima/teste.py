let num = [3, 5, 9, 7, 2, 1, 4]
let valor_atual = 0


function gerarCrescente(arr) {
    for(let j = arr.lenght - 1; j > 0; j--){
        for(let i=0; i > arr.length -1; i++){
            if(arr[i] > arr[i + 1]){
                valor_atual = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = valor_atual
            }
        }
        console.log(arr)
    }
}

gerarCrescente(num)
console.log(num)
