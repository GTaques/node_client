<template>
  <div class="mural-show">
    <h3 v-if="question">{{ question.title }}</h3>
    <AnswerCreate
      :ownerQuestion="this.$props.id"
      @refreshAnswers="reloadAnswers($event)"
    />
    <div ref="answersMural" id="answers-mural" class="mural">
      <AnswerCard
        v-for="answer in answers"
        v-bind:style="{ position: position }"
        :key="answer.id"
        :answer="answer"
        :parentHeight="muralHeight"
        :parentWidth="muralWidth"
        :bounce="false"
      />
    </div>
  </div>
</template>

<script>
import AnswerService from "../service/AnswerService";
import AnswerCreate from "../components/AnswerCreate";
import AnswerCard from "../components/AnswerCard";
import MuralService from "../service/MuralService";

export default {
  components: {
    AnswerCreate,
    AnswerCard
  },
  props: ["id"],
  data() {
    return {
      question: null,
      answers: [],
      muralHeight: 0,
      muralWidth: 0,
      position: "absolute"
    };
  },
  methods: {
    retrieveAnswers(id) {
      AnswerService.findByQuestionId(id)
        .then(response => {
          this.answers = response.data;
          console.log(response);
        })
        .catch(err => {
          console.error(err);
        });
    },
    retrieveQuestion(id) {
      MuralService.get(id)
        .then(response => {
          this.question = response.data;
        })
        .catch(err => {
          console.error(err);
        });
    },
    reloadAnswers() {
      this.retrieveAnswers(this.$props.id);
    },
    getFrameSize() {
      console.log(this.$refs);
      this.muralWidth = this.$refs.answersMural.clientWidth;
      this.muralHeight = this.$refs.answersMural.clientHeight;
      console.log(this.muralWidth);
      console.log(this.muralHeight);
    }
  },
  created() {
    this.retrieveQuestion(this.$props.id);
    this.retrieveAnswers(this.$props.id);
  },
  mounted() {
    this.getFrameSize();
  }
};
</script>

<style></style>
