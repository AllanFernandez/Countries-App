import { createStore } from 'vuex'

export default createStore({
  state: {
    countries: [],
    filteredCountries: []
  },
  mutations: {
    setCountries(state, payload) {
      state.countries = payload;
    },
    setFilteredCountries(state, payload) {
      state.filteredCountries = payload;
    },
  },
  actions: {
    async getCountries({ commit }) {
      try {
        const response = await fetch('https://restcountries.eu/rest/v2/all');
        const data = await response.json();
        commit('setCountries', data);
      } catch (error) {
        console.log(error);
      }
    },
    filterRegion({commit, state}, region) {
      if(region !== 'All') {
        const data = state.countries.filter((country) => country.region.includes(region));
        commit('setFilteredCountries', data);
      } else {
        commit('setFilteredCountries', state.countries);
      }
    },
    filterBySearchText({commit, state}, searchText) {
      const query = searchText.toLowerCase().trim();
      if(query && query.length){
        const data =  state.countries.filter((country) => {
          const countryName = country.name.toLowerCase();
          return countryName.includes(query);
        })
        commit('setFilteredCountries', data)
      } else {
        commit('setFilteredCountries', state.countries);
      }
    }
  },
  getters: {
    rankingCountriesByPopulation(state) {
      return state.filteredCountries.sort((a, b) => a.population <b.population ? 1 : -1)
    }
  },
  modules: {
  }
})
