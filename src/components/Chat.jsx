import React from "react";
import MessengerCustomerChat from 'react-messenger-customer-chat';

function Chat(){
    return(
        <MessengerCustomerChat
            pageId="<PAGE_ID>"
            appId="<APP_ID>"
            htmlRef="<REF_STRING>"
        />
    )
}

export default Chat;