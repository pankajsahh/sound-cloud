import { useContext } from 'react';
import Context from '../context/Context';
import './Search.css'



const Search =()=>{
    const {searchKey,serSearchKey} = useContext(Context);
    function handelChange(e){
        let value = e.target.value
        serSearchKey(value)
    }
    return (
        <div className='Search'>
            <input onChange={handelChange} value={searchKey} type="text" placeholder='Search'/>
        </div>
        
    )
}
export default Search;