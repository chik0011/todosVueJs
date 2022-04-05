<template>
  <div class="flex items-center justify-center">
    <div class="w-full flex items-center justify-center font-sans">
      <div class="rounded p-6 m-4 w-full lg:w-3/4 overflow-y-auto">
        <div class="mb-5">
          <todo-input />
        </div>
        <todo-sumup />
        <div>
          <todo-element v-for="todo in paginatedTodos" :key="todo.id" :todo="todo" />
        </div>
        <todo-pagination />
      </div>
    </div>
  </div>
</template>


<script>
import TodoInput from "@/components/TodoInput.vue";
import TodoSumup from "@/components/TodoSumup.vue";
import TodoElement from "@/components/TodoElement.vue";
import TodoPagination from "@/components/TodoPagination.vue";
import axios from 'axios';

// import { mapGetters } from "vuex";

export default {
  components: {
    TodoInput,
    TodoSumup,
    TodoElement,
    TodoPagination
  },
  computed: {
    paginatedTodos() {
      return this.$store.getters.paginatedTodos;
    }
    // ...mapGetters([
    //   "paginatedTodos",
    // ])
  },
  // Fetches posts when the component is created.
  created() {
    axios.get(`http://localhost:3000/api/v1/todos`) 
    .then(response => {
      // JSON responses are automatically parsed.
      let todos = response.data.reverse();
      //this.$store.state = todos;
      this.$store.commit('initTodos', todos)
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>
