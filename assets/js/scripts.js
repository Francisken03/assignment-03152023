// var resultContainer = document.getElementById('resultLoader');
// var resultContainer = document.getElementById('loadedImg');
var resultContainer2 = document.getElementById('resultLoader').querySelector('img')



// document.querySelectorAll('button').forEach( element => {
//     element.addEventListener('click', function () {
//         resultContainer.innerHTML = this.innerHTML

//     });
// });



// console.log("This is the resultContainer before the function : " + resultContainer.src)
document.querySelectorAll('button').forEach( element => {
    element.addEventListener('click', function () {
        resultContainer2.setAttribute('id', 'loadedImg');
        resultContainer2.src = element.querySelector("img").src
        console.log("This is the image src : " + element.querySelector("img").src)
        

    });
});

