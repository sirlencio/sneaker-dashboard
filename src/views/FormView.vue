<script setup lang="ts">
import { useSneakersStore } from '@/stores/sneakers';
import type { Sneaker } from '@/types/sneakers';
import { onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'; 

const route = useRoute();
const formRef = ref<HTMLFormElement | null>(null);
const router = useRouter();
const sneakerStore = useSneakersStore();

const isEditing = ref(false);

const getInitialState = (): Sneaker => ({
    id: Date.now(),
    name: '',
    brand: '',
    price: 0,
    stock: 0,
    imageUrl: '',
});

const sneaker = reactive(getInitialState());

function onSubmit() {
    if (!sneaker.name || !sneaker.brand || sneaker.price <= 0) {
        alert('Por favor, rellena los campos obligatorios');
        return;
    }
    
    if (isEditing.value) {
        sneakerStore.updateSneaker({ ...sneaker });
    } else {
        sneakerStore.addSneaker({ ...sneaker });
    }
    
    Object.assign(sneaker, getInitialState());
    formRef.value?.reset();

    router.push('/#table');
}

onMounted(() => {
    const id = route.params.id;
    if (id) {
        const existingSneaker = sneakerStore.sneakers.find(s => s.id === Number(id));
        
        if (existingSneaker) {
            isEditing.value = true;
            Object.assign(sneaker, existingSneaker);
        } else {
            router.push('/');
        }
    }
});
</script>

<template>
    <div class="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">
            {{ isEditing ? 'Editar Zapatilla' : 'Añadir Nueva Zapatilla' }}
        </h2>        
        <form @submit.prevent="onSubmit" ref="formRef" class="space-y-5">
            <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nombre de la zapatilla</label>
                <input type="text" id="name" v-model="sneaker.name" placeholder="Ej. Air Max 90"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
            </div>

            <div>
                <label for="brand" class="block text-sm font-medium text-gray-700 mb-1">Marca</label>
                <input type="text" id="brand" v-model="sneaker.brand" placeholder="Ej. Nike"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label for="price" class="block text-sm font-medium text-gray-700 mb-1">Precio (€)</label>
                    <input type="number" id="price" v-model="sneaker.price"
                        class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                </div>
                <div>
                    <label for="stock" class="block text-sm font-medium text-gray-700 mb-1">Stock disponible</label>
                    <input type="number" id="stock" v-model="sneaker.stock"
                        class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                </div>
            </div>

            <div>
                <label for="imageUrl" class="block text-sm font-medium text-gray-700 mb-1">URL de la imagen</label>
                <input type="text" id="imageUrl" v-model="sneaker.imageUrl" placeholder="https://..."
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
            </div>

            <div class="pt-4">
                <button type="submit" 
                    class="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transform active:scale-[0.98] transition-all shadow-lg shadow-gray-200">
                    Guardar Zapatilla
                </button>
            </div>
        </form>
    </div>
</template>