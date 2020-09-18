Vue.component('tbtn', {
    props: {
        value: [String]
    },
    template: `<button class="btn" @click="handleBtn">{{text}}</button>`,
    data() {
        return {
            text: this.value
        }
    },
    methods: {
        handleBtn() {
            this.$emit('click', this.text);
        }
    },
    watch:{
        value(){
            this.text = this.value;
        },
   }
});