<template>
  <div class="mail">
    <div class="container">
        <form v-on:submit.prevent="sendEmail">
          <label>Name</label>
          <input 
            type="text" 
            v-model="name"
            name="name"
            placeholder="Your Name"
          >
          <label>Email</label>
          <input 
            type="email" 
            v-model="email"
            name="email"
            placeholder="Your Email"
            >
          <label>Message</label>
          <textarea 
            name="message"
            v-model="message"
            cols="30" rows="5"
            placeholder="Message">
          </textarea>
          
          <input type="submit" value="Send">
        </form>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: "mail",
  data(){
    return{
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(process.env.VUE_APP_SERVICE_ID, process.env.VUE_APP_TEMPLATE_ID, e.target,
        process.env.VUE_APP_USER_ID, {
          name: this.name,
          email: this.email,
          message: this.message
        })
        console.log("message delivered");

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  },
  mounted(){

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* { 
    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
     box-sizing: border-box; 
}

.container{
  margin: auto;
  max-width: 600px;
  width: 480px;
}

input,textarea{
    width: 100%;
    margin-bottom: 20px;
    border-radius: 2px;
    color: #dbdee0;
}

input[type="text"],input[type="email"],textarea{
  background-color: #3f3f3f;
  border: 0;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 10px;
}

input[type="submit"]{
  background-color: red;
  border: 0;
  padding: 15px 30px 15px 30px;
  cursor: pointer;
  transition-duration: 1s
}

input[type="submit"]:hover{
  background-color: rgb(211, 0, 0);
  transition-duration: 0.3s;
}

</style>
