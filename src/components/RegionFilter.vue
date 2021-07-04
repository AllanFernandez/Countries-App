<template>
  <div class="flex justify-center my-5">
    <template v-for="(filter, index) in filters" :key="`filter-${filter.code}`">
      <button
          v-if="index === 0"
          class="
            text-white 
            font-bold
            bg-gray-800
            hover:bg-gray-900
            focus:outline-none
            rounded-r-none
            rounded
            px-4 py-2
            border"
            @click="handleFilter(filter.code)"
        >
        {{ filter.label }}
        </button>
        <button
          v-else-if="index > 0 && index < (filters.length - 1)"
          class="
            text-white
            font-bold
            bg-gray-800
            hover:bg-gray-900
            focus:outline-none
            rounded-l-none
            rounded-r-none
            rounded
            px-4 py-2
            border-l-0
            border"
            @click="handleFilter(filter.code)"
        >
          {{ filter.label }}
        </button>
        <button
          v-else-if="index == (filters.length - 1)"
          class="
            text-white 
            font-bold
            bg-gray-800
            hover:bg-gray-900
            focus:outline-none
            rounded-l-none
            rounded
            px-4 py-2
            border"
            @click="handleFilter(filter.code)"
        >
          {{ filter.label }}
        </button>
    </template>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {

    const store = useStore();

    const filters = ref([
      { label: 'AM', code: 'Americas'},
      { label: 'EU', code: 'Europe'},
      { label: 'AS', code: 'Asia'},
      { label: 'OC', code: 'Oceania'},
      { label: 'AF', code: 'Africa'},
      { label: 'ALL', code: 'All'},
    ]);

    const handleFilter = (code) => {
      store.dispatch('filterRegion', code);
    }

    return {
      filters,
      handleFilter
    };
  },
};
</script>
