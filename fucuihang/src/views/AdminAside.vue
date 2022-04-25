<template>
    <div class="ad-aside">
        <el-menu default-active="1" class="el-menu-vertical-demo" router>
            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <User />
                    </el-icon>
                    <span>用户管理</span>
                </template>
                <el-menu-item index="/user/create">
                    编辑用户信息
                </el-menu-item>
                 <el-menu-item index="">
                    用户足迹
                </el-menu-item>
                <el-menu-item index="/user/list">
                    用户列表
                </el-menu-item>
                <el-menu-item index="">
                    角色管理
                </el-menu-item>
                <el-menu-item index="">
                    角色映射
                </el-menu-item>

            </el-sub-menu>
            <el-sub-menu index="2">
                <template #title>
                    <el-icon>
                        <Postcard />
                    </el-icon>
                    <span>帖子管理</span>
                </template>
                <el-menu-item index="">
                    编辑帖子
                </el-menu-item>
                <el-menu-item index="">
                    评论管理
                </el-menu-item>
                <el-menu-item index="">
                    编辑标签
                </el-menu-item>
                <el-menu-item index="">
                    编辑资源图片
                </el-menu-item>
                <el-menu-item index="">
                    帖子列表
                </el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="3">
                <template #title>
                    <el-icon>
                        <Refrigerator />
                    </el-icon>
                    <span>运营管理</span>
                </template>
                <el-menu-item index="">
                    编辑轮播图
                </el-menu-item>
                <el-menu-item index="">
                    轮播图列表
                </el-menu-item>
                 <el-menu-item index="">
                    编辑活动
                </el-menu-item>
                <el-menu-item index="">
                    活动列表
                </el-menu-item>
            </el-sub-menu>
            


        </el-menu>
    </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue'
import {
    User,
    Menu as IconMenu,
    Postcard,
    Refrigerator,
} from '@element-plus/icons-vue'


</script>

<style lang="scss" scoped>
.el-menu-vertical-demo{
    height: 90vh;
}
</style>
