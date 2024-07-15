document.addEventListener('DOMContentLoaded', () => {
    const product = JSON.parse(localStorage.getItem('product'));
    const container = document.querySelector('.product-detail');

    if (product) {
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

        const description = document.createElement('p');
        description.textContent = product.description;

        card.appendChild(img);
        card.appendChild(titleProduct);
        card.appendChild(price);
        card.appendChild(category);
        card.appendChild(description);

        container.appendChild(card);
    } else {
        container.textContent = 'No product selected.';
    }
});
