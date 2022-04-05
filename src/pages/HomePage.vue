<template>
  <div class="container mx-auto flex flex-col items-center py-12 sm:py-24">
    <div class="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
      <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
        Organisez votre quotidien avec 
        <span class="text-blue-500">DoTodo</span>
      </h1>
      <p class="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">Ayez l'esprit tranquille en ajoutant toutes vos tâches à votre to-do list (où que vous soyez ou quel que soit l'appareil utilisé).</p>
    </div>
    <div class="flex justify-center items-center">
      <router-link to="/todos">
        <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-blue-500 transition duration-150 ease-in-out hover:bg-blue-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-blue-500 py-2 sm:py-4 text-sm">Accéder à votre Todo</button>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomePage"
  }
</script>