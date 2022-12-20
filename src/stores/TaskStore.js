import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id: 1, title: "buy milk", isFav: false},
            {id: 2, title: "play videogames", isFav: true}
        ]
    }),
    getters: {
        favs(){
            return this.tasks.filter(t => t.isFav)
        },
        totalTasks(){
            return this.tasks.length
        },
        totalFavs(){
            return this.favs.length
        }
    },
    actions: {
        addTask(task){
            this.tasks.push(task)
        },
        deleteTask(taskID){
            this.tasks = this.tasks.filter(t => t.id !== taskID)
            return this.tasks
        },
        toggleFav(id){
            // this.tasks.id = !this.tasks.id
            const taskToFav = this.tasks.find(t => t.id === id)
            taskToFav.isFav = !taskToFav.isFav
        }
    }
})