let but1=document.getElementById('b1');
console.log(but1);
but1.addEventListener('click', ()=>{
     n=document.forms['for1']["n"].value;
     a=document.forms['for1']["a"].value;
     v=document.forms['for1']["V"].value;
     N=6.0022e23;
     console.log((n*a)/(v*N));
     document.getElementById('span1').innerHTML="= "+(n*a)/(v*N)
})

let but2=document.getElementById('b2');
console.log(but2);
but2.addEventListener('click', ()=>{
     n1=document.forms['for2']["n1"].value;
     A=document.forms['for2']["A"].value;
     
     console.log(n1/A);
     document.getElementById('span2').innerHTML="= "+n1/A
})

let but3=document.getElementById('b3');
console.log(but3);
but3.addEventListener('click', ()=>{
     n2=document.forms['for3']["n2"].value;
     v1=document.forms['for3']["v1"].value;
     
     console.log(n2/v1);
     document.getElementById('span3').innerHTML="= "+n2/v1
})