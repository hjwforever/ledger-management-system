<template>
	<div class="login_container">
		<div class="login_box">
			<!-- 登陆表单区域 -->
			<el-form ref="loginFormRef" :model="loginFrom" :rules="LoginfromRules"   label-width="0px" class="login_form">
				<!-- 用戶名 -->
				<el-form-item class="el-col-8 el-col-offset-8" prop="username">
						<el-input v-model="loginFrom.username"></el-input>
				</el-form-item>
				<!-- 密碼 -->
				<el-form-item class="el-col-8 el-col-offset-8" prop="password">
					<el-input type="password" v-model="loginFrom.password">
					</el-input>
				</el-form-item>
				<!-- 按鈕 -->
				<el-form-item  class="btns el-col-8 el-col-offset-8">
					<el-button type="primary" @click="login">登录</el-button>
					<el-button type="info" @click="resetLoginForm">重置</el-button>
				</el-form-item>
			</el-form>
			<el-col :span="8" :offset="8">
        <el-button type="success" @click="getUserinfo">获取用户信息</el-button>
			</el-col>
		</div>
	</div>
</template>

<script>
import { login, userInfo } from '@/api/user'
import request from '@/utils/request'
import {setAuth,getAuth} from '../../../utils/auth'
// import _request from 'axios';

export default {
  name: 'Login',
  components: {
  },
  data() {
	  return {
		  loginFrom: {
			  username: 'test',
			  password: '123456'
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
  	login() {
		  login(this.loginFrom)
				  .then((response) => {
				  	console.log(response)
				    console.log(JSON.stringify(response.data));
				    this.$message.success(response.data.msg.toString()+"\n欢迎你,"+response.data.userName.toString());
			  })
			  .catch((error) => {
				  console.log(error);
				  this.$message.success(error.msg.toString()+"    欢迎你， "+error.data.userName)
			  });
	  },
    getUserinfo () {
  		let userDetails = null;
	    userInfo()
      .then(res => {
        console.log(res);
	      userDetails = res.data;
      })
      .catch( err => {
        console.log(err);
	      userDetails = err.data;
      })
	    .finally(() => {
		    this.$message({
			    type: userDetails == null ? 'error':'success',
			    message: userDetails == null ? '获取用户信息失败':'获取用户信息成功，用户编号： '+userDetails.userId.toString()
		    })
	    })
    },
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

<style scoped>

</style>
