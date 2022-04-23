import Header from '../templates/Header'
import Home from '../pages/Home'
import Character from '../pages/Character'
import NotFound from '../pages/NotFound'

const routes = {
    '/': Home,
    '/:id': Character,
}

const router = async () => {
    const header = document.getElementById('header') || null
    const content = document.getElementById('content') || null

    header.innerHTML = await Header()
}

export default router
