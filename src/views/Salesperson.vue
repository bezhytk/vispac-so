<template>
  <div>
  <div class="card">
    <div class="card-header">
      <h4>Salesperson</h4>
    </div>
    <div class="card-body">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th rowspan="2">ID.</th>
            <th rowspan="2">Date Issue</th>
            <th rowspan="2">Item Code</th>
            <th rowspan="2">Color</th>
            <th rowspan="2">Shade</th>
            <th colspan="2">Base Factor</th>
            <th colspan="2">Packing</th>
            <th colspan="2">Inventory</th>
            <th rowspan="2">Order</th>
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
        <tbody v-if="this.inventories.length > 0">
          <tr v-for="(x, idx) in this.inventories" :key="idx">
            <td align="center">{{ x.id }}.</td>
            <td>{{ x.createdAt }}</td>
            <td>{{ x.itemCode }}</td>
            <td>{{ x.color }}</td>
            <td>{{ x.shade }}</td>
            <td>{{ x.baseFactor }}</td>
            <td>SQM</td>
            <td>{{ x.packingQuantity }}</td>
            <td>Roll</td>
            <td>{{ x.inventoryQuantity }}</td>
            <td>SQM</td>
            <td>
              <button type="button" class="btn btn-success">Order</button>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="12">Loading...</td>
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
  name: 'inventories',
  data() {
    return {
      inventories: []
    }
  },
  mounted() {
    this.retrieve()
  },
  methods: {
    retrieve(){
      axios.get('http://vongvichai.in.th:9000/inventories/', {
        headers: {
          'X-API-KEY': 'MySecretKey'
        }
      }).then(res => {
        this.inventories = res.data
      })
    }
  }
}
</script>

