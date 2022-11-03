import React, { useEffect, useState } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import styled from "styled-components";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import { navItems, tabsItems } from "../../../static/builtInRulesNavbarItems";
import { useHistory } from "@docusaurus/router";
import { useColorMode } from "@docusaurus/theme-common";
import { Typography } from "@mui/material";

const handleTabChange = () => {
  const path = location.hash.split("#")[1];
  const findSelectedTab = tabsItems.findIndex((item) => item.value === path);
  if (findSelectedTab === -1) return tabsItems[0].value;
  return tabsItems[findSelectedTab].value;
};

const CustomTabs = () => {
  const { colorMode, setColorMode } = useColorMode();
  const history = useHistory();
  const [selectedTab, setSelectedTab] = useState(() => handleTabChange());

  useEffect(() => {
    if (!selectedTab) return;
    history.push(`#${selectedTab}`);
  }, [selectedTab]);

  return (
    <>
      <Typography align="left" fontSize="h5.fontSize" fontWeight="medium">
        The following rules are enabled in policy <b>{location.hash.split("#")[1]}</b>:
      </Typography>
      <List>
        {navItems.map(
          (item) =>
            item.tabOwner.includes(selectedTab) && (
              <ListItem key={item.id}>
                <ListItemText
                  primary={
                    <Link colormode={colorMode} href={item.slug}>
                      {item.title}
                    </Link>
                  }
                  secondary={
                    <Typography colormode={colorMode}>
                      <span>Policy-as-code identifier: </span>
                      <StyledSpan colormode={colorMode}>
                        {item.pacIdentifier}
                      </StyledSpan>
                    </Typography>
                  }
                />
              </ListItem>
            )
        )}
      </List>
    </>
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

const StyledSpan = styled.span`
  margin: 2px;
  color: ${(props) =>
    props.colormode === "dark" ? "var(--ifm-menu-color-active)" : "#002d49"};
`;

const ResponsiveTab = styled(Tab)`
  && {
    text-transform: none;
    min-width: 0;
    padding:0 10px;
    margin: 0;
    min-height: unset;
    height: unset;
`;

const StyledTabs = styled(Tabs)`
  .MuiTab-root {
    font-weight: bold;
    text-transform: none;
    font-size: 16px;
  }

  .MuiTabs-indicator {
    background-color: ${(props) =>
      props.colormode === "dark" ? "var(--ifm-menu-color-active)" : "#525860"};
  }
  .MuiTab-textColorPrimary.Mui-selected {
    color: ${(props) =>
      props.colormode === "dark" ? "var(--ifm-menu-color-active)" : "#002d49"};
  }
  .MuiTab-wrapper {
    color: ${(props) =>
      props.colormode === "dark" ? "var(--ifm-menu-color-active)" : "#525860"};
  }
  .MuiTab-wrapper:hover {
    color: ${(props) =>
      props.colormode === "dark" ? "var(--ifm-menu-color-active)" : "#525860"};
  }
  .MuiTab-textColorPrimary {
    color: ${(props) =>
      props.colormode === "dark" ? "var(--ifm-menu-color-active)" : "#525860"};
  }
`;

export default BrowserCustomTabs;
