Vue.component('v-textarea', {
    props: {
        content: {
            type: String,
            default: ''
        }
    },
    render(createElement) {
        return createElement('div', {
            attrs: {
                class: 'leave-msg'
            },
        }, [
            createElement('span', '留言内容:'),
            createElement('textarea', {
                attrs: {
                    cols: 30,
                    rows: 6,
                },
                domProps: {
                    value: this.content
                },
                on: {
                    input: event => {
                        this.$emit('input', event.target.value);
                    }
                }
            })
        ]);
    }
})