<template>
    <div class="query">
        <el-form :model="formData">
            <el-form-item/>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Check",
        data(){
            return {
                formData:{
                    timeRange:[],
                    rodeCode:null,
                    errorType:null,
                }
            }
        }
    }
</script>

<style scoped>

</style>