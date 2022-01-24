<template>
  <form class="card">
    <h1>Создать нового пользователя</h1>
    <div class="form-control">
      <label for="name">Имя</label>
      <input type="text" id="name" v-model="userTitle">
    </div>

    <div class="form-control">
      <label for="date">Дата рождения</label>
      <input type="date" id="date" v-model="userDate">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="userDesc"></textarea>
    </div>
    
    <button class="btn primary" @click="submit" :disabled="!disableChecker">Создать</button>
  </form>
</template>


<script>

import {computed, ref} from 'vue'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'

export default {
  setup() {
    const userTitle = ref('')
    const userDate = ref('')
    const userDesc = ref('')
    const store = useStore()
    const router = useRouter()

    function submit() {
      const newUser = {
        id: Date.now().toString(),
        title: userTitle.value,
        date: new Date(userDate.value).setHours(23,59,59,999),
        description: userDesc.value,
        status: 'active'
      }
      store.dispatch('createUser', newUser)
      router.push('/')
    }

    const disableChecker = computed(() => userTitle.value !== '' && userDate.value && userDesc.value !== '')

    return {
      submit,
      disableChecker,
      userTitle,
      userDate,
      userDesc
    }
  }
}
</script>