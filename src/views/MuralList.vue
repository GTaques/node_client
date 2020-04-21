<template>
  <div>
    <AnswerCreate />
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
    </ul>
    <MuralCard />
  </div>
</template>

<script>
import axios from "axios";
import AnswerCreate from "../components/AnswerCreate";
import MuralCard from "../components/MuralCard";

export default {
  components: {
    AnswerCreate,
    MuralCard
  },
  data() {
    return {
      todos: null
    };
  },
  async created() {
    try {
      const res = await axios.get("http://taques.herokuapp.com/todos");
      this.todos = res.data;
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  }
};
</script>

<style></style>
