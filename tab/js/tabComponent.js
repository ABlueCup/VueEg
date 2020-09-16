Vue.component('tab', {
    props: {
        value: {
            type: [String, Number],
            default: 0
        }
    },
    template: `<div class="tabs">
        <div class="tab">
            <ul>
                <li v-for="tab in tabList" name="tab.name" :class="tabCls(tab)" @click="handleChange(tab)">{{tab.label}}</li>
            </ul>
        </div>
        <div class="tab-content">
            <slot></slot>
        </div>
    </div>`,
    data() {
        return {
            tabList: [],
            currentValue: this.value
        }
    },
    methods: {
        getTabs() {
            return this.$children.filter(item => {
                return item.$options.name = "pane"
            });
        },
        updateTabs() {
            this.tabList = [];
            this.getTabs().forEach((item, index) => {
                this.tabList.push({
                    label: item.label,
                    name: item.name || index
                });
                if (index === 0) {
                    if (!this.currentValue) {
                        this.currentValue = item.name || index;
                    }
                }
            });
            this.updateStatus();
        },
        tabCls(val) {
            return {
                "tab-active": val.name === this.currentValue
            }
        },
        updateStatus() {
            this.getTabs().forEach(item => {
                item.show = this.currentValue === item.name;
            });
        },
        handleChange(obj) {
            this.currentValue = obj.name;
        }
    },
    watch: {
        value(val) {
            this.currentValue = val;
            this.updateTabs();
        },
        currentValue(val) {
            this.$emit('input', this.currentValue);
            this.updateStatus();
        }
    },
    mounted() {
        this.updateTabs();
    }


})