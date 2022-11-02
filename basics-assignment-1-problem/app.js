const app = Vue.createApp({
    data() {
        return {
            name: "Max",
            age: 22,
            img: "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=620&quality=85&dpr=1&s=none",
        }
    },
    methods: {
        getFavoriteNumber() {
            return Math.random();
        }
    }
});

app.mount("#assignment")