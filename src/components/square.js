import './square.css'
import {useContext,useState,useEffect} from 'react'
import {MatrixContext } from "../App"
import O from './o'
import X from './x'
function Square({position}){

    const {matrix,setMatrix,isX,setIsX,retry,gameOver,setRetry}=useContext(MatrixContext)
    const [clicked,setClicked]=useState(false)
    
    function updateMatrix(pos){
        if (matrix[pos]==0){
            const newMatrix={...matrix,[pos]:isX ? 1:2}
            setMatrix(newMatrix)
            setIsX(!isX)

        }
        
    }
   function handleClik(){
    setClicked(true)
   }
   useEffect(()=>{
    if (retry){
        setClicked(false)
        setRetry(false)
        //console.log('clicked ',clicked)
        
    }

   },[retry,setRetry])

    return(
        <div className={`square ${clicked && !gameOver ? "clicked":""} ${!clicked && gameOver ? "disabled":""}  `} 
        onClick={()=>{updateMatrix(position);handleClik()}} >
          { 
             matrix[position] ==1 ? <X></X> : 
              matrix[position] ==2 ? <O></O> :
               null
         }
        </div>
    )
}

export default Square