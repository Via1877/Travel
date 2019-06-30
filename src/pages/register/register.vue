<template>
  <el-form class="register-form"
           :model="ruleForm"
           :rules="rules"
           ref="ruleForm"
  >
    <el-form-item label="姓名" prop="name">
      <el-input type="name" class="register-form-name" v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="ruleForm.pass" show-password></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input type="password" v-model="ruleForm.checkPass" show-password></el-input>
    </el-form-item>
    <el-form-item label="出生日期" prop="birthday">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.birthday" style="width: 100%;"></el-date-picker>
    </el-form-item>
    <el-form-item label="性别" prop="sex">
      <el-radio-group v-model="ruleForm.sex">
        <el-radio label="男"></el-radio>
        <el-radio label="女"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="城市" prop="selectedOptions">
      <el-cascader
      size="medium"
      :options="options"
      v-model="ruleForm.selectedOptions"
      change-on-select
      :clearable="true"
      filterable
    >
      <template slot-scope="{ node, data }">
        <span>{{ data.label }}</span>
        <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
      </template>
    </el-cascader>
    </el-form-item>
    <el-form-item label="申请理由" prop="desc">
      <el-input type="textarea" v-model="ruleForm.desc"></el-input>
    </el-form-item>
    <el-form-item label="是否公开资料" prop="delivery">
      <el-switch v-model="ruleForm.delivery"></el-switch>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleForm)">确认申请</el-button>
      <router-link to="/">
        <el-button class="cancle-btn">取消申请</el-button>
      </router-link>
    </el-form-item>
  </el-form>
</template>

<script>
import { regionData } from 'element-china-area-data'
export default {
  name: 'Register',
  data () {
    //  验证密码
    let validatePass = (rule, value, callback) => {
      let reg = /^[a-zA-Z][a-zA-Z0-9_-]{5,19}$/
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (value.length < 5) {
        callback(new Error('密码长度最小6位'))
      } else if (!reg.test(value)) {
        callback(new Error('请输入字母/数字'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    // <!--二次验证密码-->
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      options: regionData,
      ruleForm: {
        name: '',
        pass: '',
        checkpass: '',
        birthday: '',
        sex: '',
        delivery: false,
        type: [],
        desc: '',
        selectedOptions: []
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' }
        ],
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ],
        birthday: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        sex: [
          { required: true, message: '请选择', trigger: 'change' }
        ],
        selectedOptions: [
          { type: 'array', required: true, message: '请选择', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submitForm (form) {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          setTimeout(() => {
            alert('注册成功')
          }, 400)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>
<style scoped>
  *{
    touch-action: none;
  }
  .register-form{
    width: 80%;
    margin: 0 auto;
    padding-top: 1rem;

  }
  .cancle-btn{
    float: right;

  }
</style>
