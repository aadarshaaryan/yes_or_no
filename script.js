let p = document.getElementById("p")

function calc() {
    let time = Date.now()
    let text = document.getElementById("question").value
    let sum = 0

    for(let i of text) {
        sum += i.charCodeAt(0)
    }

    sum += time;

    if(sum%2 == 0){
        p.innerHTML = "YES"
        
    }else{
        p.innerHTML = "NO"
    }
}
