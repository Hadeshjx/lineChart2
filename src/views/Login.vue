<template>
    <div class="login" :style="bodyH">

        <div class="form-warp">
            <el-form :model="formData" label-width="60px">
                <el-form-item label="用户名" prop="userName">
                    <el-input type="text" v-model="formData.userName"/>
                </el-form-item>
                <el-form-item label="密码" prop="passWord">
                    <el-input type="password" v-model="formData.passWord"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="loginHandle">登录</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>

<script>


    export default {
        name: 'Login',
        data() {
            return {
                formData: {
                    userName: null,
                    passWord: null,
                },
                winH: 0,
            }
        },
        computed:{
            bodyH(){
                return { height: this.winH+'px'}
            }
        },
        mounted() {
            this.winH = document.documentElement.clientHeight
        },
        methods: {
            loginHandle() {
                let {userName,passWord}=this.formData
                if(userName=='admin'&&passWord=='123456'){
                    localStorage.setItem('userInfo',userName)
                    this.$router.push({name:'Layout'})
                }
            }
        }
    }
</script>

<style scoped>
    .login {
        background: url("../assets/bg.jpg") no-repeat;
        background-size: cover;
    }
    .form-warp{
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;

    }
    .el-form {
        box-sizing: border-box;
        padding: 40px 40px 18px 20px;
        background: rgba(255,255,255,.6);
    }

    .el-form-item {
        width: 100%;
    }
</style>
