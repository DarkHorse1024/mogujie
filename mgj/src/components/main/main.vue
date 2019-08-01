<template>
    <div class="mainwrap">
        <MGquickly></MGquickly>  <!-- 快抢 -->
        <MGcommodity></MGcommodity> <!-- 商品 -->
    </div>
</template>

<script>
import MGquickly  from './chid/quickly ';
import MGcommodity  from './chid/commodity';
export default {
    data() {
        return {
            
        }
    },
    props:{

    },
    methods: {
        
    },
    components:{
        MGquickly,
        MGcommodity,
    }
}
</script>

<style lang="less" scoped>
.mainwrap{
    width: 100vw;
}
</style>
