import { collection, getDocs, query } from "firebase/firestore/lite";
import { defineStore } from "pinia";
import { db } from "../../firebase";

export const useDatabase = defineStore('dbStore', {
  state: () => ({
    docs: [],
    dates: [],
    clients: []
  }),
  actions: {
    async getData () {
      if (this.docs.length !== 0) {
        return
      }
      try {
        const q = query(collection(db, "dashboard"))
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
          console.log(doc.id, "=>", doc.data())
          this.docs.push(doc.data())
        })
        const dates = this.docs.map(e => e.date)
        const totalClients = this.docs.map(e => e.totalClient)
        this.dates = dates
        this.clients = totalClients

      } catch (err) {
        console.log(err)
      }
    }
  }

})