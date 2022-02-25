//抽离公共代码
export default function(defaultData = null){
    return {
        data(){
            return {
                data: defaultData,
                //表示数据是否加载完成
                isLoading: true,

            }
        },
        async created(){
            this.data = await this.fetchData();
            this.isLoading = false;
        }
    }
}