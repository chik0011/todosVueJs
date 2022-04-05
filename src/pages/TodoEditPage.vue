<template>
  <div>
    <div class="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10 mt-8">
      <router-link to="/todos">
          <button class="flex justify-start bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Retour</button>
      </router-link>
    </div>
    
    <div class="flex items-center justify-center">
      <div class="w-full flex items-center justify-center font-sans">
        <div class="rounded p-6 m-4 w-full lg:w-3/4 lg:max-w-lg overflow-y-auto">
          <todo-element :isEditable="true" :todo="$store.state.todos.find(todo => todo._id === $route.params.id)" />
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
import TodoElement from '@/components/TodoElement';

export default {
  components: {
    TodoElement
  },
}
</script>