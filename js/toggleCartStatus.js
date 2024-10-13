function toggleCartStatus() {
    const orderForm = document.querySelector('#order-form')
    const cartWrapper = document.querySelector('.cart-wrapper')
    const cartEmtpy = document.querySelector('[data-cart-empty]')


    if(cartWrapper.children.length > 0){
        cartEmtpy.classList.add('none')
        orderForm.classList.remove('none')
        
    }
    else{
        cartEmtpy.classList.remove('none')
        orderForm.classList.add('none')
    }
}