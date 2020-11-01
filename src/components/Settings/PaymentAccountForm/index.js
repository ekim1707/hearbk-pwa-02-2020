import React from 'react';
import content from "./content";
import "./styles.scss";
import Button from "../../../common/Button";
import PaymentCard from "./PaymentCard";

const PaymentAccountForm = ({ paymentIsOpen, togglePayment }) => {
    return (
        <section className="formContainer">
            {!paymentIsOpen && (
                <header onClick={() => togglePayment(true)} className="formHeaderContainer">
                    <span className="expandIcon">
                        +
                    </span>
                    <div className="formHeaderText">
                        {content.SUBCONTAINER3_LABEL}
                    </div>
                </header>
            )}

            {paymentIsOpen && (
                <React.Fragment>
                    <header onClick={() => togglePayment(false)} className="formHeaderContainer">
                        <span className="expandIcon">
                            -
                        </span>
                        <div className="formHeaderText">
                            {content.SUBCONTAINER3_LABEL}
                        </div>
                    </header>
                    <div className="paymentCardsContainer">
                        <PaymentCard />
                    </div>
                    <div className="buttonWrapper">
                        <Button className="launchButton" buttonText={content.SUBCONTAINER3_BUTTON_TEXT} ></Button>
                    </div>
                </React.Fragment>
            )}
        </section>
    );
};

export default PaymentAccountForm;