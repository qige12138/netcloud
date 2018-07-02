<template>
    <div>
        <comment-head :headNum=headObj.commentNum></comment-head>
        <comment-list :singObj=headObj></comment-list>
    </div>
    
</template>

<script>
    import commentHead from "./commenthead"
    import commentList from "./commentlist"
    export default {
        components:{
            commentHead,
            commentList
        },
        data() {
            return {
                headObj:this.$route.query
            }
        }
    }
</script>


