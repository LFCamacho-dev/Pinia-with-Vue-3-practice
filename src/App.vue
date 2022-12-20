<template>
  <main>

    <!-- heading -->
    <header>
        <img src="https://pinia.vuejs.org/logo.svg" alt="pinia logo">
        <h1> Task List</h1>
    </header>
    <div class="new-task-form">
        <TaskForm />
    </div>

    <nav class="filter">
        <button @click="filter = 'all'">All Tasks</button>
        <button @click="filter = 'favs'">Favorites</button>
    </nav>


    <div class="task-list" v-if="filter === 'all'">
        <p>All Tasks ({{ taskStore.totalTasks }})</p>
        <template v-for="task in taskStore.tasks" :key="task.id">
            <TaskDetails :task="task" />
        </template>   
    </div>
    
    <!-- Favorites  -->
    <div class="task-list" v-if="filter === 'favs'">
        <p>Favorite Tasks ({{ taskStore.totalFavs }})</p>
        <template v-for="task in taskStore.favs" :key="task.id">
            <TaskDetails :task="task" />
        </template>   

    </div>

  </main>
</template>

<script>
    import TaskDetails from './components/TaskDetails.vue'
    import TaskForm from './components/TaskForm.vue'
    import { useTaskStore } from './stores/TaskStore';
    import { ref } from 'vue'

    export default {
        components: { TaskDetails, TaskForm },
        setup () { 
            const taskStore = useTaskStore()
            const filter = ref('all')            

            return {
                filter,
                taskStore
            }
        }
    }
</script>