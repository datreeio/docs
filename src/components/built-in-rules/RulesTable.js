import React, { useEffect, useState } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import {
  navItems,
  tabsItems,
  ruleCategories,
} from "../../../static/builtInRulesNavbarItems";
import { Button, Divider, Typography } from "@mui/material";
import Category from "./Category";
import Grid from "@mui/material/Grid";

const CustomTabs = () => {
  const [selectedTab, setSelectedTab] = useState(null);
  const clearFilters = () => {
    setSelectedTab(null);
  };

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
                      handleOnClick={() => setSelectedTab(ruleCategory.title)}
                      isSelected={ruleCategory.title === selectedTab}
                    />
                  </Grid>
                );
              })}
            </Grid>
            <br />
            <Typography align="left" fontSize="h5.fontSize" fontWeight="medium">
              The following rules are enabled in policy <b>{selectedTab}</b>:
            </Typography>
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
          <Typography>
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
