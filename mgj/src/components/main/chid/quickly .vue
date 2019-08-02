<template>
    <div class="quicklyList">
        <img :src="quicklyList.backgroundImage" alt="" class="quicklyBg">
        <img :src="quicklyList.image" alt="" class="quicklyimg" v-if="quicklyList.image!=''">
        <span>{{quicklyList.title}}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props:{
        quicklyList:Object|Array,
    },
}
</script>

<style lang="less" scoped>   
.quicklyList{
    width: 22vw;
    height: 22vw;
    display: flex;
    flex-direction: row;
    position: relative;
    .quicklyBg{
        width: 22vw;
        height: 22vw;
    }
    .quicklyimg{
       width: 18vw;
       height: 18vw; 
       position: absolute;
       top: 50%;
       left: 50%;
       margin-left:-9vw; 
       margin-top:-9vw; 
    }
    span{
       width: 25vw;
       position: absolute;
       top: 70%;
       text-align: center;
       font-size: 4vw;
       font-weight: bolder;
       color: #fff;
    }
}

</style>

