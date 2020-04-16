<template>
    <div id="lineChart1" :style="styleObj"></div>
</template>

<script>
    export default {
        name: "LineChart1",
        props:{
            width: {
                type: Number,
                default: 300
            },
            height: {
                type: Number,
                default: 300
            },
            options:{
                type: Object,
                required: true
            }
        },
        watch:{
            options:{
                handler(newV,oldV){
                    this.instance.clear()
                    this.instance.setOption(newV,true)
                },
                deep: true
            }
        },
        computed:{
            styleObj(){
                return {
                    width: this.width+'px',
                    height: this.height+'px'
                }
            }
        },
        data(){
            return {
                instance: null,
            }
        },
        mounted() {
            let target = document.getElementById('lineChart1'),that = this
            this.instance = this.$echarts.init(target)
            this.instance.on('click',function(params){
                that.$emit('chart-click',this.options)
            })
            this.instance.on('finished',function(){
                that.$emit('finish',this.options)
            })
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
