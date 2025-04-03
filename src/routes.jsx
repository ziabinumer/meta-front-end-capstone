/*
const routes = new Map()
routes.set('home', {name: 'home', path: '/'});
routes.set('about', {name: 'about', path: '/about'})
routes.set('menu', {name: 'menu', path: '/menu'})
routes.set('reservation', {name: 'reservation', path: '/reservation'})
routes.set('booking confirm', {name: 'booking confirm', path: '/booking-confirmed'})
routes.set('order', {name: 'order', path: '/order'})
routes.set('login', {name: 'login', path: '/login'})

export default routes;

*/

import Home from "./components/pages/Home/Index";
import ComingSoon from "./components/pages/ComingSoon";
import Reservation from "./components/pages/Reservation";
const routes = [
    {
        name: 'home',
        path: '/',
        element: <Home/>
    },
    {
        name: 'about',
        path: '/about',
        element: <ComingSoon/>
    },
    {
        name: 'menu',
        path: '/menu',
        element: <ComingSoon/>
    },
    {
        name: 'reservation',
        path: '/reservation',
        element: <Reservation/>
    },
    {
        name: 'order',
        path: '/order',
        element: <ComingSoon/>
    },
    {
        name: 'login',
        path: '/login',
        element: <ComingSoon/>
    }
]

export default routes;