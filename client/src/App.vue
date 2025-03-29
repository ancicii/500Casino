<template>
  <v-app>
    <v-container>
      <v-card class="pa-4" elevation="3">
        <v-card-title class="justify-center">
          <h1>To-Do List</h1>
        </v-card-title>

        <v-card-text>
          <todo-form @addTodo="addTodo" />
        </v-card-text>

        <v-divider></v-divider>

        <v-list>
          <v-list-item-group>
            <todo-item
              v-for="todo in allTodos"
              :key="todo._id"
              :todo="todo"
              @updateTodo="checkTodo"
            />
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import { todoService } from "./services/todoService";
import TodoForm from "./components/TodoForm.vue";
import TodoItem from "./components/TodoItem.vue";

export default {
  name: "App",
  components: {
    TodoForm,
    TodoItem,
  },
  data() {
    return {
      allTodos: [],
    };
  },
  created() {
    this.getAllTodos();
  },
  methods: {
    async getAllTodos() {
      try {
        const response = await todoService.getAllTodos();
        this.allTodos = response.data;
      } catch (error) {
        console.error("Error getting todos:", error);
      }
    },

    async addTodo(newTodo) {
      try {
        const response = await todoService.addTodo(newTodo);
        this.allTodos.push(response.data);
      } catch (error) {
        console.error("Error adding new todo:", error);
      }
    },

    async checkTodo(todo) {
      try {
        todo.completed = !todo.completed;
        await todoService.checkTodo(todo._id, todo.completed);
      } catch (error) {
        console.error("Error checking todo:", error);
      }
    },
  },
};
</script>
