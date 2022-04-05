<script setup>

</script>

<template>
  <main>
    <div class="container px-6 h-screen-86 mx-auto text-center flex items-center">
            <div class="max-w-lg mx-auto">
                <h1 class="text-5xl leading-tight font-bold text-black md:text-7xl">Verifikasi data penerima <span class="text-secondary-600">Bansos</span> dengan mudah</h1>
                <p class="text-lg leading-7 mt-6 font-regular text-black">Aplikasi pendataan penerima Bansos untuk menunjang pejabat RW di seluruh Jawa Barat.</p>
                <router-link to="/formulir">
                  <button
                    class="w-full sm:px-6 py-4 mt-6 text-lg font-medium leading-5 text-center text-white capitalize bg-primary-600 transition-colors duration-200 transform rounded-lg hover:bg-primary-500 md:mx-0 md:w-auto focus:outline-none">
                    Isi Formulir
                  </button>
                </router-link>
            </div>
        </div>
  </main>
</template>
