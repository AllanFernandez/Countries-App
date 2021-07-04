<template>
  <div class="my-5 relative rounded-md shadow-sm">
    <div
      class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
    >
      <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
        />
      </svg>
    </div>
    <input
      type="text"
      class="focus:ring-gray-800 focus:border-gray-800 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
      placeholder="Search something..."
      v-model="searchText"
      @input="searchHandle"
    />
  </div>
</template>

<script>
import _ from 'lodash';
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup(props, context) {

    const searchText = ref(null);
    const store = useStore();
    const searchHandle = _.debounce(() => {
      store.dispatch('filterBySearchText',searchText.value);
    }, 300)

    return {
      searchText,
      searchHandle
    };
  },
};
</script>