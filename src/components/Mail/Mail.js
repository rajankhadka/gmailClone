import React from 'react';
import './Mail.css';

import { IconButton } from '@material-ui/core';
import {
    ArrowBack, CheckCircle,
    Delete, Email, Error,
    ExitToApp,
    LabelImportant, MoreVert,
    MoveToInbox, Print, UnfoldMore, WatchLater
} from '@material-ui/icons';

import { useHistory } from "react-router-dom";

//redux
import { connect } from "react-redux";

function Mail(props) {
    const history = useHistory();
    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsleft">
                    <IconButton onClick={()=> history.push('/')}>
                        <ArrowBack />
                    </IconButton>

                    <IconButton>
                        <MoveToInbox />
                    </IconButton>

                    <IconButton>
                       <Error /> 
                    </IconButton>

                    <IconButton>
                        <Delete />
                    </IconButton>

                    <IconButton>
                        <Email />
                    </IconButton>

                    <IconButton>
                        <WatchLater />
                    </IconButton>

                    <IconButton>
                        <CheckCircle />
                    </IconButton>

                    <IconButton>
                        <LabelImportant />
                    </IconButton>

                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>

                <div className="mail__toolsright">
                    <IconButton>
                        <UnfoldMore />
                    </IconButton>

                    <IconButton>
                        <Print />
                    </IconButton>

                    <IconButton>
                        <ExitToApp />
                    </IconButton>
                </div>
            </div>
            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2>{props.selectmailReducer?.subject }</h2>
                    <LabelImportant className="mail__important" />
                    <p>{props.selectmailReducer?.title }</p>
                    <p className="mail__time">{props.selectmailReducer?.time }</p>
                </div>
                <div className="mail__message">
                    <p>{props.selectmailReducer?.description }</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        selectmailReducer:state.mailSlice.selectmailReducer
    }
}

export default connect(mapStateToProps, undefined)(Mail);
