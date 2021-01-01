import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue';

import TeamsList from './components/teams/TeamsList.vue'
import TeamsFooter from './components/teams/TeamsFooter.vue'
import UsersFooter from './components/users/UsersFooter.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import UsersList from './components/users/UsersList.vue'
import NotFound from './components/nav/NotFound.vue'

const router = createRouter({
    routes: [
        
        {
            path: "/",
            redirect: "/teams"
        },
        {
            name: "teams",
            path: "/teams",
            meta: {
                needsAuth: true
            },
            // alias: "/", // With alias , url will not change 
            components: {
                default: TeamsList,
                footer: TeamsFooter
            },
            children: [
                {
                    name: "team-members",
                    path: ":teamId",
                    component: TeamMembers,
                    props: true
                }
            ],
            beforeEnter: function(to, from, next) {
                // individual nav guard
                console.log('beforeEnter', to, from, next)
                next()
            }
        },
        {
            path: "/users",
            components: {
                default: UsersList,
                footer: UsersFooter
            }
        },
        {
            path: "/:notFound(.*)",
            component: NotFound
        }
        
    ],
    history: createWebHistory(),
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
        console.log(to , from, savedPosition);
        if (savedPosition) {
            return savedPosition
        } else {
            return { left: 0, top: 0 }
        }
    }
});

router.beforeEach(function (to, from, next) {
    console.log('beforeEach', to, from , next);
    // use next to control whether the link is allowed or not
    // if you use next(false), it will not go to the link
    // if you use next() or next(true), it will work

    // Use meta to make decisions on different paths
    // if (to.meta.needsAuth) { 
    // } else {

    // }
    next();
});


router.afterEach(function (to, from) {
    console.log('afterEach', to, from);
    // after each doesn't have next
    // it is called only when link is confirmed
    
});

const app = createApp(App)

app.use(router);

app.mount('#app');
