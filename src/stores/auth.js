import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from "../../firebase";

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    userData: null,
    isLogged: false,
  }),
  actions: {
    signInUser(email, password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user
          this.userData = { userEmail: user.email, userId: user.uid }
          this.isLogged = true
          console.log(user)
          this.router.push('/dashboard')
        })
        .catch((err) => {
          alert('Credenciales incorrectas')
          console.log(err.code)
          console.log(err.message)
        })
    },
    signOutUser() {
      signOut(auth)
        .then(() => {
          alert('Sesión cerrada con éxito')
          this.userData = null
          this.isLogged = false
          this.router.push('/login')
        })
        .catch((err) => {
          console.log(err.code)
          console.log(err.message)
        })
    },
    getCurrentUser () {
      return new Promise((resolve, reject) => {
        const unsubcribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            this.userData = { userEmail: user.email, userId: user.uid }
            this.isLogged = true
          } else {
            this.userData = null
            this.isLogged = false
          }
          resolve(user)

        }, (e) => reject(e) );
        unsubcribe()
      })
    }
    // signUpUser(email, password) {
    //   createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //       const user = userCredential.user
    //       this.userData = { userEmail: user.email, userId: user.uid }
    //       console.log(user)
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //       console.log(err.code)
    //       console.log(err.message)
    //     }) 
    // },
  }
})