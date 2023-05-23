import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import TvIcon from '@mui/icons-material/Tv';
import InstallDesktopIcon from '@mui/icons-material/InstallDesktop';
import NotStartedIcon from '@mui/icons-material/NotStarted';
import CodeIcon from '@mui/icons-material/Code';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { Link } from '@mui/material';


const categories = [
  {
    id: 'Introduction',
    children: [
      {
        id: 'Information',
        icon: <MenuIcon />,
        active: true,
      },
      { id: 'Suported Versions', icon: <SyncAltIcon /> },
      { id: 'Technology', icon: <TvIcon /> },
    ],
  },
  {
    id: 'Getting started',
    children: [
      { id: 'Installing the app', icon: <InstallDesktopIcon /> },
      { id: 'Opening the app', icon: <NotStartedIcon /> },
    ],
  },
  {
    id: 'Features',
    children: [
      { id: 'Functions', icon: <CodeIcon /> },
    ],
  },
  {
    id: 'Help',
    children: [
      { id: 'Suport', icon: <ContactSupportIcon /> },
      { id: 'Contact us', icon: <HelpCenterIcon /> },
    ],
  },  
];

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function Navigator(props: DrawerProps) {
  const { ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
        Tech Writing Challenge
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }) => (
              <ListItem disablePadding key={childId}>
                {/* <ListItemButton selected={active} sx={item}> */}
                <Link
                  component={ListItemButton}
                  to={`#${childId.replace(/ /g, '-')}`}
                  smooth
                  sx={{
                    ...item,
                    textDecoration: 'none',
                  }}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </Link>
                {/* </ListItemButton> */}
              </ListItem>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}