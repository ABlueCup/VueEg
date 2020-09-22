Vue.component('v-listmsg', {
    props: {
        msgs: {
            type: Array,
            default: []
        },
    },
    data() {
        return {
            message: this.msgs
        }
    },
    render(createElement) {
        if (this.message.length) {
            let list = [];
            this.message.forEach((msg, index) => {
                let _index = index;
                let node = createElement("div", {
                    attrs: {
                        class: 'singleMsg'
                    }
                }, [
                    createElement("span", msg.uname + ":"),
                    createElement("div", [
                        createElement("p", msg.content),
                        createElement("button", {
                            on: {
                                click: () => {
                                    this.handleReply(_index)
                                }
                            }
                        }, "删除"),

                    ])
                ]);
                list.push(node);
            });
            return createElement("div", {
                attrs: {
                    class: "listMsg"
                },
            }, list);
        } else {
            return createElement('div', {
                attrs: {
                    class: 'listMsg'
                }
            }, "还没有内容哦");
        }
    },
    methods: {
        handleReply(i) {
            this.$emit("delete",i);
        }
    },
    watch: {
        msgs() {
            this.message = this.msgs;
        }
    }
});