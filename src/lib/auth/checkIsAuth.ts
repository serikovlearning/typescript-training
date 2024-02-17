const AUTH_TIME = 2 * 60 * 1000 // 2 - количество минут

export const checkIsAuth = () => {
    const authData = localStorage.getItem('auth')
    if (authData === null) {
        return false
    }

    const date = JSON.parse(authData).lastAuthDate

    if (date === undefined) {
        return false
    }

    if (date - Date.now() < -AUTH_TIME) {
        localStorage.removeItem('auth')
        return false
    }

    return true
}
