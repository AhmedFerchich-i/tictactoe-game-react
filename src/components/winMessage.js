import { MatrixContext } from "../App";
import {useContext} from "react"
import {useState,useEffect} from "react"
import './winMessage.css'
export default function WinMessage(){

    const{matrix,gameOver,setGameOver}=useContext(MatrixContext)
    const [p1win,setP1Win]=useState(false)
    const [p2win,setP2win]=useState(false)
    const winCombosList=[

        ['r1c1','r1c2','r1c3'],['r2c1','r2c2','r2c3'],['r3c1','r3c2','r3c3'],
        ['r1c1','r2c1','r3c1'],['r2c1','r2c2','r3c2'],['r3c1','r3c2','r3c3'],
        ['r1c1','r2c2','r3c3'],['r1c3','r2c2','r3c1']

    ]
    function getPlayerCombos(mtx,sign){
        
        var combsArr=Object.keys(mtx).filter(key=>mtx[key]==sign)
        return combsArr
    }
    function checkP1Win(){
        var combs=getPlayerCombos(matrix,1)
        return winCombosList.some(combo=>{return combo.every(el=>{return combs.includes(el)})})


    }
    function checkP2Win(){
        var combs=getPlayerCombos(matrix,2)
        return winCombosList.some( combo=>{return combo.every(el=>{return combs.includes(el)})})
    }
    useEffect(()=>{setP1Win(checkP1Win());setP2win(checkP2Win())},[matrix])
    useEffect(()=>{if(p1win || p2win){setGameOver(true)}},[p1win,p2win])


    return(

        <div className='win-alert'>
            { p1win && <div className="p1-win-alert"> Player 1 is the winner </div>}
            { p2win && <div className="p2-win-alert"> Player 2 is the winner </div>}
        </div>
    )


}