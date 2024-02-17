interface Params {
    username: string
    password: string
}

export const checkAuthValid = ({
    username,
    password
}: Params) => {
    const userData = {
        username: 'dev',
        password: 'dev'
    }

    if (
        username !== userData.username ||
        password !== userData.password
    ) {
        return false
    }

    const currentLoginData = {
        username,
        lastAuthDate: Date.now()
    }

    localStorage.setItem('auth', JSON.stringify(currentLoginData))

    return true
}
