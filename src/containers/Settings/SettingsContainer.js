import React, { useState } from 'react';
import { connect } from "react-redux";
import SettingsComponent from "../../components/Settings/SettingsComponent";
import { updateUserInfo } from "../../state/actions/userActions";
import { userSelector } from "../../state/selectors/users";
import api, { genericHeaders } from "../../config";

const SettingsContainer = (props) => {
    const [profileIsOpen, toggleProfile] = useState(false);
    const [accountIsOpen, toggleAccount] = useState(false);
    const [paymentIsOpen, togglePayment] = useState(false);
    const [subscriptionIsOpen, toggleSubscription] = useState(false);
    const [preferencesIsOpen, togglePreferences] = useState(false);

    return (
        <SettingsComponent 
            profileIsOpen={profileIsOpen}
            accountIsOpen={accountIsOpen}
            paymentIsOpen={paymentIsOpen}
            subscriptionIsOpen={subscriptionIsOpen}
            preferencesIsOpen={preferencesIsOpen}
            toggleProfile={toggleProfile}
            toggleAccount={toggleAccount}
            togglePayment={togglePayment}
            toggleSubscription={toggleSubscription}
            togglePreferences={togglePreferences}
        />
    );
};

const mapStateToProps = (state) => ({
    user: userSelector(state)
});

const mapActions = (dispatch) => ({
    updateUser: (requestData) => dispatch(updateUserInfo(requestData))
});

export default connect (
    mapStateToProps,
    mapActions
)(SettingsContainer);