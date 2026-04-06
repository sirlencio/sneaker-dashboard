<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    
    <div class="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center">
      <h3 class="text-lg font-semibold text-gray-800 mb-4 self-start">Distribución por Marca</h3>
      <div class="flex-1 min-h-0 relative">
        <BrandChart />
      </div>
    </div>

    <div class="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
      <h3 class="text-lg font-semibold text-gray-800 mb-4">Valor del Inventario (€)</h3>
      <div class="flex-1 min-h-0 relative">
        <BrandValueChart />
      </div>
    </div>

    <div class="lg:col-span-2 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
      <h3 class="text-lg font-semibold text-gray-800 mb-4">Stock por Modelo</h3>
      <div class="flex-1 min-h-0 relative">
        <StockLevelChart />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import BrandChart from './Charts/BrandChart.vue';
import BrandValueChart from './Charts/BrandValueChart.vue';
import StockLevelChart from './Charts/StockLevelChart.vue';
</script>