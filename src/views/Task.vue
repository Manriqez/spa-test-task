<template>
  <div>
    <div class="card" v-if="task">
      <h2>{{ task.title }}</h2>
      <p><strong>Дата рождения</strong>: {{ new Date(task.date).toLocaleDateString() }}</p>
      <p><strong>Описание</strong>: {{ task.description }}</p>
      <div>
        
        <router-link to="/"><button class="btn primary">Вернуться</button></router-link>
      </div>
    </div>
    <h3 class="text-white center" v-else>
      Пользователя с id = <strong>{{$route.params.id}}</strong> не существует.
    </h3>
  </div>
</template>

<script>
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'
import {computed} from 'vue'
export default {
  setup() {
    const route = useRoute()
    const store = useStore()
    
    const id = route.params.id
    const task = computed(() => store.getters.getUserById(id))
    return {
      task
    }
  }
}
</script>

<style scoped>

</style>