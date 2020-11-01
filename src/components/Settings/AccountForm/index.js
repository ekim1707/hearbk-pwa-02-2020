import React from 'react';
import content from "./content";
import "./styles.scss";
import InputField from "../../../common/InputField";
import Button from "../../../common/Button";

const AccountForm = ({ accountIsOpen, toggleAccount, email, password, onInputChange }) => {
    return (
        <section className="formContainer">
            {!accountIsOpen && (                
                <header onClick={() => toggleAccount(true)} className="formHeaderContainer">
                    <span className="expandIcon">
                        +
                    </span>
                    <div className="formHeaderText">
                        {content.SUBCONTAINER2_LABEL}
                    </div>
                </header>
            )}

            {accountIsOpen && (
                <React.Fragment>
                    <header onClick={() => toggleAccount(false)} className="formHeaderContainer">
                        <span className="expandIcon">
                            -
                        </span>
                        <div className="formHeaderText">
                            {content.SUBCONTAINER2_LABEL}
                        </div>
                    </header>
                    <div className="formInputContainer">
                        <label for="email" className="formInputLabel">
                            {content.SUBCONTAINER2_SUBLABEL1}
                        </label>
                        <InputField 
                            id="email"
                            className="formInputField"
                            value={email}
                            onChange={onInputChange}
                            placeholder={content.SUBCONTAINER2_PLACEHOLDER1}
                            hasIcon
                            iconPosition="right"
                            iconName="pencil_blue"
                        />
                    </div>
                    <div className="formInputContainer">
                        <label for="password" className="formInputLabel">
                            {content.SUBCONTAINER2_SUBLABEL2}
                        </label>
                        <InputField 
                            id="password"
                            className="formInputField"
                            value={password}
                            onChange={onInputChange}
                            placeholder={content.SUBCONTAINER2_PLACEHOLDER2}
                            hasIcon
                            iconPosition="right"
                            iconName="pencil_blue"
                        />
                    </div>
                    <div className="buttonWrapper">
                        <Button className="launchButton" buttonText={content.SUBCONTAINER2_BUTTON_TEXT} ></Button>
                    </div>
                </React.Fragment>
            )}
        </section>
    );
};

AccountForm.defaultProps = {
    email: "myemail@gmail.com",
    password: ""
};

export default AccountForm;