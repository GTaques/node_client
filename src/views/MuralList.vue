<template>
  <div id="mural-list">
    <h2>Hope Questions from the world</h2>
    <MuralCard
      v-for="question in questions"
      :key="question.id"
      :question="question"
    >
    </MuralCard>
  </div>
</template>

<script>
import MuralService from "../service/MuralService";
import MuralCard from "../components/MuralCard";

export default {
  components: {
    MuralCard
  },
  data() {
    return {
      questions: [
        {
          id: null,
          title: null,
          author: null,
          createdAt: null
        }
      ]
    };
  },
  created() {
    this.getMurals();
  },
  methods: {
    getMurals() {
      MuralService.getAll()
        .then(response => {
          console.log(response);
          this.questions = response.data;
          console.log(this.questions[0]);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

<style></style>
