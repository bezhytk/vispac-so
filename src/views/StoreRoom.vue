<template>
  <div>
  <div class="card">
    <div class="card-header">
      <h4>Store Room</h4>
    </div>
    <div class="card-body">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th rowspan="2">ID.</th>
            <th rowspan="2">Item Code</th>
            <th rowspan="2">Color</th>
            <th rowspan="2">Shade</th>
            <th colspan="2">Base Factor</th>
            <th colspan="2">Packing</th>
            <th colspan="2">Invetory</th>
          </tr>
          <tr>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Quantity</th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(x, idx) in this.storeroom" :key="idx">
            <td align="center">{{ x.id }}.</td>
            <td>{{ x.itemCode }}</td>
            <td>{{ x.color }}</td>
            <td>{{ x.shade }}</td>
            <td>{{ x.baseFactor }}</td>
            <td>SQM</td>
            <td>{{ x.packingQuantity }}</td>
            <td>Roll</td>
            <td>{{ x.inventoryQuantity }}</td>
            <td>SQM</td>
          </tr>
        </tbody>
      </table>
    </div>                        
  </div>
</div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'storeroom',
  data() {
    return {
      storeroom: []
    }
  },
  mounted() {
    this.retrieve()
  },
  methods: {
    retrieve(){
      axios.get('http://vongvichai.in.th:9000/inventories/summary', {
        headers: {
          'X-API-KEY': 'MySecretKey'
        }
      }).then(res => {
        this.storeroom = res.data
      })
    }
  }
}
</script>

