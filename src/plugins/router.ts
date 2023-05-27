import Home from '../views/Home.vue';
import Counter from '../views/Counter.vue';


import { createMemoryHistory, createRouter } from 'vue-router';

export const routes = [
    { 
        path: '/', 
        component: Home,
        meta: {
            title: 'Home'
        }
    },
    { 
        path: '/counter', 
        component: Counter,
        meta: {
            title: 'Counter'
        }
    },

]

const  router = createRouter({
    history: createMemoryHistory(),
    routes
});


export default router;