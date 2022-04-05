<script>
export default {
    data: () => ({
        navs: [{
                name: 'Beranda',
                route: '/'
            },
            {
                name: 'Formulir',
                route: '/formulir'
            }
        ],
    })
}
</script>

<template>
    <nav class="bg-white shadow">
        <div class="container px-6 py-4 mx-auto flex justify-between items-center">
            <div class="flex items-center justify-between">
                <div>
                    <router-link to="/" class="text-2xl font-bold text-gray-800 transition-colors duration-200 transform lg:text-3xl hover:text-gray-700">DataBansos</router-link>
                </div>
            </div>
            
            <div class="items-center justify-center flex">
                <div class="flex flex-row" v-for="(nav, index) in navs" :key="index">
                    <router-link :to="nav.route" 
                    class="ml-5 text-sm font-medium text-black transition-colors duration-200 transform hover:text-blue-500"
                    active-class="border-b-2 border-secondary-500">{{ nav.name }}</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>