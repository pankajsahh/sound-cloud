import { useContext, useEffect, useState } from 'react';
import Card from '../Components/Card/Card';
import Context from '../Components/context/Context';
import Header from '../Components/header/Header'
 import './Landing.css'

const LandingPage = ()=>{
    
    const {searchKey} = useContext(Context);
    const list = [0,1,2,3,4,5,6,7,8,9,7,8,6,8,4,5,2,3,21,5,6,1,2,3,5,1,2,3,4,11,2,2];
     const [data,setdata] = useState(list);
     const [loaded,setloaded] = useState(true);
     function handeldata(){

        let filter = [];
        filter = data.filter((i)=>{return searchKey===""?i:i===parseInt(searchKey)})
        console.log(filter)
        setdata(filter)
        if(searchKey==="") setdata(list);
    
     }
     useEffect(()=>{
        handeldata();
    
    },[searchKey])


    return(<>
        <Header/>
        {/* CardList */}

       
        {loaded?
        <div className='cardlist'>
        {
            data.map((i,x)=>{
                return(
                    <Card key={x}/>
                )
                
            })
        }
    </div>
    :
        // loader start here

    <div className="Loading">
           <div className={`Outload`}><div className={`Inload `}></div></div>
        </div> 
    }
       
        

        {/* player starts here */}

        <div className="bottomplayer">
            <div className="line">
                <div className='line_over'></div>
                <div className='line_left'></div>
            </div>
            <div className="songdetail">
                <p>19:00/10:00</p>
                
                <p>max</p>
            </div>
        </div>

        </>
    )
}
export default LandingPage;