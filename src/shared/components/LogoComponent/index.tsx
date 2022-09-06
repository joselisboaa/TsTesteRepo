import LogoComputer from '../../assets/img/undraw_handcrafts_computer.svg'
import './style.css'

const LogoHomePage = () => {
    return(
        <div className="boxLogoHomePage">
            <h1 className="TitleLogoHomePage">ALon</h1>
            <img src={LogoComputer} alt="Imagem de um computador" className="ComputerLogoHomePage"/>
        </div>
           
    )
}

export default LogoHomePage