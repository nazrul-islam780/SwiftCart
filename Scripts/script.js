const loadCategories = () => {
    // console.log('Here I got bruh')
    fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(data => displayCategory(data))
}

const loadAllProducts = () => {

    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => displayAllProducts(data))
}

const loadProductsByCategory = category => {
    // const url = `https://fakestoreapi.com/products/category/${category}`
    const test = encodeURIComponent(category)
    // console.log(test);
    const url = `https://fakestoreapi.com/products/category/${category}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayProductsByCategory(data));
}

const loadProductDetails = (id) => {
    // console.log(id)
    const url = `https://fakestoreapi.com/products/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayProductDetails(data))
}


const displayProductDetails = (data) => {
    const productDetails = document.getElementById('product-details')
    productDetails.innerHTML = `<div class="w-full md:w-1/2 flex  p-4 justify-between gap-4 items-center">
                        <img src="${data.image}" alt="Fjallraven Backpack"
                            class="w-full h-full object-contain rounded-lg">
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col py-12  ">

                        <span class="badge bg-[#E0E7FF] text-primary rounded-xl">${data.category}</span>
                        <h2 class="text-3xl font-bold mt-3 mb-3"
                            title="${data.title}">
                            ${data.title}
                            </h2>
                        <p class="text-primary font-bold text-lg mb-3">$${data.price}</p>
                        <span><i class="fa-solid fa-star text-yellow-500"></i> ${data.rating.rate}
                            (${data.rating.count})</span>
                        <p class="text-gray-600 text-lg mb-4 line-clamp-5 mt-4" title="${data.description}">
                            ${data.description}
                        </p>
                        <div class="flex flex-col sm:flex-row gap-3 mt-8">
                            <button class="btn btn-primary w-full sm:w-auto">Add to Cart</button>
                            <button class="btn btn-outline w-full sm:w-auto">Buy Now</button>
                        </div>
                    </div>`
    document.getElementById('product_modal').showModal();
}

const displayProductsByCategory = (products) => {
    const productsContainer = document.getElementById('productsContainer')
    productsContainer.innerHTML = '';

    for (let product of products) {
        // console.log(product)
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `<div class="w-auto  border-1 border-gray-100 rounded-lg">
                <div class="bg-[#E6E7EB] rounded-t-lg py-4">
                    <img class="w-auto mx-auto h-[300px]"
                        src="${product.image}" alt="">
                </div>
                <div class="py-4 px-6">
                    <div class="flex justify-between pb-3">
                        <span class="badge bg-[#E0E7FF] text-primary rounded-xl">${product.category}</span>
                        <span><i class="fa-solid fa-star text-yellow-500"></i> ${product.rating.rate} (${product.rating.count})</span>
                    </div>
                    <h2 class="text-xl text-left font-semibold">${product.title}</h2>
                    <div class="price text-xl font-bold pt-2">
                        <span>$${product.price}</span>
                    </div>
                    <div class="flex justify-between gap-3 mt-4">
                        <button onclick="loadProductDetails(${product.id})" class="btn btn-ghost border-1 border-[#e0e7ff] w-1/2 rounded-lg"><i class="fa-regular fa-eye"></i> Details</button>
                        <button onclick="product_modal.showModal()" class="btn btn-primary w-1/2 rounded-lg"><i class="fa-solid fa-cart-shopping"></i> Add</button>
                    </div>
                </div>
            </div>`

        productsContainer.append(productDiv)
    }
}

const displayAllProducts = (allProducts) => {
    const productsContainer = document.getElementById('productsContainer')
    productsContainer.innerHTML = '';


    for (let product of allProducts) {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `<div class="w-auto  border-1 border-gray-100 rounded-lg">
                <div class="bg-[#E6E7EB] rounded-t-lg py-4">
                    <img class="w-auto mx-auto h-[300px]"
                        src="${product.image}" alt="">
                </div>
                <div class="py-4 px-6">
                    <div class="flex justify-between pb-3">
                        <span class="badge bg-[#E0E7FF] text-primary rounded-xl">${product.category}</span>
                        <span><i class="fa-solid fa-star text-yellow-500"></i> ${product.rating.rate} (${product.rating.count})</span>
                    </div>
                    <h2 class="text-xl text-left font-semibold truncate" title="${product.title}">${product.title}</h2>
                    <div class="price text-xl font-bold pt-2">
                        <span>$${product.price}</span>
                    </div>
                    <div class="flex justify-between gap-3 mt-4">
                        <button onclick="loadProductDetails(${product.id})" class="btn btn-ghost border-1 border-[#e0e7ff] w-1/2 rounded-lg"><i class="fa-regular fa-eye"></i> Details</button>
                        <button onclick="product_modal.showModal()" class="btn btn-primary w-1/2 rounded-lg"><i class="fa-solid fa-cart-shopping"></i> Add</button>
                    </div>
                </div>
            </div>`;
        productsContainer.append(productDiv)
    }
}

loadAllProducts()



const displayCategory = datas => {
    const categoryContainer = document.getElementById('category-container');
    categoryContainer.innerHTML = '';

    // console.log(data)

    for (let data of datas) {
        // console.log(typeof data)
        const data2 = data.replace(/'/g, "\\'");
        // console.log(data2)
        const categoryBtn = document.createElement('div');
        // categoryBtn.classList.add('w-auto')
        categoryBtn.innerHTML = `<button onclick="loadProductsByCategory('${data2}')" class="btn btn-outline w-auto hover:bg-primary hover:text-white hover:border-transparent rounded-full">${data}</button>`
        categoryContainer.append(categoryBtn);
    }
}

loadCategories()