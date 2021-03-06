import React from 'react'

import './Header.css';

//importing material Icon
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';

//material core
import { IconButton,Avatar } from '@material-ui/core';

//redux
import { connect} from "react-redux";
import { logout} from "../../redux/action/userSliceAction";
import { auth } from '../../firebase';

function Header(props) {

    const signOut = () => {
        auth.signOut().then(() => {
            props.logoutAction();
        });
    };

    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img 
                    src="https://i.pinimg.com/736x/ae/47/fa/ae47fa9a8fd263aa364018517020552d.jpg"
                    alt="gmail"
                />
            </div>
            
            <div className="header__middle">
                <IconButton>
                    <SearchIcon />
                </IconButton> 
                
                <input placeholder="Search mail" type="text" />
                <IconButton>
                    <ArrowDropDownIcon className="header__inputCaret" />
                </IconButton>
            </div>

            <div className="header__right">
                <IconButton >
                    <HelpIcon />
                </IconButton>
                <IconButton >
                    <SettingsIcon />
                </IconButton>
                <IconButton >
                    <AppsIcon />
                </IconButton>
                <Avatar src={props.userSlice.photoUrl} onClick={signOut} />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userSlice: state.userSliceReducers.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logoutAction: () => dispatch(logout()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
