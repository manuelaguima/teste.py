let num = [3, 5, 9, 7, 10, 11];

function decrescente(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] < arr[i + 1]) {
                let valor_atual = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = valor_atual;
            }
        }
    }
}

decrescente(num);
console.log(num);
