const new_alfb = [];
const new_istate = 0;
const new_endstate = 0;

const a1 = JSON.parse(localStorage.getItem('automata1'));
const a2 = JSON.parse(localStorage.getItem('automata2'));

const t1 = JSON.parse(localStorage.getItem('transiciones1').split(','));
const t2 = JSON.parse(localStorage.getItem('transiciones1').split(','));

var size_1 = a1.alfabeto.length;
var size_2 = a2.alfabeto.length;

console.log(size_2);

for(i = 0; i < size_1; i++){
    for(j = 0; j < size_2; j++){
        if(a1.alfabeto[i] == a2.alfabeto[j]){
            new_alfb.push(a2.alfabeto[j]);
        }
    }
}

new_endstate = a1.estadosAutomatas;