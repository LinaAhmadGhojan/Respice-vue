<template>
  <div class="recepie_area" style="padding-top:90px">
    <div class="container">
        <div class="row">
          <a class="btn btn-primary" href="/add" >Add Recepie </a>
          <div>
            <input style="margin-left: 9px; padding-bottom: 8px;" type="text" v-model="searchQuery" placeholder="Search...">
            <!-- Table rendering code here -->
          </div>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Time</th>
                <th scope="col">Photo</th>
                <th scope="col" style="text-align: left;">Ingredients</th>
                <th scope="col" style="text-align: left;">Instructions</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in respices" :key="item.id">
                <th scope="row">{{item.id}}</th>
                <td>{{item.name}}</td>
                <td>{{item.time}}</td>
                <td>
                  <img :src="item.photo" alt="" style="width: 100px;height: 100px;">
                </td>
                 <td>
                  <ul v-for="list1 in item.list_ingredients" :key="list1">
                    <li style="list-style-type: disclosure-closed;text-align: left;">
                      {{  list1}}
                    </li>
                    </ul>
                  </td>
                  <td>
                    <ul v-for="list2 in item.list_instructions" :key="list2">
                      <li style="list-style-type: disclosure-closed;text-align: left;">
                        {{  list2}}
                      </li>
                      </ul>
                    </td>


                <td>
                  <a style="margin-bottom: 5px;"  class="btn btn-primary" :href="`/update/${item.id}`">Edit</a>
                  <br>
                  <a style="margin-left: 4px;color:white" @click="deleteItem(item.id)" class="btn btn-danger"  >delete</a>
                </td>
              </tr>
           
            </tbody>
          </table>
          
         
        </div>
    </div>
</div>


</template>




<script>

import axios from 'axios'

const baseUrl="http://127.0.0.1:8000/api";
const token = localStorage.getItem('token');
export default {
  data: function()
 { 
  return {
    respices:[],
    searchQuery: '',
  } ;
},
components:{
  
},

mounted() {
    axios.get(baseUrl+'/recipes/user', {
  headers: {
    Authorization: 'Bearer ' + token
  }
})
      .then(response => {
        this.respices = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    deleteItem(id)
    {
     
    console.log("id:"+id);
    axios.delete(baseUrl+'/delete/recipe/'+id)
        .then(() => {
          location.reload();
        })
      .catch(error => {
        console.log(error)
      })
    },
    searchItems() {
      axios.get('http://127.0.0.1:8000/api/recipes/search/'+this.searchQuery)
      .then(response => {
        this.respices = response.data;
      })
      .catch(error => {
        console.error(error);
      });
    }
  },
  
  watch: {
    searchQuery: {
      handler: 'searchItems',
      immediate: true
    }
  }
    
  }


</script>


