<template>
  <router-link
    class="mural-link"
    :to="{ name: 'mural-show', params: { id: question._id } }"
  >
    <div class="mural-card -shadow">
      <span class="eyebrow">{{ question.createdAt }}</span>
      <h4 class="title">{{ question.title }}</h4>
      <span>{{ question.author }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["question"],
  data() {
    return {
      mural: {
        id: "1",
        title: "Hug my grandma",
        date: "Ter 09 Ago, 2020",
        time: "06:00",
        author: "Gabe"
      }
    };
  }
};
</script>

<style scoped>
.mural-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.mural-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.mural-card > .title {
  margin: 0;
}

.mural-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>