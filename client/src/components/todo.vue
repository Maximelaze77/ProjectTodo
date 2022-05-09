<template>
  <div class="container">
    <!-- Heading -->
    <h2 class="text-center mt-5">JUST DO IT</h2>

    <!-- Input -->
         <button class="homepage15-button-secondary202839">
            <span class="homepage15-text02">
               <router-link class="homepage15-text03" to="/">logout</router-link>
            </span>
      </button>
    <div class="d-flex mt-5">
      <input
        type="text"
        v-model="task"
        placeholder="Enter task"
        class="w-100 form-control"
      />
      <button class="btn" @click="submitTask">
        +
      </button>
    </div>

    <!-- Task table -->
    <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col">Task</th>
          <th scope="col" style="width: 120px">Status</th>
          <th scope="col" class="text-center">#</th>
          <th scope="col" class="text-center">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td>
            <span :class="{ 'line-through': task.status === 'finished' }">
              {{ task.name }}
            </span>
          </td>
          <td>
            <span
              class="pointer noselect"
              @click="changeStatus(index)"
              :class="{
                'text-danger': task.status === 'to-do',
                'text-success': task.status === 'finished',
                'text-warning': task.status === 'in-progress',
              }"
            >
              {{ capitalizeFirstChar(task.status) }}
            </span>
          </td>
          <td class="text-center">
            <div @click="deleteTask(index)">
              <span class="fa fa-trash pointer"></span>
            </div>
          </td>
          <td class="text-center">
            <div @click="editTask(index)">
              <p class="fa fa-pen pointer"></p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/*eslint-disable */
import taskDataService from "@/services/taskDataService"

export default {
  props: {
    msg: String,
  },

  data() {
    return {
      task: "",
      editedTask: null,
      statuses: ["to-do", "doing", "finished"],
      /* Status could be: 'to-do' / 'in-progress' / 'finished' */
      tasks: [],
      status:"",
    };
  },

  methods: {
    /**
     * Capitalize first character
     */
    capitalizeFirstChar(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },

    /**
     * Change status of task by index
     */
    changeStatus(index) {
      let newIndex = this.statuses.indexOf(this.tasks[index].status);
      if (++newIndex > 2) newIndex = 0;
      this.tasks[index].status = this.statuses[newIndex];
    },

    /**
     * Deletes task by index
     */
    async deleteTask(index) {

      this.tasks.splice(index, 1);
      await taskDataService.delete(index)
      await this.refreshPosts()

    },

    /**
     * Edit task
     */
    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },

    mounted () {
    taskDataService.getAll()
    .then(response => {
    this.task = response.data
    console.log(response.data)

    })
    .catch(e => {
    console.log(e)
    })
    },

    /**
     * Add / Update task
     */
    submitTask() {
      if (this.task.length === 0) return;

      /* We need to update the task */
      if (this.editedTask != null) {
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
      } else {
        /* We need to add new task */
        this.tasks.push({

          name: this.task,
          status: "todo",
          
        });
        const task = ({
          name: this.task,
          status: "todo",

        })
        const response = taskDataService.create(task)
      }
      this.task = "";
      this.status="";
    },
  },

};
</script>

<style scoped>


.pointer {
  cursor: pointer;
}

.line-through {
  text-decoration: line-through;
}
.btn{
  background-color: blueviolet;
  color: aliceblue;
}
.table{
  top: 60px;
}
.container{
  max-width: 900px;
  box-sizing: border-box;
}
</style>