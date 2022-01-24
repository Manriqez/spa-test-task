<template>
<div class="card-wrapper">
  <h1 class="text-white center" v-if="users.length === 0">Пользователей пока нет</h1>
  <template v-else>
    <div class="card" v-for="(user, id) in users" :key="id">
      <h2 class="card-title">
        {{ user.title }}
      </h2>
      <button class="btn primary" @click="redirect(user.id)">Посмотреть</button>
    </div>
  </template>
</div>
</template>

<script>
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import {computed} from 'vue'
export default {
  setup() {
    const store = useStore()
    const router = useRouter()

    const users = computed(() => store.getters.users)
    
    function redirect(id) {
      router.push(`/user/${id}`)
    }

    return {
      users,
      redirect
    }
  }
}
</script>
