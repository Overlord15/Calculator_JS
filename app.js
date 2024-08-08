document.addEventListener('DOMContentLoaded', () => {
    const resultElement = document.getElementById("result");

    // Function that displays value
    function dis(val) { 
        resultElement.value += val; 
    }

    // Function that handles key presses
    function myFunction(event) { 
        const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/'];
        if (allowedKeys.includes(event.key)) {
            resultElement.value += event.key; 
        }
        if (event.key === 'Enter') {
            solve();
        }
    }

    // Function that evaluates the expression and returns result
    function solve() { 
        let x = resultElement.value; 
        try {
            let y = eval(x); 
            resultElement.value = y; 
        } catch (error) {
            resultElement.value = 'Error';
        }
    }

    // Function that clears the display
    function clr() { 
        resultElement.value = ""; 
    }

    // Attach event listeners
    document.querySelectorAll('.num-button').forEach(button => {
        button.addEventListener('click', () => {
            dis(button.dataset.num);
        });
    });

    document.querySelectorAll('.op-button').forEach(button => {
        button.addEventListener('click', () => {
            dis(button.dataset.op);
        });
    });

    document.getElementById('equals-button').addEventListener('click', solve);
    document.getElementById('clear-button').addEventListener('click', clr);

    // Handle keyboard input
    document.addEventListener('keydown', myFunction);
});
