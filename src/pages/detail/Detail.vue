<template>
  <div>
    <detail-banner :sightName="sightName"
                   :bannerImage="bannerImage"
                   :galleryImages="galleryImages"></detail-banner>
    <detail-header :sightName="sightName"></detail-header>
    <detail-list :categoryList="categoryList"></detail-list>
    <div class="container"></div>
  </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    'detail-banner': DetailBanner,
    'detail-header': DetailHeader,
    'detail-list': DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImage: '',
      galleryImages: [],
      categoryList: []
    }
  },
  methods: {
    getDetailData () {
      axios.get('api/detail.json?id=' + this.$route.params.id)
        .then(this.getDetailDataSuccess)
        .catch((err) => {
          console.log(err);
        })
    },
    getDetailDataSuccess (res) {;
      var { data } = res.data;
      this.sightName = data.sightName;
      this.bannerImage = data.bannerImage;
      this.galleryImages = data.galleryImages;
      this.categoryList = data.categoryList;
    }
  },
  activated () {
    this.getDetailData();
  }
}
</script>

<style lang="stylus" scoped>
.container {
  height: 30rem;
}
</style>