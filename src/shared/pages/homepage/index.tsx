import React from "react";

import LogoHomePage from "../../components/LogoComponent";
import { SearchForm } from "../../components/SearchFormComponent";
import FooterComponent from "../../components/FooterComponent";

import '../../assets/styles/global-styles.css'
import './style.css'


const HomePage = () => {
    return (
        <div className="boxHomePage">
            <LogoHomePage/> 
            <SearchForm/>
            <FooterComponent/> 
        </div>
    )
}

export default HomePage