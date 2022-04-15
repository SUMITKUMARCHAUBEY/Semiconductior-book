console.log('i am working')


let but=document.querySelector('#b1')
 but.addEventListener('click',()=>{
    h = 6.625*10e-35;
    f1=document.forms['for1']["f1"].value;
   console.log(f1*h);
   temp=document.getElementById("span1").innerText="E = "+f1*h+" J";
 } )
 
 let but2=document.querySelector('#b2')
 but2.addEventListener('click',()=>{
    h = 6.625*10e-35;
    f2=document.forms['for2']["f2"].value;
    wf=document.forms['for2']["wf"].value;
   console.log(f2*h-wf);
   temp=document.getElementById("span2").innerText="KE = "+ ((f2*h)-wf)+" J";
 } )

 let but3=document.querySelector('#b3')
 but3.addEventListener('click',()=>{
    h = 6.625*10e-35;
    p=document.forms['for3']["p"].value;
    console.log(h/p);
   temp=document.getElementById("span3").innerText="= "+h/p+" m";
 } )

 let but4=document.querySelector('#b4')
 but4.addEventListener('click',()=>{
    h = 6.625*10e-35;
    p1=document.forms['for4']["p1"].value;
    console.log(h/(4*3.14*p1));
   temp=document.getElementById("span4").innerText=">="+ h/(4*3.14*p1);
 } )

 let but5=document.querySelector('#b5')
 but5.addEventListener('click',()=>{
    h = 6.625*10e-35;
    p2=document.forms['for5']["p2"].value;
    console.log(h/(4*3.14*p2));
   temp=document.getElementById("span5").innerText=">="+ h/(4*3.14*p2);
 } )
 
 let but6=document.querySelector('#b6')
 but6.addEventListener('click',()=>{
    h = 1.054e-34;
    m=9.1e-31
    E=document.forms['for6']["E"].value;
    M=document.forms['for6']["M"].value;
    W=document.forms['for6']["W"].value;
    console.log(Math.sqrt(2*m*E)/h);
    console.log(M/h);
    console.log(2*3.14/W)
   temp=document.getElementById("span6").innerText="(1. Ans) "+ Math.sqrt(2*m*E)/h + "///// (2. Ans) "+ M/h +"///// (3. Ans) "+ 2*3.14/W;
 } )

 let but9=document.querySelector('#b9')
 but9.addEventListener('click',()=>{
    h = 1.054e-34;
    e=1.6e-19;
    u=8.85e-12
    n=document.forms['for9']["n"].value;
    rm=9.11e-31;

    console.log((-rm*e*e*e*e)/((4*3.14*u)*(4*3.14*u)*2*h*h*n*n));

   temp=document.getElementById("span9").innerText="En = "+(-rm*e*e*e*e)/((4*3.14*u)*(4*3.14*u)*2*h*h*n*n)+" eV";
 } )

 let but8=document.querySelector('#b8')
 but8.addEventListener('click',()=>{
    h = 6.625*10e-35/(2*3.14);
    e=1.6e-19;
    u=8.85e-12
    r=document.forms['for8']["r"].value;
    
    console.log(-(e*e)/(4*3.14*u*r));

   temp=document.getElementById("span8").innerText="V(r) = "+-(e*e)/(4*3.14*u*r)+" J";
 } )
 
 let but7=document.querySelector('#b7')
 but7.addEventListener('click',()=>{
    h = 6.625*10e-35/(2*3.14);
    e=1.6e-19;
    u=8.85e-12;
    m=9.1*10e-32;
    ne=document.forms['for7']["ne"].value;
    a=document.forms['for7']["a"].value;
    console.log((h*h*ne*ne*3.14*3.14)/(2*m*a*a));
   temp=document.getElementById("span7").innerText="E= "+(h*h*ne*ne*3.14*3.14)/(2*m*a*a)+" J";
 } )
 