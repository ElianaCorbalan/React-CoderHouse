import Logo from '../img/logoUnicornio.png';
import { NavLink } from "react-router-dom"

const Icons = () => {
    return (<>
        <div>
            <NavLink to={`/`}><img style={{ width: '80px' }} src={Logo} alt='logo' /></NavLink>
        </div>
    </>)
}

export default Icons;