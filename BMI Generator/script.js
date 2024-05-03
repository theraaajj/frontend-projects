const form = document.querySelector('form')
form.addEventListener('submit', function(elem){
    elem.preventDefault()

    const hgt = parseInt(document.querySelector('#height').value)            // must select the innerhgt, weight ID Headers, and not before loop.. kyuki hme toh value chahie na
    // .value se input field ka value aagya
    const wgt = parseInt(document.querySelector('#weight').value)
    const res = document.querySelector('#results')

    // we add a few checks to reduce the load on our code.
    if(hgt === '' || hgt<=0 || isNaN(hgt)){
        res.innerHTML = `"Please give a valid height"` 
    }
    else if(wgt === '' || wgt<=0 || isNaN(wgt)){
        res.innerHTML = `Please give a valid weight`
    }
    else{
        const bmi = (wgt / ((hgt*hgt)/10000)).toFixed(2);
        // now we have to display this BMI in results. HOW?
    res.innerHTML = `<span>${bmi}</span>`
    }

    
});