fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => {
        const container = document.querySelector('.big-container');

        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';

            const img = document.createElement('img');
            img.src = product.image;
            img.alt = product.title;

            const titleProduct = document.createElement('h3');
            titleProduct.textContent = product.title;

            const price = document.createElement('p');
            price.textContent = `$${product.price}`;

            const category = document.createElement('p');
            category.textContent = product.category;

            card.appendChild(img);
            card.appendChild(titleProduct);
            card.appendChild(price);
            card.appendChild(category);

            container.appendChild(card);

            card.addEventListener("click", () => {
                localStorage.setItem('product', JSON.stringify(product));
                window.location.href = "./detail-product.html";
            });
        });
    })
.catch(error => console.error('Error fetching products:', error));
