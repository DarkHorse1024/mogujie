<template>
    <div class="cateditybox">
        <img :src="catedityList.img" alt="">
        <p>{{catedityList.title}}</p>
        <div class="left-right">
            <span>￥{{catedityList.price}}</span>
            <em>{{catedityList.cfav}}</em>
            <van-icon name="star-o" size="3vw"/>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props:{
        catedityList:Object|Array,    
    },
    created() {
        console.log(this.catedityList)
    },
}
</script>

<style lang="less" scoped>
.cateditybox{
    width: 46vw;
    height: 75vw;
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
            font-size:4vw;
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
}
</style>
