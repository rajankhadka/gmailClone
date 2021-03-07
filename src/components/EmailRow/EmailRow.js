import React from 'react'
import './EmailRow.css';

import { Checkbox, IconButton } from '@material-ui/core';
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons';

import { useHistory } from "react-router-dom";

//redux
import { connect} from "react-redux";
import { selectmailAction } from "../../redux/action/mailSliceAction";

function EmailRow({ title, subject, description, time, id,selectmailAction }) {
    const history = useHistory();
    
    const openMail = () => {
        selectmailAction({
            id,
            title,
            subject,description,time
        });
        history.push('/mail')
    }

    return (
        <div className="emailRow" onClick={()=> openMail()}>
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlined />
                </IconButton>

                <IconButton>
                    <LabelImportantOutlined />
                </IconButton>
            </div>

            <h3 className="emailRow__title">
                {title}
            </h3>

            <div className="emailRow__message">
                <h4>{subject}
                    <span className="emailRow__description">
                        { " "}-{ " "}{description}
                    </span>
                </h4>
            </div>

            <p className="emailRow__time">
                {time}
            </p>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        selectmailAction: (data) => dispatch(selectmailAction(data)),
    }
    
}

export default connect(undefined,mapDispatchToProps) (EmailRow);
