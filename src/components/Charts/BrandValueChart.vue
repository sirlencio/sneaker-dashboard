<template>
  <div class="h-100 w-full">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useSneakersStore } from '@/stores/sneakers';
import { 
  Chart as ChartJS, 
  Title, 
  Tooltip, 
  Legend, 
  BarElement, 
  CategoryScale, 
  LinearScale 
} from 'chart.js';
import { Bar } from 'vue-chartjs';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const sneakerStore = useSneakersStore();

const chartData = computed(() => {
  const vByBrand = sneakerStore.sneakers.reduce((acc, s) => {
    const value = s.price * s.stock;
    acc[s.brand] = (acc[s.brand] || 0) + value;
    return acc;
  }, {} as Record<string, number>);

  return {
    labels: Object.keys(vByBrand),
    datasets: [
      {
        label: 'Valor de Inventario (€)',
        backgroundColor: '#10b981',
        borderRadius: 8, 
        data: Object.values(vByBrand)
      }
    ]
  };
});

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      callbacks: {
        label: (context: any) => ` ${context.parsed.y}€`
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: (value: any) => `${value}€`
      }
    }
  }
};
</script>