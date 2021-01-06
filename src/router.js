import { createRouter, createWebHistory  } from 'vue-router'

import CoachesList from './pages/coach/CoachesList'
import CoachDetails from './pages/coach/CoachDetails'
// import CoachRegistration from './pages/coach/CoachRegistration'
import ContactCoach from './pages/request/ContactCoach'
// import CoachRequests from './pages/request/CoachRequests'
// import NotFound from './pages/common/NotFound'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: "/coaches"
        },
        {
            path: "/coaches",
            component: CoachesList
        },
        {
            path: "/coach/:id",
            component: CoachDetails,
            props: true
        },
        {
            path: "/register",
            component: () => import('./pages/coach/CoachRegistration')
        },
        {
            path: "/contact/:coachId",
            component: ContactCoach,
            props: true
        },
        {
            path: "/requests",
            component: () => import('./pages/request/CoachRequests')
        },
        {
            path: "/:notFound(.*)",
            component: () => import('./pages/common/NotFound')
        }
    ]
});

export default router;