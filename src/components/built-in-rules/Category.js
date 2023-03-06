import React, { Component } from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import { Checkbox } from "@mui/material";

const Category = ({ title, image, handleOnClick, isSelected }) => {
  return (
    <StyledCard
      sx={{
        maxWidth: 120,
        border: 0.5,
        boxShadow: 5,
        borderRadius: 6,
        borderColor: isSelected ? "cornflowerblue" : "gray.500",
        boxShadow: isSelected ? "0 0 0 0.2rem rgba(0, 123, 255, 0.25)" : "0",
      }}
      onClick={handleOnClick}
      style={{ backgroundColor: isSelected ? "rgba(77,176,212,0.15)" : "" }}
    >
      <Box sx={{ my: 1, mx: 1 }}>
        <CardMedia
          component="img"
          image={image}
          height="40"
          sx={{ objectFit: "contain" }}
          align="center"
          style={{ margin: "0.5rem 0" }}
          className="not-zoomable"
        />
      </Box>
      {/* <Divider variant="middle" light /> */}
      <StyledCardHeader
        style={{ margin: "0.5rem", padding: 0 }}
        title={title}
        align="center"
        titleTypographyProps={{
          fontWeight: "light",
          fontSize: 16,
          noWrap: true,
        }}
      />
    </StyledCard>
    // </Link>
  );
};

const StyledCard = styled(Card)`
  &:hover {
    border-color: cornflowerblue;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    cursor: pointer;
  }
  [data-theme="dark"] & {
    background-color: #1e1e1e;
    color: #ffffff;
  }
`;

const StyledCardHeader = styled(CardHeader)`
  [data-theme="dark"] & .MuiCardHeader-subheader {
    background-color: #1e1e1e;
    color: #ffffff;
  }
`;

export default Category;
