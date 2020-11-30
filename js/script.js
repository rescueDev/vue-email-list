// Genera 10 mail tramite api e stampale in una lista

var app = new Vue({
  el: "#app",
  data: {
    emails: [],
  },
  //   mounted: function () {
  //     for (let i = 0; i < 10; i++) {
  //       axios
  //         .get("https://flynn.boolean.careers/exercises/api/random/mail")
  //         .then((risposta) => {
  //           //   console.log(risposta);
  //           //   console.log(risposta.data);
  //           this.email = risposta.data.response;
  //           this.emails.push(this.email);
  //         });
  //     }
  //   },
  methods: {
    generaList() {
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((risposta) => {
            //   console.log(risposta);
            //   console.log(risposta.data);
            this.email = risposta.data.response;
            this.emails.push(this.email);
          });
      }
      //resetto array per averne sempre 10 ad ogni click del button
      this.emails = [];
    },
  },
});
