<template>
    <div class="wrap">
        <div class="top">  <!-- 头部搜索 -->
            <MGtop></MGtop>
        </div>

        <MGmain></MGmain>  <!-- main区域 -->
    </div>
</template>


<script>
import MGtop from './header/top'
import MGmain from './main/main'
import Api from '../api/api'
export default {
    data() {
        return {
            
        }
    },
    components:{
        MGtop,
        MGmain,
    },
    created() {
        Api.mgjApi('./mogujieData/shouye/index.json').then(res=>{
            console.log(res)
        })
    },
}
</script>


<style lang="less" scoped>
.wrap{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    .top{
        width: 100vw;
        height: 7vh;
        display: flex;
        flex-direction: row;
    }
}    
</style>