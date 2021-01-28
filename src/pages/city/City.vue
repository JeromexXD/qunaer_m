<template>
  <div>
    <city-header></city-header>
    <city-list :cities="cities"
               :hotCities="hotCities"></city-list>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CityList from './components/List'

import axios from 'axios'
export default {
  name: 'City',
  components: {
    'city-header': CityHeader,
    'city-list': CityList
  },
  data () {
    return {
      cities: {},
      hotCities: []
    }
  },
  methods: {
    getCityData () {
      axios.get('api/city.json')
      .then(this.getCityDataSuccess)
      .catch((err) => {
        console.log(err);
      })
    },
    getCityDataSuccess (res) {
      var data = res.data.data;
      this.cities = data.cities;
      this.hotCities = data.hotCities;
    }
  },
  mounted () {
    this.getCityData();
  }
}
</script>

<style lang="stylus" scoped>

</style>