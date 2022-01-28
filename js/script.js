console.log('JS OK');

Vue.config.devtools = true;

const app = new Vue ({
    el: '#root',
    data: {
        newTask: '',
        tasks: [
            { text: 'Farina', done: true},
            { text: 'Pasta', done: false},
            { text: 'Noce moscata', done: false},
            { text: 'Verdure', done: false},
            { text: 'Acqua', done: false},
            { text: 'Sale', done: false},
        ]
    },
    methods: {
        deleteTask(index) {
            this.tasks.splice(index, 1);
        },
        addTask() {
            this.tasks.push({ text: this.newTask, done: false });
            this.newTask = '';
        }

    }

})