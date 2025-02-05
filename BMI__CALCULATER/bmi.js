const form = document.querySelector('form')

form.addEventListener('submit' , function(e){
    e.preventDefault();


    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height ===''|| height < 0 || isNaN(height)){
        result.innerHTML = `plz give me in no form ${height}`;
    }else if(weight ===''|| weight < 0 || isNaN(weight)){
        result.innerHTML = `plz give me in no form ${weight}`;
    } else{
        const bmi =(weight/((height*height)/10000)).toFixed(2);

        // show the result of the bmi 
        result.innerHTML = `<span>${bmi}</span> `;
    }

    // result.innerHTML = `${height}`;
})