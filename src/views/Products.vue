<template>
  <div class="form-control">
    <label for="">Nombre</label> <input type="text" v-model="newProduct.name" />
    <label for="">Descripcion</label>
    <input type="text" v-model="newProduct.description" />
    <label for="">Precio</label>
    <input type="number" v-model="newProduct.price" />

    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nombre</th>
          <th scope="col">Descripcion</th>
          <th scope="col">Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="product.id" v-for="product in products">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
        </tr>
      </tbody>
    </table>
    <button @click="addProduct">AGREGAR</button>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "Products",
  data() {
    return {
      newProduct: {
        id: 0,
        name: "",
        description: "",
        price: 0,
      },
      products: [],
    };
  },
  methods: {
    addProduct() {
      const id = this.products.length + 1;
      this.products.push({ ...this.newProduct, id });
      this.reset();
      this.axios.get("/", { ...this.newProduct, id });
    },
    reset() {
      this.newProduct = {
        id: 0,
        name: "",
        description: "",
        price: 0,
      };
    },
  },
};
</script>
