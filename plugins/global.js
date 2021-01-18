import Vue from 'vue'

Vue.mixin({
  computed: {
    authen() { return this.$store.state.authen.auth },
    authUser() { return this.$store.state.authen.authUser },
    tokens() { return this.$store.state.authen.token },
  },

  methods: {
    isEmpty(obj) {
      for(var key in obj) {
          if(obj.hasOwnProperty(key))
              return false;
      }
      return true;
    },
    stripHtml(html){
      var tmp = document.createElement("DIV");
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || "";
    },
    formatDate(date) {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [day, month, year ].join('-');
    },
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    validEmail:function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    formatPrice(value) {
      let val = (value/1).toFixed(0).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    postData(url,data) {
      return new Promise(
        (resolve, reject) => {
          this.$axios.$post(url,data).then( (response) => {
            if (response !== '') {
              resolve(response)
            }
            reject(response)
          }, (error) => {
            // console.log(error)
            reject(error)
          })
          .catch(function (error) {
            reject(error)
          })
        }
      )
    },

    postDataTest(url,data) {
      return new Promise(
        (resolve, reject) => {
          this.$axios.$post(url,data, {
            headers: {
              'Authorization': 'Bearer ' + this.tokens
            }
          }).then( (response) => {
            if (response !== '') {
              resolve(response)
            }
            reject(response)
          }, (error) => {
            console.log(error)
            reject(error)
          })
          .catch(function (error) {
            reject(error)
          })
        }
      )
    },

    postDataAuth(url,data) {
      return new Promise(
        (resolve, reject) => {
          this.$axios.$post(url,data, {
            headers: {
              'Authorization': 'Bearer ' + this.tokens
            }
          }).then( (response) => {
            if (response !== '') {
              resolve(response)
            }
            reject(response)
          }, (error) => {
            console.log(error)
            reject(error)
          })
          .catch(function (error) {
            reject(error)
          })
        }
      )
    },
    deleteDataAuth(url) {
      return new Promise(
        (resolve, reject) => {
          this.$axios.$delete(url, {
            headers: {
              'Authorization': 'Bearer ' + this.tokens
            }
          }).then( (response) => {
            if (response !== '') {
              resolve(response)
            }
            reject(response)
          }, (error) => {
            console.log(error)
            reject(error)
          })
          .catch(function (error) {
            reject(error)
          })
        }
      )
    },
    postMultipartData(url,data) {
      return new Promise(
        (resolve, reject) => {
          this.$axios.$post(url,data,{
            headers: {
              'content-type': 'multipart/form-data',
              'Authorization': 'Bearer ' + this.tokens
            }
          }).then( (response) => {
            if (response.status !== '') {
              resolve(response.data)
            }
            reject(response.message)
          }, (error) => {
            console.log(error.message)
            reject(error)
          })
          .catch(function (error) {
            reject(error)
          })
        }
      )
    },
    putData(url,data) {
      return new Promise(
        (resolve, reject) => {
          this.$axios.$put(url,data, {
            headers: {
              'Authorization': 'Bearer ' + this.tokens
            }
          }).then( (response) => {
            if (response !== undefined) {
              resolve(response)
            }
            reject(response.message)
          }, (error) => {
            console.log(error)
            reject(error)
          })
          .catch(function (error) {
            reject(error)
          })
        }
      )
    },
  }
})
