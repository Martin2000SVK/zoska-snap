
// /src/components/Navbar.tsx

"use client";

import * as React from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [value, setValue] = React.useState('/');
  const router = useRouter();

  const handleNavigation = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(newValue); 
  };

  return (
    <Box sx={{ width: '100%' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleNavigation}
      >
        <BottomNavigationAction label="Domov" value="/" icon={<HomeIcon />} />
        <BottomNavigationAction label="Profily" value="/profil" icon={<AccountCircleIcon />} />
        <BottomNavigationAction label="Príspevky" value="/prispevok" icon={<AddCircleIcon />} />
      </BottomNavigation>
    </Box>
  );
}


