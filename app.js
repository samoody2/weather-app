var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue');
var ame = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click',function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=`+inputValue.value+`&units=imperial&appid=bbdb631e430c224015c0a59c0ac37d9e`)
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];

        ame.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;

    })

.catch(err => alert("Wrong Zipcode."))

})

