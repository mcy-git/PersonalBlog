export default function (ref){
    if (!ref){
        //如果ref没传，直接返回
        return;
    }
    return {
        mounted() {
            this.$Bus.$on("SetDetailScroll", this.handleSetScroll);
            this.$refs[ref].addEventListener("scroll", this.handleScroll);
        },
        destroyed() {
            this.$Bus.$off("SetDetailScroll", this.handleSetScroll);
            this.$Bus.$emit("DetailScroll");
        },
        methods:{
            handleScroll() {
                this.$Bus.$emit("DetailScroll", this.$refs[ref]);
            },
            handleSetScroll(top) {
                this.$refs[ref].scrollTop = top;
            },
        }
    }
}