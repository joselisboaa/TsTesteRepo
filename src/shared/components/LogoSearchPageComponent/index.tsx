import LogoComputer from '../../assets/img/undraw_handcrafts_computer.svg'
import './style.css'

const LogoSearchPage = () => {
    return(
        <div className="boxLogoSearchPage">
            <img src={LogoComputer} alt="Imagem de um computador" className="ComputerLogoSearchPage"/>
            <h2 className="TitleLogoSearchPage">ALon</h2>
        </div>
           
    )
}

export default LogoSearchPage