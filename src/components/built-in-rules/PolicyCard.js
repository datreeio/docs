import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import { borderColor } from "@mui/system";

class PolicyCard extends Component {
  state= {
    border: 0,
  }

  onMouseOver = () => this.setState({ border: 1 });

  onMouseOut = () => this.setState({ border: 0 });

render(props) {
  return (
    <Link href={this.props.link} style={{ textDecoration: 'none' }} >
      <Card sx={{ maxWidth: 360, border: this.state.border, boxShadow: 5, borderBox: 8, borderColor: "cornflowerblue" }} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} >
        <Box sx={{ my: 1 }}>
          <CardMedia component="img" image={this.props.image} height="80" sx={{ objectFit: "contain" }} style={{ margin: "1rem 0" }} />
        </Box>
        <Divider variant="middle" light />  
        <CardHeader style={{ margin: "1rem", padding: 0 }} title={this.props.title} align="center" subheader={this.props.subtitle} titleTypographyProps={{ fontWeight: "medium" }} />
          
      </Card>
    </Link>
  );
};
};
export default PolicyCard;
