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

  const handleSelectTab = (event, value) => {
    const findSelectedTab = tabsItems.findIndex((item) => item.value === value);
    if (findSelectedTab === -1) setSelectedTab(tabsItems[0].value);
    setSelectedTab(tabsItems[findSelectedTab].value);
  };

  return (
    <>
      <StyledTabs
        variant="scrollable"
        scrollButtons="auto"
        colormode={colorMode}
        value={selectedTab}
        onChange={handleSelectTab}
      >
        {tabsItems.map((item) => {
          return (
            <ResponsiveTab
              key={item.value}
              label={item.label}
              value={item.value}
            />
          );
        })}
      </StyledTabs>
      <List>
        {navItems.map(
          (item) =>
            item.tabOwner.includes(selectedTab) && (
              <ListItem key={item.id}>
                <ListItemText
                  primary={
                    <StyledLink colormode={colorMode} href={item.slug}>
                      {item.title}
                    </StyledLink>
                  }
                  secondary={
                    <StyledSubText colormode={colorMode}>
                      <span>Enabled by default?</span>
                      <StyledSpan colormode={colorMode}>
                        {item.isEnabledByDefault ? "True" : "False"}
                      </StyledSpan>
                    </StyledSubText>
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

const StyledSubText = styled.span`
  color: ${(props) => (props.colormode === "dark" ? "#fff" : "#000")};
`;

const StyledLink = styled(Link)`
  color: ${(props) =>
    props.colormode === "dark" ? "var(--ifm-menu-color-active)" : "#000"};
  .MuiTab-wrapper {
    color: ${(props) =>
      props.colormode === "dark" ? "var(--ifm-menu-color-active)" : "#000"};
  }
  .MuiTab-wrapper:hover {
    color: ${(props) =>
      props.colormode === "dark" ? "var(--ifm-menu-color-active)" : "#000"};
  }
  .MuiTab-textColorPrimary {
    color: ${(props) =>
      props.colormode === "dark" ? "var(--ifm-menu-color-active)" : "#000"};
  }
`;

export default BrowserCustomTabs;
