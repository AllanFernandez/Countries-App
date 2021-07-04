<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="container mx-auto px-4 pt-4">
      <h1 class="text-4xl font-black text-center mb-4">Countries App</h1>
      <RegionFilter/>
      <SearchInput/>
      <CountryList />
    </div>
  </div>
</template>

<script>
import CountryList from '@/components/CountryList';
import RegionFilter from '@/components/RegionFilter';
import SearchInput from '@/components/SearchInput';


export default {
  name: "App",
  components: {
    CountryList,
    RegionFilter,
    SearchInput
  }
};
</script>

<style>
</style>
