var count = document.getElementById("count");
var value=1
var add = document.getElementById("add");
var sub = document.getElementById("sub");
var reset = document.getElementById("reset");

add.addEventListener("click", () => {
    count.innerHTML++;
});

sub.addEventListener("click", () => {
    if(count.innerHTML > 1){
        count.innerHTML--;
    }
    else {
        alert('Menfiye Dusur')
    }
});

reset.addEventListener("click", () => {
    count.innerHTML=0;
});