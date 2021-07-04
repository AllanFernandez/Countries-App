<template>
  <div class="relative bg-white py-6 px-6 rounded-3xl my-4 shadow-xl">
    <div
      class="text-white flex items-center absolute rounded-full  shadow-xl left-4 -top-6"
    >
      <img class="object-cover rounded-full" :src="flag" style="width: 70px; height:70px;"/>
    </div>
    <div class="mt-8">
      <p class="text-xl font-semibold my-2">{{ name }}</p>
      <div class="flex space-x-2 text-gray-400 text-sm mb-3">
        <strong>Capital</strong>
        <p>{{ capital }}</p>
      </div>
      <div class="flex space-x-2 text-gray-400 text-sm mb-3">
        <!-- svg  -->
        <strong>Region</strong>
        <p>{{ region }}</p>
      </div>
      <div class="flex space-x-2 text-gray-400 text-sm mb-3">
        <!-- svg  -->
        <strong>Population</strong>
        <p>{{ numberFormat(population) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    country: {
      type: Object,
      required: true
    }
  },
  setup(props, context) {
    const { name, flag, population, capital, region } = props.country;

    const numberFormat = (num) => {
      return new Intl.NumberFormat("de-DE").format(num);

    }

    return {
      name,
      flag,
      population,
      capital,
      region,
      numberFormat
    };
  },
};
</script>
