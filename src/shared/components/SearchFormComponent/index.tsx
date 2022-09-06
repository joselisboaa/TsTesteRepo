import { useFormik, Form, Field } from "formik"
import GreenSearchButton from "../SearchButtonComponent";
import NewProtocoloButton from "../NewProtocoloButtonComponent";
import { useContext } from "react";
import { InfosContext } from "../../../contexts/ContextAPI/context";
import SearchIcon from "../../assets/img/SearchImgIcon.svg";
import { useNavigate } from "react-router-dom";

export const SearchForm = () => {

    const navigate = useNavigate();
    const searchContext = useContext(InfosContext);
    const {infoState, infoDispatch} = searchContext;


    const formik = useFormik({
        initialValues: () => {
            searched: ''
        },
        onSubmit: values => {
            console.log(values);
            navigate("search");
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="ContainerSearchBox">
                <input name="HomePageSearchField" id="HomePageSearchField" className="SearchInput" placeholder="Email, matrícula ou n° protocolo..." />
                <div className="boxSearchIcon">
                    <img src={SearchIcon} alt="icone de lupa"/>
                </div>
            </div>
            <GreenSearchButton/>
            <NewProtocoloButton/>
        </form>
    )
}