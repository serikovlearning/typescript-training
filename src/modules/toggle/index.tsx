import './styles.css'

/** У нас есть n-кнопок.
 * При нажатии на любую из них - открывается карточка под ней.
 * Все остальные карточки должны быть закрыты.
 * Убрать атрибут hidden и управлять отображением.
 * Можно декомпозировать на компоненты.
 */

const Toggle = () => {
    return (
        <div className="cards">
            <div className="card">
                <div className="header">
                    <span>Card 1</span>
                    <button>Toggle me</button>
                </div>
                <div className="form">
                    <span>
                        Enter your userdata
                    </span>
                    <input type="text" placeholder="username"/>
                    <button>Send data</button>
                </div>
            </div>
            <div className="card">
                <div className="header">
                    <span>Card 2</span>
                    <button>Toggle me</button>
                </div>
                {false && <div className="form">
                    <span>
                        Enter address data
                    </span>
                    <input type="text" placeholder="Country"/>
                    <button>Send data</button>
                </div>}
            </div>
        </div>
    )
}

export default Toggle
