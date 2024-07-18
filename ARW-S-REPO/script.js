```javascript
    document.getElementById('addPetButton').addEventListener('click', function() {
        const petContainer = document.createElement('div');
        petContainer.classList.add('pet');
        
        const petNameLabel = document.createElement('label');
        petNameLabel.setAttribute('for', 'petName');
        petNameLabel.textContent = 'Pet Name:';
        petContainer.appendChild(petNameLabel);
        
        const petNameInput = document.createElement('input');
        petNameInput.setAttribute('type', 'text');
        petNameInput.setAttribute('name', 'petName');
        petNameInput.classList.add('petName');
        petNameInput.required = true;
        petContainer.appendChild(petNameInput);
        
        const petValueLabel = document.createElement('label');
        petValueLabel.setAttribute('for', 'petValue');
        petValueLabel.textContent = 'Trade Value:';
        petContainer.appendChild(petValueLabel);
        
        const petValueInput = document.createElement('input');
        petValueInput.setAttribute('type', 'number');
        petValueInput.setAttribute('name', 'petValue');
        petValueInput.classList.add('petValue');
        petValueInput.required = true;
        petContainer.appendChild(petValueInput);
        
        document.getElementById('petsContainer').appendChild(petContainer);
    });
    
    document.getElementById('tradeForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const petNames = document.querySelectorAll('.petName');
        const petValues = document.querySelectorAll('.petValue');
        
        let totalValue = 0;
        let resultText = 'Trade Values:\n';
        
        petNames.forEach((petName, index) => {
            const petValue = parseFloat(petValues[index].value);
            totalValue += petValue;
            resultText += `${petName.value}: ${petValue.toFixed(2)}\n`;
        });
    
        const fakeTotalValue = calculateLossValue(totalValue);
        resultText += `Total Trade Value: ${fakeTotalValue}`;
        
        document.getElementById('result').innerText = resultText;
    });
    
    function calculateLossValue(value) {
        // Simple logic to ensure a loss: reduce the input value by 50%
        return (value * 0.5).toFixed(2);
    }
    ```