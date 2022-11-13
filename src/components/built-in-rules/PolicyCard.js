import React, { Component } from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";

const PolicyCard = ({ title, subtitle, link, image, }) => {
 
return (
      <Link href={link} style={{ textDecoration: 'none' }} >
        <StyledCard sx={{ maxWidth: 370, border: 0.5 , borderStyle: 2, boxShadow: 5, borderRadius: 4, borderColor: "gray.500" }} >
          <Box sx={{ my: 1 }}>
            <CardMedia component="img" image={image} height="80" sx={{ objectFit: "contain" }} style={{ margin: "1rem 0" }} className="not-zoomable" />
          </Box>
          <Divider variant="middle" light />  
          <CardHeader style={{ margin: "1rem", padding: 0 }} title={title} align="center" subheader={subtitle} titleTypographyProps={{ fontWeight: "medium" }} />   
        </StyledCard>
      </Link>
    );
};

const StyledCard = styled(Card)`
  &:hover {
    border-color: cornflowerblue;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`
export default PolicyCard;