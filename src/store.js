import {createStore} from 'vuex'

export const store = createStore({
    state() {
        return {
            users: JSON.parse(localStorage.getItem('users')) ?? []
        }
    },
    mutations: {
        createUser(state, user) {
            state.users.push(user)
            localStorage.setItem('users', JSON.stringify(state.users))
        }
    },
    actions: {
        createUser({commit}, task) {
            commit('createUser', task)
        }
    },
    getters: {
        users(state) {
            return state.users
        },
        getUserById: state => id => {
            return state.users.find(user => user.id === id)
        }
    }
})