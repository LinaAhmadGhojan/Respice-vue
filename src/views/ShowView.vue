<template>
  <div class="container">
    
    <div class="row align-items-center" style="margin-top: 27px;">
        <div class="col-xl-6 col-md-6">
            <div class="recepies_thumb">
                <img :src="respice.photo" style="width:350px;height:350px" alt="">
            </div>
        </div>
        <div class="col-xl-6 col-md-6">
            <div class="recepies_info">
                <h3>{{respice.name}}</h3>
                <p>list ingredients</p>
                <ul class="custom-list" v-for="list1 in respice.list_ingredients" :key="list1">
                    <li style="">
                      {{  list1}}
                    </li>
                    </ul>
           
             
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xl-12">
            <div class="recepies_text">
                <br>
                <h2 style="text-align: left;">list instructions</h2>
              <p style="text-align: left;" v-for="list2 in respice.list_instructions" :key="list2">
                       {{ list2 }}
              </p>
            </div>
        </div>
    </div>
</div>
</template>


<script>

import axios from 'axios'
//import {useRoute} from "vue-router";
const baseUrl="http://127.0.0.1:8000/api";
//const route = useRoute();
  
    // Use the ID as needed...
export default {
  data: function()
 { 
  return {
    respice:'',
  } ;
},
components:{
  
},
mounted() {
    axios.get(baseUrl+'/recipe/show/'+this.$route.params.id)
      .then(response => {
        this.respice = response.data
       // console.log(this.respice);
      })
      .catch(error => {
        console.log(error)
      })
  }
    
  }


</script>

<style>
.custom-list {
    list-style-type: none;
    padding-left: 0;
  }
  
  .custom-list li::before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: black; /* Customize your marker's appearance */
    margin-right: 5px; /* Adjust the spacing between the marker and the list item */
  }
  
</style>