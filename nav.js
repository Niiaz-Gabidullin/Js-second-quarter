Vue.component("navigation",{
    data(){
        return {
            basket:[],
            show: false,
        }
    },
    mounted(){
        this.$parent.getJson(this.$parent.apiBasket).then(data => {
            for(let item of data.contents){
                this.basket.push(item);

            }
        })
        
    },
    template:`  <div class="wrapper">
    <nav class="nav container">
      <img class="logo" src="https://upload.wikimedia.org/wikipedia/ru/thumb/3/35/Starbucks_Coffee_Logo.svg/1200px-Starbucks_Coffee_Logo.svg.png" alt="logo">
      <filter_el></filter_el>
      <div class="basket">
        <button class="basket__btn" @click="show = !show">Basket</button>
        <div class="basket__inner" v-show="show">
        <div class="basket__inner-item" v-for="item of basket">
        <img class="basket__item-img" src="#" alt="photo">
        <div class="basket__inner-text">
        <div class="basket__inner-name">{{item.product_name}}</div>
        <div class="basket__inner-quantity">{{item.quantity}}</div>
        <div class="basket__inner-price">{{item.price*item.quantity}}</div>
      </div>
          <div class="basket__inner-btns">
            <button class="basket__inner-delete">&times</button>
            <button class="basket__inner-delete">+</button>
            <button class="basket__inner-delete">-</button>
          </div>
        </div>
        </div>
      </div>
    </nav>
  </div>`
}) 