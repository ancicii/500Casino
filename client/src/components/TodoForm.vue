<template>
  <v-form @submit.prevent="submit">
    <v-row class="my-5">
      <v-col cols="9" md="10" lg="11" class="pa-0">
        <v-text-field
          v-model="newTodo"
          label="Add new To-Do"
          outlined
          required
          class="rounded-left"
          hide-details="auto"
        />
      </v-col>
      <v-col cols="3" md="2" lg="1" class="pa-0">
        <v-btn type="submit" color="primary" class="hw-100 rounded-right">
          Add
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: "TodoForm",
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    submit() {
      if (this.newTodo) {
        this.$emit("addTodo", this.newTodo);
        this.newTodo = "";
      }
    },
  },
};
</script>
