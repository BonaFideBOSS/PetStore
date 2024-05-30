var app = new Vue({
  el: "#app",
  // App Data
  data: {
    sitename: "Welcome to Pet Store!",
    showProduct: true,
    products: products,
    cart: [],
    states: {
      AL: "Alabama",
      AR: "Arizona",
      CA: "California",
      NV: "Nevada",
    },
    order: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      gift: "Send as a gift",
      sendGift: "Send as a gift",
      dontSendGift: "Do not send as a gift",
      method: "Home",
    },
  },
  // App Methods
  methods: {
    cartCount(id) {
      let count = 0;
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i] === id) {
          count++;
        }
      }
      return count;
    },

    canAddToCart(product) {
      return product.inventory > this.cartCount(product.id);
    },

    canRemoveFromCart(product) {
      return this.cartCount(product.id) > 0;
    },

    addToCart(product) {
      this.cart.push(product.id);
    },

    removeFromCart(product) {
      const index = this.cart.lastIndexOf(product.id);
      if (index > -1) {
        this.cart.splice(index, 1);
      }
    },

    showCheckout() {
      this.showProduct = this.showProduct ? false : true;
    },

    submitOrder() {
      alert("Order Submitted!");
    },
  },
  computed: {},
});
