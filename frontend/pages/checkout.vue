<template>
  <section class="container">
    <div>
      <div v-if="cart">
        <h1 class="mt-5">Checkout</h1>
        <div class="grid md:grid-cols-1 mt-3">
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">Cart</h5>
                <p class="card-text">{{ numberOfItems }} item(s) selected:</p>
                <ul>
                    <li v-for="item in cart.items" :key="item.id" class="card-text mb-2 flex items-center justify-between">
                    <span>Name: {{ item.product.title }} (${{ item.price | formatNumber }}) ({{ item.quantity }})</span>
                    <div>
                        <button @click="addToCart(item)"> + </button>
                        <button @click="removeFromCart(item)"> - </button>
                    </div>
                    </li>
                </ul>
                <h5 class="card-text">Total: ${{ cart.total | formatNumber }}</h5>
                <p v-if="cart.items && !cart.items.length">Please select some items.</p>
                </div>
            </div>
        </div>
        <div class="grid md:grid-cols-1 mt-3">
            <form autocomplete="off" @submit.stop.prevent="handleSubmit">
                <div class="grid grid-cols-2 gap-4 address-section">
                    <div>
                        <div class="mb-2 grid sm:grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="s-address">
                                    Shipping First Name
                                </label>
                                <input id="s-address" type="text" placeholder="Enter your first name" v-model="shippingInfo.shipping_first_name" required autofocus="true" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            </div>
                            <div>
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="s-address">
                                    Shipping Last Name
                                </label>
                                <input id="s-address" type="text" placeholder="Enter your last name" v-model="shippingInfo.shipping_last_name" required autofocus="true" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            </div>
                        </div>
                        <div class="mb-2">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="s-address">
                                Shipping Address
                            </label>
                            <input id="s-address" type="text" placeholder="Enter your address" v-model="shippingInfo.shipping_address1" required autofocus="true" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        </div>
                        <div class="mb-2">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="s-city">
                                Shipping City
                            </label>
                            <input id="s-city" type="text" placeholder="Enter your city" v-model="shippingInfo.shipping_city" required autofocus="true" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        </div>
                        <div class="mb-2">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="s-state">
                                Shipping State
                            </label>
                            <input id="s-state" type="text" placeholder="Enter your state" v-model="shippingInfo.shipping_state" required autofocus="true" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        </div>
                        <div class="mb-5">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="s-zip-code">
                                Shipping Zip Code
                            </label>
                            <input id="s-zip-code" type="text" placeholder="Enter your postal code" v-model="shippingInfo.shipping_zip" required autofocus="true" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        </div>
                    </div>
                    <div>
                        <div class="mb-2 grid sm:grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="s-address">
                                    Billing First Name
                                </label>
                                <input id="s-address" type="text" placeholder="Enter your first name" v-model="billingInfo.first_name" required autofocus="true" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            </div>
                            <div>
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="s-address">
                                    Billing Last Name
                                </label>
                                <input id="s-address" type="text" placeholder="Enter your last name" v-model="billingInfo.last_name" required autofocus="true" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            </div>
                        </div>
                        <div class="mb-2">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="b-address">
                                Billing Address
                            </label>
                            <input id="b-address" type="text" placeholder="Enter your address" v-model="billingInfo.address1" required autofocus="true" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        </div>
                        <div class="mb-2">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="b-city">
                                Billing City
                            </label>
                            <input id="b-city" type="text" placeholder="Enter your city" v-model="billingInfo.city" required autofocus="true" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        </div>
                        <div class="mb-2">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="b-state">
                                Billing State
                            </label>
                            <input id="b-state" type="text" placeholder="Enter your state" v-model="billingInfo.state" required autofocus="true" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        </div>
                        <div class="mb-2">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="b-zip-code">
                                Billing Zip Code
                            </label>
                            <input id="b-zip-code" type="text" placeholder="Enter your postal code" v-model="billingInfo.zip" required autofocus="true" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-4 cc-section">
                    <h2 class="mt-2">Credit Card Detail</h2>
                    <div class="mb-2">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="s-address">
                            Card Number
                        </label>
                        <input id="cc-number" type="text" placeholder="Enter your card number" v-model="ccDetail.ccnumber" required autofocus="true" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
                    <div class="mb-2">
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="s-address">
                                    Expiry Date
                                </label>
                                <input id="cc-expiry" type="text" placeholder="Enter your card expiry date" v-model="ccDetail.ccexp" required autofocus="true" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            </div>
                            <div>
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="s-address">
                                    Security Code
                                </label>
                                <input id="cc-cvv" type="text" placeholder="Enter your security code" v-model="ccDetail.cvv" required autofocus="true" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            </div>
                        </div>
                    </div>
                </div>
                <button :disabled="loading" type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3">
                Submit
                </button>
            </form>
            </div>
        </div>
        <div class="mt-5" v-if="!cart">
            Cart is empty
        </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import '~/utils/filters'
