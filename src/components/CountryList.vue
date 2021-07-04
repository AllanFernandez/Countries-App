<template>
  <div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <CountryCard v-for="country in countries" :key="`country-${country.name}`" :country="country"/>
  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import CountryCard from "@/components/CountryCard";

export default {
  components: {
    CountryCard,
  },
  setup() {
    const store = useStore();

    const countries = computed(() => {
      return store.getters.rankingCountriesByPopulation;
    })

    
    onMounted( async () => {
      await store.dispatch('getCountries');
      store.dispatch('filterRegion', 'All');
    });
    return {
      countries
    };
  },
};
</script>
