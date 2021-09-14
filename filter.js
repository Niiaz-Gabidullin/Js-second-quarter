Vue.component("filter_el",{
    data(){
        return{
            userSearch:"",
        }
    },
    methods:{
        filter() {
            let regExp = new RegExp(this.userSearch, "i");
            this.$root.$refs.catalog.filtered =
              this.$root.$refs.catalog.products.filter((item) => {
                return regExp.test(item.product_name);
              });
          },
    },

template:`
<form action="#" class="search" @submit.prevent="filter">
<input type="text" class="search__input" placeholder="search text" v-model="userSearch">
<button type="submit" class="search__button">Search</button>
</form>`
}) 