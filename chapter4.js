let concentration = [];
let temper = [];


function intrinsic() {
    console.log("hello world");
    let dos = document.getElementById("densityOfState").value;
    let temp = document.getElementById("temperature").value;
    let fermi = document.getElementById("fermi").value;
    let cond = document.getElementById("conduction").value;
    document.getElementById("screen").value = dos * Math.exp((fermi - cond) / (0.026 * temp / 300));

    concentration.push(document.getElementById("screen").value);

    temper.push(document.getElementById("temperature").value);


}


let myChart = document.getElementById("myChart").getContext('2d');

new Chart("myChart", {
    type: "line",
    data: {
        labels: temper,
        datasets: [{
            backgroundColor: "blue",
            borderColor: "rgba(0,0,0,0.1)",
            data: concentration,
        }]
    },

});