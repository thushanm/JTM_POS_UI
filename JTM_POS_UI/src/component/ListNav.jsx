import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import ExtensionSharpIcon from '@mui/icons-material/ExtensionSharp';
import FaceIcon from '@mui/icons-material/Face';

export  function ListNav() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
            <BottomNavigationAction
                label="POS"
                value="pos"

                icon={<PointOfSaleIcon/>}
            />
            <BottomNavigationAction
                label="Item"
                value="item"
                icon={<ExtensionSharpIcon/>}
            />
            <BottomNavigationAction
                label="Customer"
                value="customer"
                icon={<FaceIcon />}
            />
            <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
        </BottomNavigation>
    );
}