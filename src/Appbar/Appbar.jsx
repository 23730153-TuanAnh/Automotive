import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import ListItemIcon from '@mui/material/ListItemIcon';
import vn from '../img/vietnam.png';
import us from '../img/usa.png';
import Items from '../Items.jsx/items';
import { removeVietnameseAccent } from '@mieuteacher/meomeojs';
import { flexbox, fontSize } from '@mui/system';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Divider from '@mui/material/Divider';
import img from '../img/1.jpg'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));



export default function AppBars(items) {
    const [language, setLanguage] = useState(localStorage.getItem("locales") || "en");
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const filter = items.items
    const filteredItems = filter.filter(item =>
        removeVietnameseAccent(item.text).toLowerCase().includes(removeVietnameseAccent(searchTerm).toLowerCase())
    );
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const changeLanguage = (lng) => {
        localStorage.setItem("locales", lng);
        setLanguage(lng);
        window.location.reload();
    };

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        changeLanguage(selectedLanguage);
    };

    return (
        <div>
            <AppBar >
                <Toolbar sx={{ marginTop: '10px', marginBottom: '10px' }}>
                    <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>

                    <Search style={{ width: '50%' }}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </Search>
                    <FormControl variant="standard" sx={{ marginLeft: 'auto', color: 'white', width: '35%' }}>
                        <Select
                            value={language}
                            onChange={handleLanguageChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            sx={{ color: 'white' }}
                        >
                            <MenuItem value="en">
                                <ListItemIcon onClick={() => changeLanguage('en')}>
                                    <Avatar src={us} sx={{ width: '70px', height: '100%' }} />
                                </ListItemIcon>
                                English
                            </MenuItem>
                            <MenuItem value="vi">
                                <ListItemIcon onClick={() => changeLanguage('vi')} >
                                    <Avatar src={vn} sx={{ width: '70px', height: '70px' }} />
                                </ListItemIcon>
                                Tiếng Việt
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}  >
                <Items items={items} />
            </Drawer>
            <List style={{ top: "150px" }}>
                {filteredItems.length >= 18 ? (
                    <div style={{ textAlign: 'center', padding: '20px', fontSize: '18px' }}>
                        <img src={img} />
                    </div>
                ) : (
                    filteredItems.map((item, index) => (
                        <div key={index}>
                            <ListItem button>
                                <ListItemAvatar>
                                    <Avatar src={item.imgSrc} style={{ width: '200px', height: '200px' }} />
                                </ListItemAvatar>
                                <ListItemText primary={item.text} />
                            </ListItem>
                            <Divider />
                        </div>
                    ))
                )}
            </List>
            {/* <Fab color="primary" aria-label="add" style={{ position: 'fixed', bottom: 16, right: 16 }}>
        <AddIcon />
      </Fab> */}
        </div >
    );
}
