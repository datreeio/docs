import React, { useState } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import { navItems, tabsItems } from "../../../static/builtInRulesNavbarItems";
import { Typography } from "@mui/material";

const handleTabChange = () => {
  const path = location.hash.split("#")[1];
  const findSelectedTab = tabsItems.findIndex((item) => item.value === path);
  if (findSelectedTab === -1) return tabsItems[0].value;
  return tabsItems[findSelectedTab].value;
};

const CustomTabs = () => {
  const [selectedTab, setSelectedTab] = useState(() => handleTabChange());

  return (<BrowserOnly fallback={<div>Loading...</div>}>
    {() => {
      return (
        <>
          <img display="block" margin="auto" width="90rem" src={`/img/built-in-rules/${selectedTab}.png`} />
          <Typography align="left" fontSize="h5.fontSize" fontWeight="medium">
            The following rules are enabled in policy <b>{selectedTab}</b>:
          </Typography>
          <List>
            {navItems.map(
              (item) =>
                item.tabOwner.includes(selectedTab) && (
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
                )
            )}
          </List>
        </>
      );
    }}
  </BrowserOnly>
  );
};

const BrowserCustomTabs = () => {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        return <CustomTabs />;
      }}
    </BrowserOnly>
  );
};


export default BrowserCustomTabs;
