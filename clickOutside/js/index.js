Vue.directive('clickoutside', {
    bind(el, binding, vnode) {
        function documentHandler(event) {
            if (el.contains(event.target)) {
                return false;
            }
            if (binding.expression) {
                binding.value();
            }
        }
        el._vueClickOutside_ = documentHandler;
        document.addEventListener('click', documentHandler);
    },
    update(){
        
    },
    unbind() {
        document.removeEventListener('click', el._vueClickOutside_);
        delete el._vueClickOutside_;
    }
});
let vm = new Vue({
    el: "#app",
    data: {
        show: false
    },
    methods: {
        changeMenu() {
            this.show = false;
        }
    }

});