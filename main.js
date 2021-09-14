const app = new Vue({
    el: '#app',
    data:{
        apiProducts: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json',
        apiBasket:"https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json"
    },
    methods:{
        getJson(url){
             return fetch(url).then(data => data.json())
        },
    },
    
  
})
