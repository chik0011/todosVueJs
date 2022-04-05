import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import config from "@/config/page";
import axios from 'axios';

// Create a new store instance.
const store = new Vuex.Store({
  state: {
    page: 1,
    todos: [
    ]
  },
  getters: {
    paginatedTodos(state) {
      return state.todos.slice((state.page - 1) * config.PAGE_SIZE, (state.page - 1) * config.PAGE_SIZE + config.PAGE_SIZE);
    },
    percentageDone(state) {
      return `${state.todos.length > 0 ? (((state.todos.filter(todo => todo.done)).length / state.todos.length) * 100).toFixed(2) : 0}%`;
    },
    maxTodoId(state) {
      return Math.max(...state.todos.map(todo => todo.id));
    }
  },
  mutations: {
    deleteTodo(state, id) {
      state.todos.splice(state.todos.findIndex(todo => todo._id === id), 1);

      console.log(id);
      let apiURL = `http://localhost:3000/api/v1/todos/${id}`;
      axios.delete(apiURL, { data: { id: id }})
    },
    addTodo(state, todo) {
      if (todo.description != "") {
        let apiURL = 'http://localhost:3000/api/v1/todos';
   
        axios.post(apiURL, todo).then((res) => {
          state.todos.unshift(res.data);
        }).catch(error => {
            console.log(error)
        });
      }
    },
    editTodo(state, updatedTodo) {
      const todoToEditIndex = state.todos.findIndex(todo => todo._id === updatedTodo._id);

      let apiURL = `http://localhost:3000/api/v1/todos/${updatedTodo._id}`;
      axios.put(apiURL, { done: updatedTodo.done, description: updatedTodo.description })

      if (todoToEditIndex > -1) state.todos.splice(todoToEditIndex, 1, updatedTodo);
    },
    toggleDone(state, id) {
      const todoToEdit = state.todos.find(todo => todo._id === id);
  
      if (todoToEdit) {
        todoToEdit.done = !todoToEdit.done;

        let apiURL = `http://localhost:3000/api/v1/todos/${todoToEdit._id}`;
        axios.patch(apiURL, { done: todoToEdit.done, id: todoToEdit._id })
      }
    },
    selectPage(state, page) {
      state.page = page;
    },
    initTodos(state, todos) {
      state.todos = todos;
    }
  },
  actions: {
    deleteTodo({commit}, id) {
      commit("deleteTodo", id);
    },
    addTodo({commit, getters}, description) {
      commit("addTodo", {description, _id: getters.maxTodoId + 1, done: false});
    },
    editTodo({commit}, todo) {
      commit("editTodo", todo);
    },
    toggleDone({commit}, id) {
      commit("toggleDone", id);
    },
    selectPage({commit}, page) {
      commit("selectPage", page);
    }
  },
});

export default store;