Vue.component('catalog',{
    data(){
        return{
            products:[],
            filtered:[]
        }
    },

    methods:{
        addProductsInBasket(item){
            for(let el of this.$root.$refs.navigation.basket){
                if(item.product_name === el.product_name){
                   return  el.quantity++;
                }
            }

            let prod = Object.assign({quantity: 1}, item)
           return this.$root.$refs.navigation.basket.push(prod)
        },
    },

    mounted(){
        this.$root.getJson("catalog.json").then(data => {
            for(let item of data){
                this.products.push(item);
                this.filtered.push(item);
            }
        }
        ),
        this.$root.getJson(this.$root.apiProducts).then(data => {
            for(let item of data){
                this.products.push(item);
                this.filtered.push(item);
            }
        }
        )
    },

    template:`
    <div class="catalog">
    <div class="catalog__wrapper container">
      <div class="catalog__item" v-for="item of filtered">
        <img src="" alt="" class="catalog__item-img">
        <div class="catalog__item-name">{{item.product_name}}</div>
        <div class="catalog__item-price">{{item.price}}</div>
        <button class="catalog__item-btn" @click="addProductsInBasket(item)">Купить</button>
      </div>
    </div>
  </div>
    `
}) 


