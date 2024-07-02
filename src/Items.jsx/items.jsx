import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';


import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

const Items = (items) => {
    return (
        <List>
            {items.items.items.map((item, index) => (
                <div key={index}>
                    <ListItem button>
                        <ListItemAvatar >
                            <Avatar src={item.imgSrc} style={{ width: '150px', height: '150px' }} />
                        </ListItemAvatar>
                        <ListItemText primary={item.text} />
                    </ListItem>
                    <Divider />
                </div>
            ))}
        </List>
    );
};

export default Items;


