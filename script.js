const App = {
  data() {
    return {
      kmHour: 0,
      metSecond: 0,
    };
  },
  methods: {
    perevodMetSecond() {
      this.metSecond = this.kmHour / 3.6;
    },
    perevodKmHour() {
      this.kmHour = this.metSecond * 3.6;
    },
  },
};

Vue.createApp(App).mount("#app");
