const cards =
document.querySelectorAll(
'.product-card, .category-card'
);

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

});

cards.forEach((card)=>{
    observer.observe(card);
});

function buyNow(product){

    const links = {

        'AirPods Pro':
        'https://YOURSTORE.myshopify.com/cart/123456789:1',

        'Gray Nike Tech':
        'https://YOURSTORE.myshopify.com/cart/123456789:1',

        'White Nike Tech':
        'https://YOURSTORE.myshopify.com/cart/123456789:1',

        'SP5DER Hoodie':
        'https://YOURSTORE.myshopify.com/cart/123456789:1',

        'Le Male Elixir':
        'https://YOURSTORE.myshopify.com/cart/123456789:1'
	
	'Green SP5DER':
	'https://YOURSTORE.myshopify.com/cart/123456789:1',

	'Black SP5DER':
	'https://YOURSTORE.myshopify.com/cart/123456789:1',

	'Black/Pink P★NK':
	'https://YOURSTORE.myshopify.com/cart/123456789:1',

	'Baccarat Rouge 540':
	'https://YOURSTORE.myshopify.com/cart/123456789:1',

	'YSL Y Iced':
	'https://YOURSTORE.myshopify.com/cart/123456789:1',

	'Jean Paul Le Male':
	'https://YOURSTORE.myshopify.com/cart/123456789:1',

	'AirPod Pros':
	'https://YOURSTORE.myshopify.com/cart/123456789:1',

	'AirPods':
	'https://YOURSTORE.myshopify.com/cart/123456789:1',

    };

    window.open(
    links[product],
    '_blank'
    );
}