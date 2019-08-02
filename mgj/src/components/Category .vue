<template>
<!-- 分类页 -->
    <div class="Categorywrap">

        <MgCateTop></MgCateTop>  <!-- 头部 -->

        <div class="cataTitle">
            <span v-for="(item,index) in title" :key="index">{{item}}</span>
        </div>

        <div class="cateditywrap">
            <template v-for="(item,index) in catedity">
                <Mgcatedity :key="index" :catedityList="item"></Mgcatedity>
            </template>
        </div>
        
    </div>
</template>

<script>
import MgCateTop from './header/CategoryTop '
import Mgcatedity from './main/chid/catedity'
import Api from '../api/api' 
export default {
    data() {
        return {
            title:['综合','销量','新品', '价格'],
            catedity:[]
        }
    },
    components:{
        MgCateTop,
        Mgcatedity,
    },
    created() {
        Api.mgjApiId('/mogujieData/shouye/shouye_category/',this.$route.params.id).then(res=>{
            this.catedity=res.data.docs
            console.log(res.data.docs)
        })
    },
}
</script>

<style lang="less" scoped>
.Categorywrap{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    .cataTitle{
        border-top:1px #c3c3c3 solid; 
        width: 100vw;
        display: flex;
        flex-direction: row;
        span{
            width: 25vw;
            height: 10vw;
            text-align: center;
            line-height: 10vw;
            position: relative;
            font-size: 4vw;
            &::before{
                content: '';
                display: block;
                width: 1px;
                height: 5vw;
                background: #c3c3c3;
                position: absolute;
                top: 50%;
                margin-top:-2.5vw; 
            }
            &:nth-child(1)::before{
                content: '';
                display: block;
                width: 0px;
                height: 0vw;
            }
        }
    }

    .cateditywrap{
        padding-top:3vw;  
        width: 100vw;
        height: 100vh;
        background-color: #EFEFEF;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
}

</style>
