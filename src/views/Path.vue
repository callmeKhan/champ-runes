<template>
  <div class="container-fluid">
    <div class="row pt-5">
      <PasswordReset
        v-if="showPasswordReset"
        @close="togglePasswordReset()"
      ></PasswordReset>
      <div class="col">
        <form @submit.prevent v-if="showLoginForm">
          <h1>Welcome Back</h1>
          <div>
            <label for="email1">Email</label>
            <input
              v-model.trim="loginForm.email"
              type="text"
              placeholder="you@email.com"
              id="email1"
            />
          </div>
          <div>
            <label for="password1">Password</label>
            <input
              v-model.trim="loginForm.password"
              type="password"
              placeholder="******"
              id="password1"
            />
          </div>
          <button @click="login()" class="button">Log In</button>
          <div class="extras">
            <a @click="togglePasswordReset()">Forgot Password</a>
            <a @click="toggleForm()">Create an Account</a>
          </div>
        </form>
        <form @submit.prevent v-else>
          <h1>Get Started</h1>
          <div>
            <label for="name">Name</label>
            <input
              v-model.trim="signupForm.name"
              type="text"
              placeholder="Savvy Apps"
              id="name"
            />
          </div>
          <div>
            <label for="title">Title</label>
            <input
              v-model.trim="signupForm.title"
              type="text"
              placeholder="Company"
              id="title"
            />
          </div>
          <div>
            <label for="email2">Email</label>
            <input
              v-model.trim="signupForm.email"
              type="text"
              placeholder="you@email.com"
              id="email2"
            />
          </div>
          <div>
            <label for="password2">Password</label>
            <input
              v-model.trim="signupForm.password"
              type="password"
              placeholder="min 6 characters"
              id="password2"
            />
          </div>
          <button @click="signup()" class="button">Sign Up</button>
          <div class="extras">
            <a @click="toggleForm()">Back to Log In</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import PasswordReset from "@/components/PasswordReset";

export default {
  components: {
    PasswordReset,
  },
  data() {
    return {
      showPasswordReset: false,
      showLoginForm: true,
      loginForm: {
        email: "",
        password: "",
      },
      signupForm: {
        name: "",
        title: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    togglePasswordReset() {
      this.showPasswordReset = !this.showPasswordReset;
    },
    toggleForm() {
      this.showLoginForm = !this.showLoginForm;
    },
    login() {
      this.$store.dispatch("login", {
        email: this.loginForm.email,
        password: this.loginForm.password,
      });
    },
    signup() {
      this.$store.dispatch("signup", {
        email: this.signupForm.email,
        password: this.signupForm.password,
        name: this.signupForm.name,
        title: this.signupForm.title,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  margin: 0 2rem;
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
  @media only screen and (max-width: 420px) {
    flex: 0 0 83.333333% !important;
    max-width: 83.333333% !important;
    padding-top: 50%;
    margin-bottom: 2rem;
  }
}

/* Then style the iframe to fit in the container div with full height and width */
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>