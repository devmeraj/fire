import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleButton, ...allOtherProps}) => (
        <button {...allOtherProps} className={`${isGoogleButton ? 'isGoogleButton': ''} custom-button`}>{children}</button>
);

export default CustomButton;