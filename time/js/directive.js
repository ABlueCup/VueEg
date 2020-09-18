Vue.directive('time', {
    bind(el, binding, vnode) {
        if (binding.expression) {
            let currentTime = new Date().getTime();
            el.innerHTML = `-- ${getTimeTip(currentTime, binding.value)}`;
            el._timer_ = setInterval(() => {
                el.innerHTML = `-- ${getTimeTip(new Date().getTime(), binding.value)}`;
            }, 60000);
        }
    },
    unbind() {
        clearInterval(el._timer_);
        delete el._timer_;
    }
});

Vue.directive('birthday', {
    bind(el, binding, vnode) {
        if (binding.expression) {
            let count = Math.ceil((new Date().getTime() - binding.value) / (60000 * 60 * 24));
            let str = el.innerHTML, age = 0;
            age = getAge(new Date().getTime(), binding.value);
            str = str.replace(/W/g, count);
            str = str.replace('age', age)
            el.innerHTML = str;
        }
    }
});