import { DirectPost } from '~/utils/payment/nmi'

export default {
  data() {
    return {
        billingInfo: {
            'first_name': '',
            'last_name': '',
            'address1': '',
            'city': '',
            'state': '',
            'zip' : '',
        },
        shippingInfo: {
            'shipping_first_name': '',
            'shipping_last_name': '',
            'shipping_address1': '',
            'shipping_city': '',
            'shipping_state': '',
            'shipping_zip' : '',
        },
        ccDetail: {
            'ccnumber': '',
            'ccexp': '',
            'cvv': '',
        },
        loading: false
    }
  },
  computed: {
    cart() {
      return this.$store.getters['cart/cart']
    },
    numberOfItems() {
      return this.$store.getters['cart/numberOfItems']
    },
    loggedUser() {
      return this.$store.getters['auth/user']
    }
  },
  methods: {
    async handleSubmit() {
        
      /* this.loading = true
      try {
        let orderDate = Date.now()
        let orderNo = await this.$strapi.$http.$post('/incremental-values/get-value', { code: 'order-no' })

        let requestOptions = {
            'security_key': '2V64nHE6hudZc3QY86Bww7rGyhA9a2jb',
            'type': 'sale',
            'amount': this.cart.total,
            'orderid': orderNo,
            'order_date': new Date(orderDate).toISOString().replace(/T/, ' ').replace(/\..+/, ''),
            'order_description': 'Customer order',
            'tax': 0,
            'shipping': 0,
            'ponumber': '',
            'ipaddress': ''
        };
        Object.assign(requestOptions, this.billingInfo, this.shippingInfo, this.ccDetail)

        for (let i = 0; i < this.cart.items.length; i++) {
            requestOptions['item_product_code_' + (i + 1)] = this.cart.items[i].product.code
            requestOptions['item_description_' + (i + 1)] = this.cart.items[i].product.title + ' [' + this.cart.items[i].size.title + ']'
            requestOptions['item_unit_of_measure_' + (i + 1)] = 'pc'
            requestOptions['item_unit_cost_' + (i + 1)] = this.cart.items[i].price
            requestOptions['item_quantity_' + (i + 1)] = this.cart.items[i].quantity
            requestOptions['item_total_amount_' + (i + 1)] = this.cart.items[i].total
        }

        let params = new URLSearchParams(requestOptions)
        let paymentResponse = await this.$axios.post('/payment/', params, { timeout: 2 * 60 * 1000 })

        let responseData = new URLSearchParams(paymentResponse.data)
        console.log(paymentResponse)
        if (parseInt(responseData.response) == 1) {
            alert('Your order have been successfully submitted.')

            this.releaseCart({
                orderNo: orderNo,
                orderDate: orderDate
            })

            this.$router.push('/')
        } else {
            alert('Your order submittion was not successfull.')
        }
      } catch (error) {
        this.loading = false
        console.log(error)
      } */
    },
    addToCart(item) {
        let selected = {
          productId: item.product.id,
          sizeId: item.size.id,
          quantity: 1,
          purchaseTypeId: item.purchase_type.id,
          subscriptionTypeId: item.subscription_type? item.subscription_type.id: null
        }
        this.$store.dispatch('cart/add', selected)
    },
    removeFromCart(item) {
        let selected = {
          productId: item.product.id,
          sizeId: item.size.id,
          quantity: 1,
          purchaseTypeId: item.purchase_type.id,
          subscriptionTypeId: item.subscription_type? item.subscription_type.id: null
        }
        this.$store.dispatch('cart/remove', selected)
    },
    emptyCart() {
        this.$store.dispatch('cart/empty')
    },
    releaseCart(data) {
        this.$store.dispatch('cart/release', data)
    }
  },
  mounted () {
      this.shippingInfo.shipping_first_name = this.loggedUser.first_name
      this.shippingInfo.shipping_last_name = this.loggedUser.last_name
      this.billingInfo.first_name = this.loggedUser.first_name
      this.billingInfo.last_name = this.loggedUser.last_name

      let dp = new DirectPost('2V64nHE6hudZc3QY86Bww7rGyhA9a2jb')
      dp.pay()
  }
}
</script>
<style lang="scss">
.card {
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 25px;
    margin: 0;

    .card-body {
        .card-title {
            font-size: 15px;
        }

        button {
            padding: 7px;
        }
    }
}
.address-section {
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 25px;
    margin: 0;
}
.cc-section {
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 25px;
    margin: 0;
    margin-top: 15px;
}
</style>