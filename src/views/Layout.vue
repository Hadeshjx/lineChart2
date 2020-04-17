<template>
    <el-container>
        <el-header>
            <el-row>
                <el-col :span="16">
                    <el-page-header @back="goBack" content="ZPW-2000A轨道电路故障诊断系统"/>
                </el-col>
                <el-col :span="8" class="user-info">
                    <el-avatar :size="50"/>
                    <span class="userName">{{userName}}</span>
                </el-col>
            </el-row>
        </el-header>
        <el-container :style="bodyH">
            <!--<el-aside width="200px"></el-aside>-->
            <el-container>
                <el-main>
                    <router-view/>
                </el-main>
                <!--<el-footer>Footer</el-footer>-->
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "Layout",

        computed: {
            bodyH() {
                return {height: (this.winH - 60) + 'px'}
            },
            userName() {
                return localStorage.getItem('userInfo')
            }
        },
        methods:{
            goBack() {
                this.$router.go(-1)
            },
        }
    }
</script>

<style scoped>
    .el-page-header {
        padding: 18px 0;
    }
    .el-header {
        border-bottom: 1px solid #eaecef;
    }

    .el-aside {
        font-size: 15px;
        width: 20rem;
        margin: 0;
        box-sizing: border-box;
        border-right: 1px solid #eaecef;
    }

    .userName {
        margin-left: 10px;
        font-size: 18px;
        color: #3eaf7c;
    }
    .user-info {
        height: 60px;
        line-height: 60px;
    }

    .user-info > * {
        vertical-align: middle;
    }
    .el-avatar {
        background: url("../assets/pic.jpg");
        background-size: contain;
        border: 1px solid #C0C4CC;
    }
</style>
