
/*const BtnMinus = document.querySelector('[data-action="minus"]')
const BtnPlus = document.querySelector('[data-action="plus"]')
const Counter = document.querySelector('[data-counter]')

BtnMinus.addEventListener('click',() => {
        if(parseInt(Counter.innerText) > 1) Counter.innerText = (Number)(Counter.innerText) - 1
    })

BtnPlus.addEventListener('click', () => {
    if(parseInt(Counter.innerText) < 15) Counter.innerText = (Number)(Counter.innerText) + 1
})*/

window.addEventListener('click', (event) => {

    const target = event.target.dataset.action;

    if(target != undefined) {

        const counter_wrapper = event.target.closest('.counter-wrapper')
        
        const counter = counter_wrapper.querySelector('[data-counter]')

        if(target == 'plus') {
            if(parseInt(counter.innerText) < 15){
                counter.innerText = (Number)(counter.innerText) + 1
            }
        }
        if(target == 'minus') {
            if(parseInt(counter.innerText) > 1){ 
                counter.innerText = (Number)(counter.innerText) - 1
            }
            else if(event.target.closest('.cart-item') != null && counter.innerText == 1){ 
                event.target.closest('.cart-item').remove();
                toggleCartStatus();
            }
        } 
        
        CheckPriceAndDelivery()
    }
})
