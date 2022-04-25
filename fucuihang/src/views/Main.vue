<template>
<div class="common-layout">
    <el-container>
      <el-header> <AdminHeader/> </el-header>
      <el-container>
        <el-aside width="250px"><AdminAside/> </el-aside>
        <el-container>
          <el-main> <router-view></router-view> </el-main>
          <el-footer> <AdminFooter/> </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
import AdminAside from './AdminAside.vue'
import AdminFooter from './AdminFooter.vue'
import AdminHeader from './AdminHeader.vue'

</script>

<style lang="scss" scoped>

</style>
