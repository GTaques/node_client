<template>
  <div
    ref="card"
    id="answer-card"
    v-bind:class="[{ block: block }, { fade: show }]"
  >
    <transition name="fade">
      <h2
        v-if="show"
        v-bind:style="{
          color: currentColor,
          top: cardYPosition,
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
      block: true,
      show: true,
      currentColor: "#000000",
      cardXPosition: "0px",
      cardYPosition: "0px",
      absolute: "absolute",
      frameHeight: 800
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
      this.cardYosition = await `${Math.floor(
        Math.random() * this.frameHeight
      )}px`;
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
    }, this.getRange(3000, 4000));
  }
};
</script>

<style>
.block {
  display: block;
  width: 300px;
  background-color: red;
}
.fade-enter-active,
.fade-leave-active {
  display: block;
  width: 300px;
  position: absolute;
  transition: opacity 3.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  display: block;
  width: 300px;
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
h2 {
  width: 300px;
}
</style>
