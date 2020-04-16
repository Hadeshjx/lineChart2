<template>
    <div class="query">
        <fieldset>
            <legend>请选择查询条件</legend>
            <el-form :model="formData" label-width="90px" inline>
                <el-form-item label="时间">
                    <el-date-picker
                        v-model="formData.timeRange"
                        value-format="timestamp"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间"
                        :clearable="true"
                    />
                </el-form-item>

                <el-form-item label="轨道区段">
                    <el-select v-model="formData.rodeCode" :clearable="true">
                        <el-option
                            v-for="(item,index) in rodes"
                            :key="index"
                            :label="item.value"
                            :value="item.value"
                        />
                    </el-select>
                </el-form-item>

                <el-form-item label="故障类别">
                    <el-select v-model="formData.errorType" :clearable="true">
                        <el-option
                            v-for="(item,index) in faultType"
                            :key="index"
                            :label="item.value"
                            :value="item.value"
                        />
                    </el-select>
                </el-form-item>

                <el-form-item>
                    <el-button @click="query" type="primary">查询</el-button>
                    <el-button @click="quit">退出</el-button>
                </el-form-item>
            </el-form>
        </fieldset>

        <div class="list">
            <el-table :data="result" border>
                <el-table-column type="index" width="80px" label="序号" align="center"/>
                <el-table-column prop="time" label="时间" align="center"/>
                <el-table-column prop="rode" label="轨道区段" align="center"/>
                <el-table-column prop="reson" label="故障类型" align="center"/>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Check",
        data(){
            return {
                formData:{
                    timeRange:null,
                    rodeCode:null,
                    errorType:null,
                },
                faultType:[
                    {value:'补偿电容不良'},
                    {value:'塞钉松动'},
                    {value:'衰耗盘不良'},
                    {value:'调谐单元不良'},
                    {value:'区间分路特性不良'},
                    {value:'列车慢行'},
                    {value:'补偿电容不良'},
                    {value:'塞钉松动'},
                    {value:'衰耗盘不良'},
                    {value:'调谐单元不良'},
                    {value:'区间分路特性不良'},
                    {value:'列车慢行'},
                ],
                rodes:[
                    {value: '3G'},
                    {value: '4G'},
                    {value: '5G'}
                ],
                mockData:[
                    {
                        time:'2018-07-06 12:12:33',
                        rode:'3G',
                        reson:'补偿电容不良',
                    },
                    {
                        time:'2018-08-13 01:23:34',
                        rode:'3G',
                        reson:'塞钉松动',
                    },
                    {
                        time:'2018-09-10 13:34:23',
                        rode:'3G',
                        reson:'衰耗盘不良',
                    },
                    {
                        time:'2018-10-07 00:45:34',
                        rode:'4G',
                        reson:'调谐单元不良',
                    },
                    {
                        time:'2018-11-14 23:12:23',
                        rode:'4G',
                        reson:'区间分路特性不良',
                    },
                    {
                        time:'2018-12-11 11:45:14',
                        rode:'4G',
                        reson:'列车慢行',
                    },
                    {
                        time:'2019-07-06 22:56:42',
                        rode:'4G',
                        reson:'补偿电容不良',
                    },
                    {
                        time:'2019-08-13 21:34:56',
                        rode:'5G',
                        reson:'塞钉松动',
                    },
                    {
                        time:'2019-09-10 21:51:42',
                        rode:'5G',
                        reson:'衰耗盘不良',
                    },
                    {
                        time:'2019-10-07 20:28:48',
                        rode:'5G',
                        reson:'调谐单元不良',
                    },
                    {
                        time:'2019-11-14 17:54:51',
                        rode:'5G',
                        reson:'区间分路特性不良',
                    },
                    {
                        time:'2019-12-11 13:38:29',
                        rode:'5G',
                        reson:'列车慢行',
                    },
                ],
                result:[]
            }
        },
        methods:{
            query(){
                this.doFilter()
            },
            quit(){
                this.$router.go(-1)
            },
            doFilter(){
                let {timeRange,rodeCode,errorType} = this.formData
                this.result = this.mockData.filter(item=>{
                    let ad1,ad2, ad3

                    if(timeRange == null){
                        ad1 = true
                    }else if(Array.isArray(timeRange)){
                        let time = new Date(item.time).getTime()
                        if(timeRange[0]<=time && time<=timeRange[1]){
                            ad1 = true
                        }else{
                            ad1 = false
                        }
                    }

                    if(!rodeCode){
                        ad2 = true
                    }else if(item.rode == rodeCode){
                        ad2 = true
                    }else{
                        ad2 = false
                    }

                    if(!errorType){
                        ad3 = true
                    }else if(item.reson == errorType){
                        ad3 = true
                    }else{
                        ad3 = false
                    }
                    return ad1 && ad2 && ad3
                })
            }
        }
    }
</script>

<style scoped>
    fieldset{
        text-align: left;
        padding-top: 30px;
        padding-bottom: 30px;
    }
    .list{
        margin-top: 10px;
    }
</style>