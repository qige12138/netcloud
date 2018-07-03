<template>
    <div>
        <comment-head></comment-head>
        <comment-list :singId=id></comment-list>
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
                id:this.$route.query.id
            }
        }
    }
</script>


