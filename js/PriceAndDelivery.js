function CheckPriceAndDelivery(){   
    const cards = document.querySelectorAll('.cart-item')
    let totalprice = 0;
    let deliveryCost = 0;
    
    cards.forEach(card => {
        const price = card.querySelector('.price__currency')
        const count = card.querySelector('[data-counter]')
        totalprice += parseInt(price.innerText) * parseInt(count.innerText)
    })
    
    document.querySelector('.total-price').innerText = totalprice

    if(totalprice == 0){
        document.querySelector('.delivery-cost').innerText = "0₽";
        document.querySelector('.delivery-cost').classList.remove('free')
        deliveryCost = 0
    }
    else if(totalprice>=1000){
        document.querySelector('.delivery-cost').innerText = "бесплатнo";
        document.querySelector('.delivery-cost').classList.add('free')
        deliveryCost = 0
    }
    else {
        document.querySelector('.delivery-cost').innerText = "200₽"
        document.querySelector('.delivery-cost').classList.remove('free')
        deliveryCost = 200
    }

    document.querySelector('.total-price').innerText = totalprice + deliveryCost
}