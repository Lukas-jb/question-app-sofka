import {Link} from "react-router-dom"

const Navbar = ({elements}) => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark color-navbar ">
                <img src="/logo.png" alt="Logo" width={80} height={80} style={{marginLeft:"50px"}}/>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link
                                className="nav-link fs-5 text-decoration-none" style={{marginLeft: "20px"}}
                                to={`/public/question/`}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link fs-5 text-decoration-none" style={{marginLeft: "20px"}}
                                to={`/prueba2`}
                            >
                                Preguntas
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
