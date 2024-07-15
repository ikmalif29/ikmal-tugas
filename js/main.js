fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => {
        const featuredContainer = document.querySelector('.product-container');

        // Display the first 4 products as featured products
        products.slice(0, 4).forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';

            const img = document.createElement('img');
            img.src = product.image;
            img.alt = product.title;

            const title = document.createElement('h3');
            title.textContent = product.title;

            const price = document.createElement('p');
            price.textContent = `$${product.price}`;

            const category = document.createElement('p');
            category.textContent = product.category;

            card.appendChild(img);
            card.appendChild(title);
            card.appendChild(price);
            card.appendChild(category);

            featuredContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching products:', error));
