let vm = new Vue({
    el: "#app",
    data: {
        username: '',
        text: '',
        list: [
            { uname: "will", content: "he is a good boy" }, 
            { uname: "john", content: "he loves eating fish" }
        ]
    },
    methods: {
        handleSend() {
            if (this.username !== '' && this.text !== '') {
                let msg = {
                    uname: this.username,
                    content: this.text
                }
                this.list.push(msg);
                this.username = '';
                this.text = "";
            }
        },
        delMsg(index) {
            this.list.splice(index, 1);
            // console.log(this.list);
        }
    }
})