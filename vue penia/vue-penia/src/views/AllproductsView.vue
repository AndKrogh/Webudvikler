<template>
    <main>
    <section class="product">
    <img src="https://api.placid.app/u/qsraj?title[text]=I%20am%20a%20dynamic%20Image%21" alt="Product 1">
    <h2>Product 1</h2>
    <p>$19.99</p>
    <button @click="$router.push('/ProductView')">Add to Cart</button>
    </section>

    <section class="product">
    <img src="https://api.placid.app/u/qsraj?title[text]=I%20am%20a%20dynamic%20Image%21" alt="Product 2">
    <h2>Product 2</h2>
    <p>$24.99</p>
    <button @click="$router.push('/ProductView')">Add to Cart</button>
    </section>
    </main>

    <footer>
    <p>&copy; 2022 Webshop. All rights reserved.</p>
    </footer>
</template>

<style>
body {
font-family: Arial, sans-serif;
margin: 0;
padding: 0;
}

nav ul {
list-style-type: none;
padding: 0;
}

nav ul li {
display: inline;
margin-right: 10px;
}

main {
display: flex;
flex-wrap: wrap;
justify-content: center;
height: 100vh;
}

.product {
margin: 20px;
padding: 10px;
border: 1px solid #ccc;
text-align: center;
height: 250px;
}

.product img {
width: 100px;
height: 100px;
}

button {
background-color: #333;
color: #fff;
padding: 5px 10px;
border: none;
cursor: pointer;
}

footer {
background-color: #333;
color: #fff;
text-align: center;
padding: 10px 0;
}
</style>
