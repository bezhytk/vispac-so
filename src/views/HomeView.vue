<template>
  <div>
    <h4>{{ message }}</h4>               
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'inventories',
  data() {
    return {
      message: ''
    }
  },
  mounted() {
    this.retrieve()
  },
  methods: {
    retrieve(){
      axios.get('http://vongvichai.in.th:9000/', {
        headers: {
          'X-API-KEY': 'MySecretKey'
        }
      }).then(res => {
        this.message = res.data
      })
    }
  }
}
</script>
