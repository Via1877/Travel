<template>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="ruleForm">
      <el-form-item label="姓名" prop="name">
        <el-input type="name" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item class="form-btn-group">
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <router-link tag="div" class="register-btn" to="/register">
          <el-button @click="resetForm('ruleForm')">注册</el-button>
        </router-link>
      </el-form-item>
    </el-form>
</template>
<script>

export default {
  name: 'Login',
  components: {
  },
  data () {
    return {
      ruleForm: {
        pass: '',
        name: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入登录名', trigger: 'blur' },
          { min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' }
        ],
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          alert('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="stylus">
  *
    touch-action: none
  .ruleForm
    padding-top: 3rem
    width: 80%
    margin: 0 auto
    .form-btn-group
      margin-top: .8rem
      .register-btn
        float: right
</style>
