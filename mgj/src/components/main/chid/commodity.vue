<template>
    <div class="commoditybox">
        <img :src="commodityList.img" alt="">
        <p>{{commodityList.title}}</p>
        <div class="left-right">
            <span>￥{{commodityList.price}}</span>
            <em>{{commodityList.cfav}}</em>
            <van-icon name="star-o" size="3vw"/>
        </div>
        <div class="commodityBut">立即购买</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props:{
        commodityList:Object|Array,
    },
    created() {
        console.log(this.commodityList)
    },
}
</script>

<style lang="less" scoped>
.commoditybox{
    width: 46vw;
    height: 84vw;
    margin-bottom:3vw; 
    display: flex;
    flex-direction: column;
    background-color: #fff;
    img{
        width: 46vw;
        height: 60vw;
    }
    p{
        padding: 2vw 2vw 1vw 2vw;
        font-size: 3vw;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .left-right{
        width: 46vw;
        display: flex;
        flex-direction: row;
        position: relative;
        margin-bottom:3vw; 
        span{
            padding-left: 2vw;
            font-size: 4vw;
        }
        em{
            font-style: normal;
            font-size: 3vw;
            position: absolute;
            right: 6vw;
            top: 1vw;
            color: #666;
        }
        .van-icon{
            position: absolute;
            right: 2vw;
            top: 2vw;
        }
    }
    .commodityBut{
        color: rgb(255, 255, 255);
        background-color: rgb(255, 87, 119);
        text-align: center;
        width: 42vw;
        margin: 0 2vw;
        font-size: 4vw;
        line-height: 7vw;
    }
}
</style>

