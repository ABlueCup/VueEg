Vue.component('v-publishbtn',{
    render(createElement){
        return createElement("div",{
            attrs:{
                class:'publishLeave'
            }
        },[
            createElement("button",{
                on:{
                    click:this.handleCLick
                }
            },'发布')
        ])
    },
    methods:{
        handleCLick(){
            this.$emit('click', 'publish');
        }
    }
});