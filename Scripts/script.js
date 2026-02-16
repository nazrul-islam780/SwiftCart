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


const displayProductsByCategory = (products) => {
    const productsContainer = document.getElementById('productsContainer')
    productsContainer.innerHTML = '';

    for(let product of products){
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
                        <span>${product.price}</span>
                    </div>
                    <div class="flex justify-between gap-3 mt-4">
                        <button class="btn btn-ghost border-1 border-[#e0e7ff] w-1/2 rounded-lg"><i class="fa-regular fa-eye"></i> Details</button>
                        <button class="btn btn-primary w-1/2 rounded-lg"><i class="fa-solid fa-cart-shopping"></i> Add</button>
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
                    <h2 class="text-xl text-left font-semibold">${product.title}</h2>
                    <div class="price text-xl font-bold pt-2">
                        <span>${product.price}</span>
                    </div>
                    <div class="flex justify-between gap-3 mt-4">
                        <button class="btn btn-ghost border-1 border-[#e0e7ff] w-1/2 rounded-lg"><i class="fa-regular fa-eye"></i> Details</button>
                        <button class="btn btn-primary w-1/2 rounded-lg"><i class="fa-solid fa-cart-shopping"></i> Add</button>
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
        categoryBtn.innerHTML = `<button onclick="loadProductsByCategory('${data2}')" class="btn btn-outline hover:bg-primary hover:text-white hover:border-transparent rounded-full">${data}</button>`
        categoryContainer.append(categoryBtn)
    }
}

loadCategories()