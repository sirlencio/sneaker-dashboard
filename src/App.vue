<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const getActiveClass = (hash: string) => {
    const isActive = route.hash === hash || (route.hash === '' && hash === '#charts');
    return isActive 
        ? 'bg-white text-blue-600 shadow-sm border-transparent' 
        : 'text-gray-500 hover:text-gray-700 border-transparent opacity-70';
};
</script>

<template>
    <div class="min-h-screen bg-[#f8f9fa]">
        <nav class="sticky top-0 bg-white/70 backdrop-blur-xl z-20 border-b border-gray-100">
            <div class="max-w-7xl mx-auto px-6 py-4 flex items-center">
                
                <div class="flex bg-gray-100/80 p-1 rounded-2xl gap-1">
                    <RouterLink to="/#charts"
                        class="px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 border"
                        :class="getActiveClass('#charts')">
                        Gráficos
                    </RouterLink>

                    <RouterLink to="/#table"
                        class="px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 border"
                        :class="getActiveClass('#table')">
                        Inventario
                    </RouterLink>

                    <RouterLink to="/#actions"
                        class="px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 border"
                        :class="getActiveClass('#actions')">
                        Acciones
                    </RouterLink>
                </div>

                <div class="ml-auto">
                    <RouterLink v-if="$route.name !== 'form'" to="/edit"
                        class="bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all flex items-center gap-2 text-sm font-bold">
                        <span class="text-lg leading-none">+</span> Nueva Zapa
                    </RouterLink>

                    <RouterLink v-else to="/"
                        class="bg-white border border-gray-200 text-gray-600 px-5 py-2.5 rounded-xl hover:bg-gray-50 transition-all text-sm font-bold">
                        ← Volver al Dashboard
                    </RouterLink>
                </div>

            </div>
        </nav>

        <main class="max-w-7xl mx-auto px-6 py-10">
            <RouterView v-slot="{ Component }">
                <transition 
                    enter-active-class="transition duration-300 ease-out"
                    enter-from-class="transform translate-y-4 opacity-0"
                    enter-to-class="transform translate-y-0 opacity-100"
                    leave-active-class="transition duration-200 ease-in"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                    mode="out-in"
                >
                    <component :is="Component" />
                </transition>
            </RouterView>
        </main>
    </div>
</template>