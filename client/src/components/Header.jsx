import logo from '../assets/logo.svg'
import { NavBar } from './NavBar'
import { SearchBar } from './SearchBar'

export const Header = () => {
    return (
        <header className="bg-gray-900 flex place-content-between box-border h-24 ">
            <img className="box-border h-50 " src={logo} alt="Logo" />
            <NavBar />
            <SearchBar />
        </header>
    )
}

