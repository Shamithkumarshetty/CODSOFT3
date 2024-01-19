function insert(num){
        document.getElementById("calc").value += num;
}

function calculate(){
    let a = document.getElementById("calc").value;
    document.getElementById("calc").value = eval(a);
}

function clearall() {
    document.getElementById("calc").value = ' ';

}