<template>
    <div class="cateTopwrap">
        <router-link to="/" class="cate-left">
            <van-icon name="arrow-left" size="6vw"/>
        </router-link>
        <van-search placeholder="请输入搜索关键词"/>
        <router-link to="" class="cate-right">
            <van-icon name="shopping-cart-o" size="6vw"/>
        </router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.cateTopwrap{
    display: flex;
    flex-direction: row;
    width: 100vw;
    .van-search{
        width:80vw;
        height: 7vh;
    }
    .cate-left{
        width: 10vw;
        height: 7vh;
        line-height: 8vh;
        text-align: center;
        color: #000;
    }
    .cate-right{
        .cate-left
    }
}
</style>
