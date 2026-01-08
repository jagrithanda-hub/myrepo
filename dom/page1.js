let h2 = document.querySelectorAll("div")
console.log(h2);
h2[0].innerText = "This is the first div"
h2[1].innerText = "This is the second div"
h2[2].innerText = "This is the third div"
for(let i=0;i<h2.length;i++){
    h2[i].innerText = "this is div number" + (i+1)
}