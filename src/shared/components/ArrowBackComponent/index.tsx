import ArrowLeftCircle from '../../assets/img/ArrowLeftCircleFill.svg'
import { backPageHome } from '../../utils/backPage'

import './style.css'

const ArrowBackComponent = () => {
    return(
        <div className="boxArrowBack" onClick={() => {console.log("clicado")}} >
            <img src = {ArrowLeftCircle} alt="seta de voltar" />
            <p className="back"> Voltar</p>
        </div>
          
        
    )
} 

export default ArrowBackComponent