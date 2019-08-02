<template>
    <div class="classifybox">
        <router-link :to="`/Category/${classifyList.cid}`" class="aBox">
            <img :src="classifyList.image" alt="">
            <span>{{classifyList.title}}</span>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props:{
        classifyList:Object|Array,
    }
}
</script>

<style lang="less" scoped>
.classifybox{
    display: flex;
    flex-direction: column;
    width: 20vw;
    height: 24vw;
    .aBox{
        display: flex;
        flex-direction: column;
        color: #666;
        img{
            width: 16vw;
            height: 16vw;
            margin: 0 auto;
        }
        span{
            width: 20vw;
            height: 6vw;
            text-align: center;
            font-size: 4vw;
            line-height: 6vw;
        }
    }
}


</style>

