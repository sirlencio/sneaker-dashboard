<script setup lang="ts">
import { useSneakersStore } from '@/stores/sneakers';
import type { Sneaker } from '@/types/sneakers';

const sneakerStore = useSneakersStore();

defineProps<{ selectedId?: number }>();

const emit = defineEmits<{
  (e: 'select', sneaker: Sneaker): void
}>();
</script>

<template>
  <div class="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
    <div class="p-6 border-b border-gray-50 flex justify-between items-center">
      <h2 class="text-xl font-bold text-gray-800">Inventario de Zapatillas</h2>
      <span class="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full">
        {{ sneakerStore.sneakers.length }} Modelos
      </span>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-gray-50/50">
            <th class="px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">Modelo</th>
            <th class="px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">Marca</th>
            <th class="px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wider text-right">Precio</th>
            <th class="px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wider text-center">Stock</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
          <tr 
            v-for="sneaker in sneakerStore.sneakers" 
            :key="sneaker.id"
            @click="emit('select', sneaker)" 
            :class="[
            'cursor-pointer border-l-4 transition-all',
            selectedId === sneaker.id ? 'bg-blue-50 border-blue-600' : 'border-transparent hover:bg-gray-50'
            ]"
        >
            <td class="px-6 py-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-gray-100 overflow-hidden shrink-0">
                  <img v-if="sneaker.imageUrl" :src="sneaker.imageUrl" :alt="sneaker.name" class="w-full h-full object-cover">
                  <div v-else class="w-full h-full flex items-center justify-center text-gray-400">👟</div>
                </div>
                <span class="font-medium text-gray-900">{{ sneaker.name }}</span>
              </div>
            </td>
            <td class="px-6 py-4">
              <span class="px-2 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-medium uppercase">
                {{ sneaker.brand }}
              </span>
            </td>
            <td class="px-6 py-4 text-right font-mono text-gray-700">
              {{ sneaker.price }}€
            </td>
            <td class="px-6 py-4 text-center">
              <span :class="[
                'px-2 py-1 rounded-full text-xs font-bold',
                sneaker.stock === 0 ? 'bg-red-100 text-red-600' : 
                sneaker.stock < 5 ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'
              ]">
                {{ sneaker.stock }} uds
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>