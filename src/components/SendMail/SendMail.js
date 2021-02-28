import React from 'react';
import './SendMail.css';
import { useForm } from "react-hook-form";

import { Close } from '@material-ui/icons';
import { Button, IconButton } from '@material-ui/core';

//redux
import { connect } from "react-redux";
import { closeSendMessage } from "../../redux/action/mailSliceAction";

function SendMail(props) {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = formdata => {
        console.log(formdata)
    }

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>
                    New Message 
                </h3>
            </div>

            <Close className="sendMail__close" onClick = {props.closeSendMessage} />
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="to"
                    placeholder="To" type="text"
                    ref={register({ required: true })}
                />
                
                {errors.to && <p className="sendMail__error">To is Required!</p>}

                <input name="subject"
                    placeholder="Subject" type="text"
                    ref={register({ required: true })}
                />
                
                {errors.subject && <p className="sendMail__error">Subject is Required!</p>}

                <input name="message" placeholder="Message"
                    type="text" className="sendMail__message"
                    ref={register({ required: true })}
                />
                
                {errors.message && <p className="sendMail__error">Message is Required!</p>}

                <div className="sendMail__options">
                    <Button
                        className="sendMail__send"
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Send
                    </Button>
                </div>
            </form>

            
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        closeSendMessage : () => dispatch(closeSendMessage()),
    }
}

export default connect(undefined,mapDispatchToProps)(SendMail);
