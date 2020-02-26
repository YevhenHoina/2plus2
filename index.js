window.addEventListener('load', function () {
    let element = document.createElement('input');
    element.id = 'input1';
    element.type = 'text';
    document.body.appendChild(element);

    element = document.createElement('input');
    element.id = 'input2';
    element.type = 'text';
    document.body.appendChild(element);

    let button = document.createElement('button');
    button.innerText = 'Посчитать';
    button.id = 'button'
    document.body.appendChild(button);
    button.addEventListener('click', buttonHandler);
})

function buttonHandler() {
    for(let i = 3; i < 6; i++){
        if (document.body.childNodes[i].id === '') {
            document.body.removeChild(document.body.childNodes[i]);
        }
    }
    if (document.body.querySelector('#result') !== null) document.body.removeChild(document.body.lastChild);


    let firstInput = document.querySelector('#input1');
    let secondInput = document.querySelector('#input2');
    let button = document.querySelector('#button');
    let resultContainer = document.createElement('div')
    
    let firstError = document.createElement('div');
    firstError.className = 'error-message';
    firstError.innerText = 'Это не число';

    let secondError = document.createElement('div');
    secondError.className = 'error-message';
    secondError.innerText = 'Это не число';
    
    let isCountable = true;
    if (isNaN(firstInput.value)) {    
        document.body.insertBefore(firstError, secondInput)
        isCountable = false;
    }
    if (isNaN(secondInput.value)){
        document.body.insertBefore(secondError, button)
        isCountable = false;
    }
    if (isCountable) {
        let result = document.createElement('div');
        result.id = 'result'
        result.innerText = String(parseInt(firstInput.value) + parseInt(secondInput.value));
        document.body.appendChild(result);
        console.log(firstInput.value)
    }
    


}

// button.addEventListener('click', function(event) {
//     let numberTwo = input2.value;

//     if (isNaN(input1.value)) {
        
//         document.body.appendChild(divError);
//         document.body.appendChild(new divError);
//     }
// })