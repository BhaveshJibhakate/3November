
function generateFibonacci(length) {
    const fibonacci = [];
    for (let i = 0; i < length; i++) {
        if (i === 0) {
            fibonacci.push(0);
        } else if (i === 1) {
            fibonacci.push(1);
        } else {
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        }
    }
    return fibonacci;
}

function renderBarGraph(fibonacci) {
    const barGraph = document.getElementById('barGraph');
    barGraph.innerHTML = ''; 

    fibonacci.forEach(num => {
        
        const barContainer = document.createElement('div');
        barContainer.classList.add('bar');
       
        const bar = document.createElement('div');
        bar.style.height = `${num * 5}px`; 
        barContainer.appendChild(bar);
                  
        const label = document.createElement('div');
        label.classList.add('label');
        label.textContent = num; 
        barContainer.appendChild(label);

        barGraph.appendChild(barContainer);
              
    });
}

const lengthInput = document.getElementById('lengthInput');
const removeInput = document.getElementById('removeInput');
const removeButton = document.getElementById('removeButton');
let fibonacci = [];

lengthInput.addEventListener('input', () => {
    const length = parseInt(lengthInput.value);
    fibonacci = generateFibonacci(length);
    renderBarGraph(fibonacci);
});

removeButton.addEventListener('click', () => {
    const elementToRemove = parseInt(removeInput.value);
    if (!fibonacci.includes(elementToRemove)) {
        alert(`Element ${elementToRemove} not found in the series.`); 
        } else
         {
        fibonacci = fibonacci.filter(num => num !== elementToRemove);
        renderBarGraph(fibonacci);
    }
});
