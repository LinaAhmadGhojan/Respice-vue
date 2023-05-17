<template>

  
  <form  @submit.prevent="submitForm">
    <label for="name">Name</label>
      <div class="form-group">

      <input style="width: 50%;" type="text" id="name" v-model="form.name" required>

    </div>

    <label for="time">Time</label>
      <div class="form-group">

      <input style="width: 50%;" type="text" id="time" v-model="form.time" required>

    </div>

    <label for="photo">Photo:</label>
      <div class="form-group">

      <input style="border: solid 1px;width: 50%;" type="file" id="photo" @change="handleFileUpload"  required>

    </div>


      <div class="form-group">

      <label for="list_instructions">Instructions:</label>
      <ul>
        <li v-for="(instruction, index) in form.list_instructions" :key="index">
          <input style="width: 45%;" type="text" v-model="form.list_instructions[index]">
          <button style="padding:3px;margin: 3px;" class="btn btn-danger"  type="button" @click="removeInstruction(index)">Remove</button>
        </li>
      </ul>
      <button class="btn btn-primary" type="button" @click="addInstruction">Add Instruction</button>
    </div>


      <div class="form-group">

      <label for="list_ingredients">Ingredients:</label>
      <ul>
        <li v-for="(ingredient, index) in form.list_ingredients" :key="index">
          <input style="width: 45%;" type="text" v-model="form.list_ingredients[index]">
          <button style="padding:3px;margin: 3px;" class="btn btn-danger" type="button" @click="removeIngredient(index)">Remove</button>
        </li>
      </ul>
      <button  class="btn btn-primary" type="button" @click="addIngredient">Add Ingredient</button>
    </div>

   <br><br>
    <button class="btn btn-danger" type="submit">Submit</button>
  </form>
</template>

<script>
import axios from 'axios';
const baseUrl="http://127.0.0.1:8000/api";
export default {
  data() {
    return {
      form: {
        name: '',
        time: '',
        photo:null,
        list_instructions: [],
        list_ingredients:[],
      }, 
      id:0,
      recipe:''
    };
  },

  
mounted() {
  this.id= this.$route.params.id;
  console.log("id:"+this.id);
    axios.get(baseUrl+'/recipe/show/'+this.$route.params.id)
      .then(response => {
        this.respice = response.data
        this.form.name=this.respice.name
        this.form.time=this.respice.time
        this.form.list_instructions=this.respice.list_instructions
        this.form.list_ingredients=this.respice.list_ingredients
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: 
  {
   
   
    addInstruction() {
      this.form.list_instructions.push('');
    },
    removeInstruction(index) {
      this.form.list_instructions.splice(index, 1);
    },
    addIngredient() {
      this.form.list_ingredients.push('');
    },
    removeIngredient(index) {
      this.form.list_ingredients.splice(index, 1);
    },

    handleFileUpload(event) {
      const file = event.target.files[0];
      this.form.photo = file;
    },

    async submitForm() {
      
    const formData = new FormData();
    formData.append('name', this.form.name);
    formData.append('time', this.form.time);
    formData.append('photo', this.form.photo);

    this.form.list_instructions.forEach((instruction) => {
      formData.append('list_instructions[]', instruction);
    });

    this.form.list_ingredients.forEach((ingredient) => {
      formData.append('list_ingredients[]', ingredient);
    });

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/update/recipe/'+this.id, formData
      
     );
     this.$router.push('/myrespices')
     
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  },
};
</script>
