<template>
    <div class="topwrap">
        <router-link to="" style="width:8vw">
            <van-icon name="bars" class="left-icon" size="6vw" color="#666"/>
        </router-link>
        <van-search placeholder="请输入搜索关键词" style="width:84vw"/>
        <router-link to="" style="width:8vw">
            <van-icon name="contact" class="right-icon" size="6vw" color="#666"/>
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

    }
}
</script>

<style lang="less" scoped>
@import "../../../less";
.topwrap{
    width: 100vw;
    height: 7vh;
    display: flex;
    flex-direction: row;
    .left-icon{
        width: 8vw;
        height: 7vh;
        background-color: #fff;
        text-align: right;
        line-height: 7vh;
    }
    .right-icon{
        width: 8vw;
        height: 7vh;
        background-color: #fff;
        text-align: left;
        line-height: 7vh;
    }
}
</style>
