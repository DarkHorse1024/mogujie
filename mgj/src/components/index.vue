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
export default {
    data() {
        return {
            
        }
    },
    components:{
        MGtop,
        MGmain,
    }
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