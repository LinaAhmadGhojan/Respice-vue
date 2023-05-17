<template>
  <div class="recepie_area" style="padding-top:90px">
    <div class="container">
        <div class="row">
            <div v-for="item in respices" :key="item.id" class="col-xl-4 col-lg-4 col-md-6">
                <div class="single_recepie text-center">
                    <div class="recepie_thumb">
                        <img :src="item.photo" alt="">
                    </div>
                    <h3>{{item.name}}</h3>
                    <span>Appetizer</span>
                    <p>Time Needs: {{ item.time }} Mins</p>
                    <a :href="`/show/${item.id}`" class="line_btn">View Full Recipe</a>
                </div>
            </div>
          
         
        </div>
    </div>
</div>


</template>




<script>

import axios from 'axios'

const baseUrl="http://127.0.0.1:8000/api";
export default {
  data: function()
 { 
  return {
    respices:[],
  } ;
},
components:{
  
},
mounted() {
    axios.get(baseUrl+'/recipes')
      .then(response => {
        this.respices = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
    
  }


</script>


