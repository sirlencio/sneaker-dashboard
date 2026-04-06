<template>
  <div class="h-100 w-full flex justify-center">
    <Pie :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useSneakersStore } from '@/stores/sneakers';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'vue-chartjs';

ChartJS.register(ArcElement, Tooltip, Legend);

const sneakerStore = useSneakersStore();

const chartData = computed(() => {

  const brands = Object.keys(sneakerStore.brandsCount);
  const counts = Object.values(sneakerStore.brandsCount);

  return {
    labels: brands,
    datasets: [
      {
        backgroundColor: [
          '#2563eb',
          '#10b981',
          '#f59e0b',
          '#ef4444',
          '#8b5cf6',
          '#ec4899',
        ],
        hoverOffset: 20,
        data: counts
      }
    ]
  };
});

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        usePointStyle: true,
        padding: 20
      }
    }
  }
};
</script>