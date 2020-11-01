import React from 'react';
import content from "./content";
import "./styles.scss";
import Details from "../../../containers/ListenerPreferences/Details";
import Price from "../../../containers/ListenerPreferences/Price";

const ListenerPreferencesForm = ({ preferencesIsOpen, togglePreferences }) => {
    return (
        <section className="formContainer">
            {!preferencesIsOpen && (
                <header onClick={() => togglePreferences(true)} className="formHeaderContainer">
                    <span className="expandIcon">
                        +
                    </span>
                    <div className="formHeaderText">
                        {content.SUBCONTAINER5_LABEL}
                    </div>
                </header>
            )}

            {preferencesIsOpen && (
                <React.Fragment>
                    <header onClick={() => togglePreferences(false)} className="formHeaderContainer">
                        <span className="expandIcon">
                            -
                        </span>
                        <div className="formHeaderText">
                            {content.SUBCONTAINER5_LABEL}
                        </div>
                    </header>
                    <Details />
                    <div className="priceContainer">
                        <Price />
                    </div>
                </React.Fragment>
            )}
        </section>
    );
};

export default ListenerPreferencesForm;