import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from "../../firebase";

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    userData: null,
  }),
  actions: {
    signInUser(email, password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user
          this.userData = { userEmail: user.email, userId: user.uid }
          console.log(user)
          this.router.push('/dashboard')
        })
        .catch((err) => {
          console.log(err)
          console.log(err.code)
          console.log(err.message)
        })
    },
    signOutUser() {
      signOut(auth)
        .then(() => {
          alert('Sesión cerrada con éxito')
          this.userData = null
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
          } else {
            this.userData = null
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