Vue.component('pane', {
    props: {
        name: {
            type: String,
        },
        label: {
            type: String,
            default: '',
            required: true
        }
    },
    name: 'pane',
    template:
        `   <div class="pane" v-show="show">
            <slot></slot>
        </div>
    `,
    data() {
        return {
            show: true
        }
    },
    methods: {
        // let tab know change happening in pane.
        updateNav() {
            this.$parent.updateTabs();
        }

    },
    watch: {
        label() {
            this.updateNav();
        },
        name() {
            this.updateNav();
        }
    }
})