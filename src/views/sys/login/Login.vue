<template>
	<div class="login_container">
		<div class="login_box">
			<!-- 登陆表单区域 -->
			<el-form ref="loginFormRef" :model="loginFrom" :rules="LoginfromRules"   label-width="0px" class="login_form">
				<!-- 用戶名 -->
				<el-form-item prop="username">
					<el-input  v-model="loginFrom.username">
					</el-input>
				</el-form-item>
				<!-- 密碼 -->
				<el-form-item prop="password">
					<el-input v-model="loginFrom.password">
					</el-input>
				</el-form-item>
				<!-- 按鈕 -->
				<el-form-item  class="btns">
					<el-button type="primary">登录</el-button>
					<el-button type="info" @click="resetLoginForm">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Login',
  components: {
  },
  data() {
	  return {
		  loginFrom: {
			  username: 'yaoyuan',
			  password: '1225670760'
		  },
		  LoginfromRules: {
			  // 验证用户名是否合法
			  username: [
				  {required: true, message: '请输入登录名称', trigger: 'blur'},
				  {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}
			  ],
			  // 验证密码是否合法
			  password: [
				  {required: true, message: '请输入登录密码', trigger: 'blur'},
				  {min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur'}
			  ]
		  }
	  }
  },
  methods: {
	  resetLoginForm(){
	  	this.$message("重置");
		  this.$refs.loginFormRef.resetFields();
	  }
  },
  computed: {
  },
  mounted() {
  },
}
</script>

<style lang="less" scoped>

</style>
