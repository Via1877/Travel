<template>
  <div>
    <el-cascader
      :options="cityOptions"
      :value="city"
      @change="changeProvince"
      change-on-select
    >
      <template slot-scope="{ node, data }">
        <span>{{ data.label }}</span>
        <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
      </template>
    </el-cascader>
  </div>
</template>
<script>
import cityOptions from './js/city_data2017_element.js'
export default {
  name: 'CitySelect',
  daata () {
    return {
      cityOptions: {},
    }
  },
  created: {
    getCityInfo () {
      console.log(this.cityOptions)
    }
    
  }
}
</script>
<style lang="stylus" scoped>
</style>
