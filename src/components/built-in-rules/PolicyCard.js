import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";

class PolicyCard extends Component {
  state= {
    border: 0
  }

  onMouseOver = () => this.setState({ border: 1 });

  onMouseOut = () => this.setState({ border: 0 });

render(props) {
  return (
    <Link href={this.props.link} style={{ textDecoration: 'none' }} >
      <Card sx={{ maxWidth: 360, maxHeight: 210, border: this.state.border, boxShadow: 10, borderColor: "gray" }} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} >
        <Box sx={{ my: 1 }}>
          <CardMedia component="img" image={this.props.image} height="80" sx={{ objectFit: "contain" }} style={{ marginTop: "0.3rem" }} />
        </Box>
        <Divider variant="middle" light />  
        <CardHeader title={this.props.title} align="center" subheader={this.props.subtitle} titleTypographyProps={{ fontWeight: "medium" }} />
          
      </Card>
    </Link>
  );
};
};
export default PolicyCard;
