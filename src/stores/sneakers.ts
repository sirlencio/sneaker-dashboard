import { sneakersTestData } from "@/data/testData"
import type { Sneaker } from "@/types/sneakers"
import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useSneakersStore = defineStore('sneakers', () => {
    const sneakers = ref<Sneaker[]>(sneakersTestData)

    function addSneaker(sneaker: Sneaker) {
        sneakers.value.push(sneaker)
    }

    function removeSneaker(id: number){
        sneakers.value = sneakers.value.filter(sneakers => sneakers.id !== id)
    }

    function updateSneaker(updatedSneaker: Sneaker) {
        const index = sneakers.value.findIndex(sneakers => sneakers.id === updatedSneaker.id)
        if (index !== -1) {
            sneakers.value[index]= updatedSneaker
        }
    }

    const totalValue = computed(() => {
        return sneakers.value.reduce((total, s) => total + s.price, 0)
    })

    const brandsCount = computed(() => {
        const counts: Record<string, number> = {}
        sneakers.value.forEach(s => {
            counts[s.brand] = (counts[s.brand] || 0) + 1
        })
        return counts
    })

    const sneakersWithNoStock = computed(() => {
        return sneakers.value.filter(s => s.stock === 0)
    })

    return { sneakers, addSneaker, removeSneaker, updateSneaker, totalValue, brandsCount, sneakersWithNoStock }
})