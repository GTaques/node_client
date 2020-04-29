<template>
  <div id="answer-create">
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
        title: null,
        ownerQuestion: null
      }
    };
  },
  props: ["ownerQuestion"],
  methods: {
    saveAnswer() {
      var data = {
        title: this.answer.title,
        ownerQuestion: this.$props.ownerQuestion
      };
      AnswerService.create(data)
        .then(response => {
          this.answer.id = response.id;
          console.log(response.data);
          this.refreshRequest();
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
    },
    refreshRequest() {
      this.$emit("refreshAnswers", "");
    }
  }
};
</script>

<style></style>
