const cartWrapper = document.querySelector(".cart-wrapper");

window.addEventListener('click',(event) => {
    if(event.target.hasAttribute('data-cart')) {
        const card = event.target.closest('.card')
    

        const productInfo ={
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            price: card.querySelector('.price__currency').innerText,
            weight: card.querySelector('.price__weight').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            counter : card.querySelector('[data-counter]').innerText
        }

        const cardChecker = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        if(cardChecker == null){

        cardItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src=${productInfo.imgSrc} alt="">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${productInfo.title}</div>
										<div class="cart-item__weight">${productInfo.itemsInBox}/${productInfo.weight}</div>

										<!-- cart-item__details -->
										<div class="cart-item__details">

											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter="">${productInfo.counter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>

											<div class="price">
												<div class="price__currency">${productInfo.price}</div>
											</div>

										</div>
										<!-- // cart-item__details -->

									</div>
								</div>
							</div>`;
        cartWrapper.insertAdjacentHTML('beforeend', cardItemHTML)
        }
        else{
            cardChecker.querySelector('[data-counter]').innerText = Number(cardChecker.querySelector('[data-counter]').innerText) + Number(productInfo.counter)
        }

        card.querySelector('[data-counter]').innerText = 1;

        CheckPriceAndDelivery()
        toggleCartStatus()
    }
})