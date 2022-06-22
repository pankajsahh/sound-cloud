import './Header.css'
import Search from '../search/Search';
const Header = ()=>{
    return(
        <div className="header">
            <h3>Relevel Sound Cloud</h3>
            <Search/>
        </div>
    )
}
export default Header;