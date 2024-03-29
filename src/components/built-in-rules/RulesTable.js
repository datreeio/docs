import React, { useState } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import {
  navItems,
  ruleCategories,
} from "../../../static/builtInRulesNavbarItems";
import { Button, Divider, Typography } from "@mui/material";
import Category from "./Category";
import Grid from "@mui/material/Grid";
import {useLocation} from '@docusaurus/router';


const handleURL = () => {
  const tab = location.hash.split("#")[1];

  if (ruleCategories.some((category) => category.title === tab)) {
    return tab;
  } else return null;
};

const CustomTabs = () => {
  const [selectedTab, setSelectedTab] = useState(() => handleURL());
  const location = useLocation();

  const clearFilters = () => {
    setSelectedTab(null);
  };

  const handleSelectedTab = (ruleCategory) => {
    setSelectedTab(ruleCategory.title);
    window.location = location.pathname + "#" + ruleCategory.title
  }

  let filteredNavItems = [];
  if (selectedTab === null) {
    filteredNavItems = navItems;
  } else {
    filteredNavItems = navItems.filter((category) =>
      category.tabOwner.includes(selectedTab)
    );
  }
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        return (
          <>
            <div>
              <b style={{ fontSize: 20 }}>Filters:</b> (
              {filteredNavItems.length} rules) &nbsp;
              <Button
                sx={{ textTransform: "none" }}
                size="small"
                variant="outlined"
                onClick={() => clearFilters()}
              >
                Clear Filters
              </Button>
            </div>
            <br />
            <Grid
              container
              spacing={1}
              rowSpacing={1.5}
              columnSpacing={0.5}
              justifyContent="center"
            >
              {ruleCategories.map((ruleCategory) => {
                return (
                  <Grid item xs={2} key={ruleCategory.title}>
                    <Category
                      title={ruleCategory.title}
                      image={ruleCategory.image}
                      handleOnClick={ () => handleSelectedTab(ruleCategory) }
                      isSelected={ruleCategory.title === selectedTab}
                    />
                  </Grid>
                );
              })}
            </Grid>
            <br />
            <b style={{ fontSize: 20 }}>Rules:</b>
            <List>
              {filteredNavItems.map((item, index) => (
                <div key={index}>
                  <RuleItem item={item} />
                  <Divider variant="middle" light />
                </div>
              ))}
            </List>
          </>
        );
      }}
    </BrowserOnly>
  );
};

const RuleItem = ({ item }) => {
  return (
    <ListItem key={item.id}>
      <ListItemText
        primary={<Link href={item.slug}>{item.title}</Link>}
        secondary={
          <Typography fontSize={"0.85rem"} color="gray">
            <span>
              <b>Policy-as-code identifier: </b>
            </span>
            <span>{item.pacIdentifier}</span>
          </Typography>
        }
      />
    </ListItem>
  );
};

const RulesTable = () => {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        return <CustomTabs />;
      }}
    </BrowserOnly>
  );
};

export default RulesTable;
