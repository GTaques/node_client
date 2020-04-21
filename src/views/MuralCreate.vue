<template>
  <div id="mural-create">
    <h2>Ask something to the world</h2>
    <form @submit="checkForm()" action>
      <input id="mural-title" class="input-text" type="text" v-model="question.title" />
    </form>
    <button @click="saveMural()" class="button">Submit</button>
    <label for="mural-title">{{ question.title }}</label>
  </div>
</template>

<script>
import MuralService from "../service/MuralService";

export default {
  data() {
    return {
      errors: [],
      question: {
        id: null,
        title: null
      }
    };
  },
  methods: {
    saveMural() {
      var data = {
        title: this.question.title
      };
      MuralService.create(data)
      .then(response => {
        this.question.id = response.id;
        console.log(response.data);

      })
      .catch(err => {
        console.error(err);
      })
    },
    checkForm: function(e) {
      if (this.title) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push("Answer required.");
      }
      e.preventDefault();
    }
  }
};
</script>

<style></style>
