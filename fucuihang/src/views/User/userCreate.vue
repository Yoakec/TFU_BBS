<template>
<div style="width: 69.2308rem;">
    <h1>{{props.id ? "编辑":"创建"}}用户</h1>
     <el-form :model="form" label-width="9.2308rem">
    <el-form-item label="学号" width="100px">
      <el-input v-model="form.studentID" />
    </el-form-item>
      <el-form-item label="密码">
      <el-input v-model="form.password" />
    </el-form-item>
          <el-form-item label="年纪">
      <el-input v-model="form.grade" />
    </el-form-item>
    <el-form-item label="性别">
      <el-radio-group v-model="form.gender">
        <el-radio label="男" />
        <el-radio label="女"/>
      </el-radio-group>
    </el-form-item>
     <el-form-item label="个性签名">
      <el-input v-model="form.signature" type="textarea" />
    </el-form-item>
        <el-form-item label="昵称">
      <el-input v-model="form.nickname" />
    </el-form-item>
    <el-form-item label="手机号">
      <el-input v-model="form.phone" />
    </el-form-item>
        <el-form-item label="头像">
              <el-upload
    class="avatar-uploader"
    action="http://localhost:3000/upload"
    :show-file-list="false"
    :on-success="(response:any) => form.avator = response"
    :before-upload="beforeAvatarUpload"
  >
    <img v-if="form.avator" :src="form.avator" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
  </el-upload>
    </el-form-item>
        <el-form-item label="背景图">
  <el-upload
    class="avatar-uploader"
    action="http://localhost:3000/upload"
    :show-file-list="false"
    :on-success="(response:any) => form.banner = response"
    :before-upload="beforeAvatarUpload"
  >
    <img v-if="form.banner" :src="form.banner" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
  </el-upload>
    </el-form-item>
    
    <el-form-item>
      <el-button type="primary" size="default" @click="onSubmit">提交</el-button>

    </el-form-item>
    
  </el-form>
</div>
</template>

<script lang="ts" setup>

import { reactive } from 'vue'
import {postusers,putusers} from '@/util/userApi';
import { type UploadProps, ElMessage } from 'element-plus';
import {Plus} from '@element-plus/icons-vue'
const props = defineProps<{
    id:string
}>()

// do not use same name with ref
const form = reactive({
  studentID: '',
  password: '',
  grade: '',
  gender: '',
  signature: '',
  nickname: '',
  phone: '',
  banner:'',
  avator:'',
})

const onSubmit = () => {
    postusers(form).then(data => {
        console.log(data);
    })
}


const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}

</script>

<style lang="scss" scoped>

</style>
