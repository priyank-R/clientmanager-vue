<template>
   <table border="2" class="table-class">
       <tr>
           <th>Sr No.</th>
           <th v-for="(header,index) in table_headers" v-bind:key="header.name+index">
               {{header.name }}
           </th>
       </tr>
       <tr v-for="(item,index) in table_data" :key="item">
          <td v-for="header in table_headers" :key="item+header"></td>
           <td>{{index}}</td>
           <td v-for="(value,key) in item" :key="value+key">
                <!-- <slot v-if="isCustomProperty(index)" name="property-3" >Content</slot> -->
                <p v-if="isCustomProperty(index)" name="property-3" >Content</p>
                <p v-else>
                {{value}}
                </p>
               </td>
           
        </tr>
   </table>
</template>

<script>
export default {
props:{
    table_data: Array,
    table_headers: Array,
    
},
computed: {
    totalRecords(){
        return this.table_data.length
    }
},
data:function(){
    return{
        custom_property_indices: []
    }
},
methods:{
    isCustomProperty(index){
       return this.custom_property_indices.includes(index)
    }
},
created: function(){ //All the initial manipulation of data
    console.log('created !', this.table_data)
    this.table_headers.forEach((item,index)=>{
        if(item.hasOwnProperty('custom')){
            this.custom_property_indices.push(index)
        }
    })

}
}
</script>

<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
th,td {
    padding: 10px;
    text-align: center;
}
</style>