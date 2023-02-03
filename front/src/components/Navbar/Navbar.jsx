import React from 'react'
import { Box, Link, Button } from "@mui/material";
import { useSignedContext } from '../context/Signed';

export const Navbar = () => {
  const { isSigned } = useSignedContext();
  return (
    <Box sx={{ width: '100%', height: 80, position: 'fixed', display: !isSigned ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center', gap: 20, backgroundColor: "#60CCF7", boxShadow: '0 0 10px #000' }}>
        <Link href="/login" sx={{ fontSize: 30, textDecoration: 'none', cursor: 'pointer', color: '#fff' }}>Play</Link>
        <Button sx={{ fontSize: 25, textDecoration: 'none', cursor: 'pointer', color: '#fff' }}>Log out</Button>
    </Box>
  )
}
