let b1=document.getElementById('b1');
b1.addEventListener('click',()=>{
    v=document.forms['form1']["v"].value;
    e=-1.6e-19;
    console.log(e*v);
    
    document.getElementById("ans1").innerHTML="= "+e*v;
})

let b2=document.getElementById('b2');
b2.addEventListener('click',()=>{
    vd=document.forms['form2']["vd"].value;
    e=1.6e-19;
    console.log(e*vd);
    
    document.getElementById("ans2").innerHTML="= "+e*vd;
})

let b3=document.getElementById('b3');
b3.addEventListener('click',()=>{
    vd1=document.forms['form3']["vd1"].value;
    e=1.6e-19;
    console.log(e*vd1);
    
    document.getElementById("ans3").innerHTML="= "+e*vd1;
})

let b4=document.getElementById('b4');
b4.addEventListener('click',()=>{
    E=document.forms['form4']["e"].value;
    e=1.6e-19;
    console.log(e*E);
    
    document.getElementById("ans4").innerHTML="= "+e*E;
})

let b5=document.getElementById('b5');
b5.addEventListener('click',()=>{
    u=document.forms['form5']["u"].value;
    e1=document.forms['form5']["e1"].value;
    console.log(e1*u);
    
    document.getElementById("ans5").innerHTML="= "+e1*u;
})

let b6=document.getElementById('b6');
b6.addEventListener('click',()=>{
    u1=document.forms['form6']["u1"].value;
    e2=document.forms['form6']["e2"].value;
    console.log(e2*u1);
    
    document.getElementById("ans6").innerHTML="= "+e2*u1;
})

let b7=document.getElementById('b7');
b7.addEventListener('click',()=>{
    u2=document.forms['form7']["u2"].value;
    e3=document.forms['form7']["e3"].value;
    d=document.forms['form7']["d"].value;
    e=-1.6e-19;
    console.log(e*e3*u2*d);
    
    document.getElementById("ans7").innerHTML="= "+e3*u2*e*d;
})

let b8=document.getElementById('b8');
b8.addEventListener('click',()=>{
m=document.forms['form8']["m"].value;
e4=document.forms['form8']["e4"].value;
t=document.forms['form8']["t"].value;
e=-1.6e-19;
console.log(e*e4*t/m);

document.getElementById("ans8").innerHTML="= "+e4*t*e/m;
})

let b9=document.getElementById('b9');
b9.addEventListener('click',()=>{
m1=document.forms['form9']["m1"].value;
e5=document.forms['form9']["e5"].value;
t1=document.forms['form9']["t1"].value;
e=-1.6e-19;
console.log(0.5*e*e5*t1/m1);

document.getElementById("ans9").innerHTML="= "+0.5*e5*t1*e/m1;
})

let b10=document.getElementById('b10');
b10.addEventListener('click',()=>{
m2=document.forms['form10']["m2"].value;
t2=document.forms['form10']["t2"].value;
e=1.6e-19;
console.log(e*t2/m2);

document.getElementById("ans10").innerHTML="= "+t2*e/m2;
})

let b11=document.getElementById('b11');
b11.addEventListener('click',()=>{
m3=document.forms['form11']["m3"].value;
t3=document.forms['form11']["t3"].value;
e=-1.6e-19;
console.log(e*t3/m3);

document.getElementById("ans11").innerHTML="= "+t3*e/m3;
})

let b12=document.getElementById('b12');
b12.addEventListener('click',()=>{
c=document.forms['form12']["c"].value;
e6=document.forms['form12']["e6"].value;
console.log(e6*c);

document.getElementById("ans12").innerHTML="= "+c*e6;
})

let b13=document.getElementById('b13');
b13.addEventListener('click',()=>{
ue3=document.forms['form13']["ue3"].value;
uh3=document.forms['form13']["uh3"].value;
n=document.forms['form13']["n"].value;
p=document.forms['form13']["p"].value;
e=-1.6e-19;
console.log(1/(e*(ue3*n+uh3*p)));

document.getElementById("ans13").innerHTML="= "+1/(e*(ue3*n+uh3*p));
})

let b14=document.getElementById('b14');
b14.addEventListener('click',()=>{
a=document.forms['form14']["a"].value;
d1=document.forms['form14']["d1"].value;
m4=document.forms['form14']["m4"].value;

e=-1.6e-19;
console.log(e*m4*(d1-a));

document.getElementById("ans14").innerHTML="= "+e*m4*(d1-a);
})