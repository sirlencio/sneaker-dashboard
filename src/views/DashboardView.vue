<script setup lang="ts">
import ChartsComponent from '@/components/ChartsComponent.vue';
import TableComponent from '@/components/TableComponent.vue';
import ActionsComponent from '@/components/ActionsComponent.vue';
import type { Sneaker } from '@/types/sneakers';
import { ref } from 'vue';

const selectedSneaker = ref<Sneaker | null>(null);

const handleSelect = (sneaker: Sneaker) => {
  selectedSneaker.value = (selectedSneaker.value?.id === sneaker.id) ? null : sneaker;
};

const clearSelection = () => {
  selectedSneaker.value = null;
};
</script>

<template>
  <div class="space-y-12 p-6">

    <section id="charts">
      <ChartsComponent />
    </section>

    <section id="table">
      <TableComponent 
      :selectedId="selectedSneaker?.id"
      @select="handleSelect"/>
    </section>

    <section id="actions">
      <ActionsComponent :sneaker="selectedSneaker" @deleted="clearSelection"/>
    </section>
  </div>
</template>