import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';


import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

const Items = (items) => {
    return (
        <List style={{ width: "600px" }}>
            {items.items.items.map((item, index) => (
                <div key={index}>
                    <ListItem button>
                        <ListItemAvatar >
                            <Avatar src={item.imgSrc} style={{ width: '100px', height: '100px' }} />
                        </ListItemAvatar>
                        <ListItemText primary={item.text} style={{ fontSize: '30px'}} />
                    </ListItem>
                    <Divider />
                </div>
            ))}
        </List>
    );
};

export default Items;


