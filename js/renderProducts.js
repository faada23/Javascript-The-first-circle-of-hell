const container = document.querySelector("#products-container")

getProducts()

async function getProducts(){

    const response = await fetch('./js/products.json');
    const productsArr = await response.json();

    renderProducts(productsArr);
}

function renderProducts(productsArr){
    productsArr.forEach(element => {
        const productHTML = `<div class="col-md-6">
						<div class="card mb-4" data-id="${element.id}">
							<img class="product-img" src="img/roll/${element.image}" alt="">
							<div class="card-body text-center">
								<h4 class="item-title">${element.title}</h4>
								<p><small data-items-in-box class="text-muted">${element.itemsInBox}шт.</small></p>

								<div class="details-wrapper">
									<div class="items counter-wrapper">
										<div class="items__control" data-action="minus">-</div>
										<div class="items__current" data-counter>1</div>
										<div class="items__control" data-action="plus">+</div>
									</div>

									<div class="price">
										<div class="price__weight">${element.weight}г.</div>
										<div class="price__currency">${element.price} ₽</div>
									</div>
								</div>

								<button data-cart type="button" class="btn btn-block btn-outline-warning">+ в корзину</button>

							</div>
						</div>
					</div>
                    `;
        container.insertAdjacentHTML('beforeend', productHTML)
    });
}
