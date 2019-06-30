<template>
  <div>
    <el-cascader
      size="medium"
      :options="options"
      v-model="selectedOptions"
      change-on-select
      prop="city"
    >
      <template slot-scope="{ node, data }">
        <span>{{ data.label }}</span>
        <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
      </template>
    </el-cascader>
  </div>
</template>
<script>
import { regionData } from 'element-china-area-data'
export default {
  name: 'CitySelect',
  data () {
    return {
      options: regionData,
      selectedOptions: []
    }
  }
}
</script>
<style  scoped>
  *{
    touch-action: none;

  }
</style>
