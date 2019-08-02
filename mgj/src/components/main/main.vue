<template>
    <div class="mainwrap">

        <div class="quicklywrap"> <!-- 快抢 -->
            <template v-for="(item,index) in quickly">
                <MGquickly :key="index" :quicklyList="item"></MGquickly>  
            </template>
        </div>

        <div class="classifywrap"><!-- 分类 -->
            <template v-for="(item,index) in classify">
                <MGclassify :key="index" :classifyList="item"></MGclassify>
            </template>
        </div>

        <div class="love">
            <img src="https://s10.mogucdn.com/mlcdn/c45406/190426_4hlfgkc2ceaea67422ag73077lfce_1611x166.png_999x999.v1c0.81.webp" alt="">
        </div>

        <div class="commoditywrap"> <!-- 猜你喜欢 -->
            <template v-for="(item,index) in commodity">
                <MGcommodity :key="index" :commodityList="item"></MGcommodity> 
            </template>
        </div>

    </div>
</template>

<script>
import MGquickly  from './chid/quickly ';
import MGcommodity  from './chid/commodity';
import MGclassify  from './chid/classify';
import Api from '../../api/api';
export default {
    data() {
        return {
           quickly:[], 
           classify:[],   
           commodity:[], 
        }
    },
    props:{

    },
    methods: {
        
    },
    components:{
        MGquickly,
        MGcommodity,
        MGclassify,
    },
    created() {
        Api.mgjApi('./mogujieData/shouye/index.json').then(res=>{
            this.quickly=res.data.shouye_herder.list
            this.classify=res.data.category.list
            this.commodity=res.data.cainixihuan.likeList
        })
    },
}
</script>

<style lang="less" scoped>
.mainwrap{
    width: 100vw;
    .quicklywrap{
        width: 100vw;
        height: 26vw;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    .classifywrap{
        width: 100vw;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .love{
        width: 100vw;
        background-color: #EFEFEF;
        img{
            width: 100vw;
            height: 12vw;
        }
    }
    .commoditywrap{
        width: 100vw;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        background-color: #EFEFEF;
    }
}
</style>
