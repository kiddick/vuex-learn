import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [
            { name_: 'banana', price: 20 },
            { name_: 'apple', price: 220 },
            { name_: 'toy', price: 210 },
            { name_: 'car', price: 234220 }
        ]
    },
    getters: {
        saleProducts: state => {
            var saleProducts = state.products.map(product => {
                return {
                    name: product.name_ + '!!',
                    price: product.price / 2
                }
            });
            return saleProducts;
        }
    }
})