<template>
  <div id="answer-create">
    <h2>What's the first thing you'll do once quarantine ends?</h2>
    <form @submit="checkForm()" action>
      <input
        id="answer-title"
        class="input-text"
        type="text"
        v-model="answer.title"
      />
    </form>
    <button @click="saveAnswer()" class="button">Submit</button>
  </div>
</template>

<script>
import AnswerService from "../service/AnswerService";

export default {
  data() {
    return {
      errors: [],
      answer: {
        id: null,
        title: null
      }
    };
  },
  methods: {
    saveAnswer() {
      var data = {
        title: this.answer.title
      };
      AnswerService.create(data)
        .then(response => {
          this.answer.id = response.id;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
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
