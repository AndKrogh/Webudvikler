<template>
  <div class="container">
    <div class="product">
      <div class="img_div">
        <img src="https://api.placid.app/u/qsraj?title[text]=I%20am%20a%20dynamic%20Image%21" alt="">
      </div>
      <div class="description">
        <h2>Product Name</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, iusto maiores obcaecati, autem aspernatur fugiat ipsum perspiciatis eum expedita hic accusamus atque, sint dolor totam numquam at illum suscipit iure possimus error architecto. Nulla aliquid repellat dolorum repellendus, incidunt omnis mollitia quas, minima sapiente dolor eos, doloribus optio numquam suscipit?</p>
        <p>Price: $19.99</p>
        <button>Add to Cart</button>
      </div>
    </div>
</div>

</template>
<style scoped>
.img_div{
  width: 250%;

}

.container {
margin: 0 auto;
padding: 20px;
}

.description {
  background-color: aquamarine;
}

.product {
text-align: center;
border: 1px solid #ccc;
padding: 20px;
background-color: #fff;
height: 100vh;
display: flex;
justify-content: space-between;
}

.product img {
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
}

button {
background-color: #333;
color: #fff;
padding: 10px 20px;
border: none;
cursor: pointer;
}
</style>