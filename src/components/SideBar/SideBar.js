import React from 'react'
import './SideBar.css';

//importing components
import SidebarOption from '../SidebarOption/SidebarOption';

//material core
import { Button, IconButton } from '@material-ui/core';

//material Icon
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';

function SideBar() {
    return (
        <div className="sidebar">
            <Button className="sidebar__compose" 
                startIcon={<AddIcon style={{fontSize : 40}}/>}
            >
                Compose
            </Button> 

            <SidebarOption Icon={InboxIcon} Title="Inbox" Number={54} selected ={true} />
            <SidebarOption Icon={StarIcon} Title="Starred" Number={54} />
            <SidebarOption Icon ={AccessTimeIcon} Title="Snoozed" Number ={ 54} />
            <SidebarOption Icon={LabelImportantIcon} Title="Important" Number={54} />
            <SidebarOption Icon={NearMeIcon} Title="Sent" Number={54} />
            <SidebarOption Icon={NoteIcon} Title="Draft" Number={54} />
            <SidebarOption Icon={ExpandMoreIcon} Title="More" Number={54} />
            

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton >
                        <PersonIcon />
                    </IconButton>

                    <IconButton >
                        <DuoIcon />
                    </IconButton>

                    <IconButton >
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
            

        </div>
    )
}

export default SideBar
