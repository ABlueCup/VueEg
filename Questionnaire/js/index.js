let vm = new Vue({
    el: "#qsn",
    data: {
        show: 2,
        gender: "secret",
        interest: ['swiming', 'film'],
        introduce: '',
    },
    methods: {
        nextPage() {
            this.show++;
            this.show = this.show > 3 ? 3 : this.show;
        },
        lastPage() {
            this.show--;
            this.show = this.show < 1 ? 1 : this.show;
        },
        reset(show) {
            if (show === 1) {
                this.gender = "secret";
                return;
            }
            if (show === 2) {
                this.interest = ['swiming', 'film'];
                return;
            }
            this.introduce = '';
        },
    },
    watch: {
        interest() {
            let len = this.interest.length;
            if (len < 2) {
                alert("至少选择两项");
                this.$nextTick(()=>{
                    this.reset(2);
                })
                return;
            }
            if(len > 3){
                alert("最多选三项");
                this.$nextTick(()=>{
                    this.interest.splice(len-1,1);
                });
            }
        },
        introduce() {
            let len = this.introduce.length;
            if (len > 10) {
                this.introduce = this.introduce.substring(0, 10);
                alert("不能超过一百个字");
            }
        }
    }
});