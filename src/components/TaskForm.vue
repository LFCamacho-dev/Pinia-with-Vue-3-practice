<template>
    <form @submit.prevent="handleSubmit">
        <input
          type="text"
          placeholder="I need to..."
          v-model="newTask"
          >
          <button>Add</button>    
    </form>
</template>

<script>
    import { useTaskStore } from '../stores/TaskStore';
    import { ref } from 'vue'

    export default {

        setup(){
            const taskStore = useTaskStore()
            const newTask = ref('')
            const handleSubmit = () => {
                if(newTask.value !== "") {

                    taskStore.addTask({
                        id: Date.now(),
                        title: newTask.value,
                        isFav: false
                    })
                    newTask.value = ""
                }
            }
            
            return {
                newTask,
                taskStore,
                handleSubmit
            }
        }
    }
</script>