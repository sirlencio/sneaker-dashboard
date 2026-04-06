<template>
  <div class="h-125 w-full">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { useSneakersStore } from '@/stores/sneakers';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { computed } from 'vue';
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const sneakerStore = useSneakersStore();

const chartData = computed(() => {
  return {
    labels: sneakerStore.sneakers.map(s => s.name), 
    datasets: [
      {
        label: 'Stock Disponible',
        backgroundColor: '#2563eb',
        borderRadius: 6,
        data: sneakerStore.sneakers.map(s => s.stock)
      }
    ]
  }
});

const chartOptions = {
  indexAxis: 'y' as const,
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Unidades en Almacén'
      }
    }
  }
};
</script>