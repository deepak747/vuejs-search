<template>
<div class="container">

  <div class="search-bar">
    <input type="text" v-model="searchQuery.title" placeholder="Search by Title" />
    <input type="text" v-model="searchQuery.category" placeholder="Search by Category" />
    <input type="number" v-model="searchQuery.price" placeholder="Search by Price" />
  </div>

  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Category</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(list, index) in filteredLists" :key="index">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ list.title }}</td>
        <td>{{ list.category }}</td>
        <td>{{ list.price }}</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "table_co",
  data() {
    return {
      total: 0,
      lists: [],
      searchQuery: {
        title: '',
        category: '',
        price: ''
      }
    };
  },

  async mounted() {
    this.getData();
  },

  methods: {
    getData() {
      axios.get('https://dummyjson.com/products').then(res => {
        this.lists = res.data.products;
        console.log("----", this.lists);
      }).catch(error => {
        console.error('Error fetching data:', error);
      })
    },
  },

  computed: {
    filteredLists() {
      return this.lists.filter(list => {
        const titleMatch = list.title.toLowerCase().includes(this.searchQuery.title.toLowerCase());
        const categoryMatch = list.category.toLowerCase().includes(this.searchQuery.category.toLowerCase());
        const priceMatch = this.searchQuery.price === '' || list.price.toString().includes(this.searchQuery.price.toString());
        return titleMatch && categoryMatch && priceMatch;
      });
    }
  }
}
</script>

<style>
.images {
  width: 50px;
}

.el-icon svg {
  cursor: pointer;
}

.search-bar {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
}

.search-bar input {
  padding: 8px;
  box-sizing: border-box;
  flex: 1;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th, .table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #f2f2f2;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: #f9f9f9;
}


 @media (max-width: 768px) {
  .search-bar {
    flex-direction: column;
  }

  .search-bar input {
    margin-bottom: 10px;
  }
}

@media (max-width: 576px) {
  .table th, .table td {
    padding: 4px;
  }

  .search-bar input {
    font-size: 14px;
  }
}


</style>
