<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useSneakersStore } from '@/stores/sneakers';
import type { Sneaker } from '@/types/sneakers';

const props = defineProps<{
  sneaker: Sneaker | null
}>();

const emit = defineEmits(['deleted']);

const router = useRouter();
const sneakerStore = useSneakersStore();

const isModalOpen = ref(false);
const isSelected = computed(() => !!props.sneaker);

const handleEdit = () => {
  if (props.sneaker) {
    router.push({ name: 'form', params: { id: props.sneaker.id } });
  }
};

const confirmDelete = () => {
  if (props.sneaker) {
    sneakerStore.removeSneaker(props.sneaker.id);
    isModalOpen.value = false;
    emit('deleted');
  }
};
</script>

<template>
  <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex justify-between items-center">
    <div>
      <h3 class="text-lg font-bold text-gray-800">Acciones rápidas</h3>
      <p class="text-sm text-gray-500">
        {{ isSelected ? `Seleccionado: ${sneaker?.name}` : 'Selecciona una zapatilla en la tabla' }}
      </p>
    </div>

    <div class="flex gap-4">
      <button 
        @click="handleEdit"
        :disabled="!isSelected"
        class="px-6 py-2 rounded-xl font-medium transition-all"
        :class="isSelected ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-100 text-gray-400 cursor-not-allowed'"
      >
        Modificar
      </button>

      <button 
        @click="isModalOpen = true"
        :disabled="!isSelected"
        class="px-6 py-2 rounded-xl font-medium border-2 transition-all"
        :class="isSelected ? 'border-red-600 text-red-600 hover:bg-red-50' : 'border-gray-200 text-gray-300 cursor-not-allowed'"
      >
        Eliminar
      </button>
    </div>

    <Teleport to="body">
      <div v-if="isModalOpen" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl">
          <h3 class="text-xl font-bold mb-2">¿Estás seguro?</h3>
          <p class="text-gray-600 mb-6">Esta acción eliminará <strong>{{ sneaker?.name }}</strong> de forma permanente.</p>
          
          <div class="flex gap-3">
            <button @click="isModalOpen = false" class="flex-1 px-4 py-2 bg-gray-100 rounded-xl font-medium">Cancelar</button>
            <button @click="confirmDelete" class="flex-1 px-4 py-2 bg-red-600 text-white rounded-xl font-medium">Eliminar</button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>