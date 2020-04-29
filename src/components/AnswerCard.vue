<template>
  <div ref="card" id="answer-card" v-bind:class="{ fade: show }">
    <transition name="fade">
      <h2
        v-if="show"
        v-bind:style="{
          color: currentColor,
          top: cardXPosition,
          left: cardXPosition,
          position: absolute
        }"
      >
        {{ answer.title }}
      </h2>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      currentColor: "#000000",
      cardXPosition: "0px",
      cardYPosition: "0px",
      absolute: "absolute"
    };
  },
  props: ["answer", "parentWidth", "parentHeight"],
  methods: {
    buildAnswerCard() {
      this.setColor();
    },
    getColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
    setColor() {
      this.currentColor = this.getColor();
    },
    async bounce() {
      var parentWidth = this.$props.parentWidth;

      this.cardXPosition = await `${Math.floor(Math.random() * parentWidth)}px`;
      this.show = !this.show;
    },
    makeAppear() {
      this.show = true;
    },
    makeDisappear() {
      this.show = false;
    },
    getRange(x, y) {
      return Math.floor(Math.random() * y) + x;
    }
  },
  created() {
    this.buildAnswerCard();
  },
  mounted() {
    window.setInterval(() => {
      this.bounce();
    }, this.getRange(2000, 3000));
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  position: absolute;
  transition: opacity 3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  position: absolute;
  opacity: 0;
}
/* .showingUp {
  position: absolute;
  border: 2px solid white;
  transition: all 3s;
} */
.animate-me {
  width: 120px;
  height: 180px;
}
</style>
