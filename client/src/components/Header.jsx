import Logo from '../assets/Logo.svg'
import { NavBar } from './NavBar'
import { Profile } from './Profile'
import { SearchBar } from './SearchBar'

export const Header = () => {
    return (
        <header className="bg-gray-900 flex place-content-between box-border h-24 ">
            <img className="box-border h-50 " src={Logo} alt="Logo" />
            <NavBar />
            <SearchBar />
            <Profile />
        </header>
    )
}

