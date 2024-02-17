import './styles.css'

const FixTheRouter = () => {
    return (
        <div className="block">
            <h2>Fix the router</h2>
            <span>1. Подключить любой роутер на свой вкус</span>
            <span>2. Сделать страницу авторизации, которая вместо отправки данных должна проверять их функцией
                <span className='code'>
                    @/lib/auth/checkAuthValid
                </span>
            </span>
            <span>3. Сделать protected-route на страницу, которая будет проверять авторизацию функцией
                <span className="code">
                    @/lib/auth/checkIsAuthorized
                </span>
            </span>
        </div>
    )
}

export default FixTheRouter
