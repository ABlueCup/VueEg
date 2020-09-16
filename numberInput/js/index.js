let isValueNumber = val => {
    return /(^-?\d+\.{1}\d+$)|(^-?[1-9]{1}\d*$)|(^-0{1}$)/.test(val);
}
Vue.component('number-input', {
    props: {
        max: {
            type: Number,
            default: Infinity
        },
        min: {
            type: Number,
            default: -Infinity
        },
        value: {
            type: Number,
            default: 0
        },
        step: {
            type: Number,
            default: 1
        }
    },
    template: `<div class="number-input">
        <input type="text" :value="currentValue" @change="handleChange" @keydown.up="handleAdd" @keydown.down="handleReduce">
        <button @click="handleAdd" :disabled="currentValue>=max">+</button>
        <button @click="handleReduce" :disabled="currentValue<=min">-</button>
    </div>
    `,
    data() {
        return {
            currentValue: this.value
        }
    },
    watch: {
        currentValue(val) {
            this.$emit('input', val);
        },
        value(val) {
            this.updateValue(val);
        }
    },
    methods: {
        updateValue(val) {
            let max = this.max, min = this.min;
            val = val > max ? max : (val < min ? min : val);
            this.currentValue = val;
        },
        handleAdd() {
            if (this.currentValue >= this.max) return;
            this.currentValue += 1 * this.step;
        },
        handleReduce() {
            if (this.currentValue <= this.min) return;
            this.currentValue -= 1 * this.step;
        },
        handleChange($event) {
            let val = $event.target.value.trim();
            if (isValueNumber(val)) {
                this.updateValue(val);
            } else {
                $event.target.value = this.currentValue;
            }
        }
    },
    mounted() {
        this.updateValue(this.value);
    }
});

new Vue({
    el: "#app",
    data: {
        value: 6
    }
});


// number k