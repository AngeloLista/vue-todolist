console.log('Vue ok', Vue);

Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        tasks: [
            'prova',
            'prova',
            'prova',
            'prova',
            'prova',
        ]
    },
    methods: {

    }
})