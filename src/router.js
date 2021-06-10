import Vue from 'vue'
import VueRouter from 'vue-router'
import Notas from './componentes/Notas.vue'
import TablaRespuestas from './componentes/TablaRespuestas.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect:'/Notas' },
        { path: '/Notas', component: Notas },
        { path: '/TablaRespuestas', component: TablaRespuestas },
    ]
})