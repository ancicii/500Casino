<!-- eslint-disable vue/no-mutating-props -->
<template>
  <v-list-item
    :style="{
      backgroundColor: todo.completed ? '#C8E6C9' : '#FFFFFF',
    }"
    @click="checkTodo"
  >
    <v-list-item-action style="min-width: 48px">
      <v-checkbox v-model="todo.completed" @change="checkTodo" />
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title
        :class="{ 'text-decoration-line-through': todo.completed }"
      >
        {{ todo.description }}
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: Object,
  },
  methods: {
    checkTodo() {
      this.$emit("updateTodo", this.todo);
    },
  },
};
</script>
