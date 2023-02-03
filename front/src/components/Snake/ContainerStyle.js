import { Box, styled } from "@mui/material";

export const BoardSection = styled(Box)(({ theme }) => ({
    width: "500px", 
    height: "500px",
}))

export const XSection = styled(Box)(({ theme }) => ({
    width: "100%", 
    display: "flex", 
    flexWrap: "wrap", 
}))