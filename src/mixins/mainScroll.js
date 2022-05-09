export default function (refValue) {
    return {
        mounted() {
            this.$bus.$on("setMainScroll", this.handleSetMainScroll);
            // 指定滚动条，执行这个方法
            this.$refs[refValue].addEventListener("scroll", this.handleMainScroll);
        },
        beforeDestroy() {
            this.$bus.$emit("mainScroll"); //后面不传就是undefined
            this.$refs[refValue].removeEventListener("scroll", this.handleMainScroll);
            this.$bus.$off("setMainScroll", this.handleSetMainScroll);
        },
        methods: {
            handleSetMainScroll(scrollTop) {
                this.$refs[refValue].scrollTop = scrollTop;
            },
            handleMainScroll() {
                // 触发事件总线
                // 滚动的时候就会触发这个事件，就会传递这个元素
                this.$bus.$emit("mainScroll", this.$refs[refValue]);
            },
        },
    }
}