/*
    Realiza un parseo de ruta para saber a
    donde me debo dirigir
*/
const resolveRoutes = async (route = '') => {
    if (route.length <= 3) {
        const validRoute = route === '/' ? route : '/:id'
        return validRoute
    }
    return `/${route}` // /about
}

export default resolveRoutes
