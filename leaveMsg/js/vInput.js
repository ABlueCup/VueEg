Vue.component('v-input', {
    props: {
        username: {
            type: [String, Number],
            default: ''
        }
    },
    data() {
        return {
            uname: this.username
        }
    },
    render(createElement) {
        return createElement('div', {
            attrs: {
                class: 'username'
            },
        }, [
            createElement('span', '昵称:'),
            createElement('input', {
                attrs: {
                    type: 'text'
                },
                domProps: {
                    value: this.uname
                },
                on: {
                    input: event => {
                        this.$emit('input', event.target.value);
                    }
                }
            })
        ])
    },
    watch: {
        username() {
            this.uname = this.username;
        }
    }
})