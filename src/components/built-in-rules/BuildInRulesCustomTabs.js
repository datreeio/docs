import React, { useState } from "react";
import styled from "styled-components";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import { navItems } from "../../../static/builtInRulesNavbarItems";
import { useHistory } from "@docusaurus/router";
import { useColorMode } from "@docusaurus/theme-common";

const handleTabChange = () => {
  const prefixPath = "/built-in-rules/";
  const path = location.pathname.replace(prefixPath, "");
  const selectedTab = navItems.findIndex((item) => item.href === path);
  if (selectedTab === -1) return 0;
  return selectedTab;
};

const BuildInRulesCustomTabs = () => {
  const { colorMode, setColorMode } = useColorMode();
  const history = useHistory();
  const [selectedTab, setSelectedTab] = useState(() => handleTabChange());

  const handleSelectTab = (event, value) => {
    const selectedTab = navItems[value];
    history.push(selectedTab.href);
  };

  return (
    <>
      <StyledTabs
        colorMode={colorMode}
        value={selectedTab}
        onChange={handleSelectTab}
      >
        {navItems.map((item, index) => {
          return <Tab key={index} label={item.label} value={index} />;
        })}
      </StyledTabs>
      <List>
        {navItems[selectedTab].pages.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={
                <StyledLink colorMode={colorMode} href={item.slug}>
                  {item.title}
                </StyledLink>
              }
              secondary={
                <StyledSubText colorMode={colorMode}>
                  Enabled by default?{" "}
                  {item.isEnabledByDefault ? "True" : "False"}
                </StyledSubText>
              }
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

const StyledTabs = styled(Tabs)`
  .MuiTabs-indicator {
    background-color: ${(props) =>
      props.colorMode === "dark" ? "var(--ifm-menu-color-active)" : "#000"};
  }
  .MuiTab-textColorPrimary.Mui-selected {
    color: ${(props) =>
      props.colorMode === "dark" ? "var(--ifm-menu-color-active)" : "#000"};
  }
  .MuiTab-wrapper {
    color: ${(props) =>
      props.colorMode === "dark" ? "var(--ifm-menu-color-active)" : "#000"};
  }
  .MuiTab-wrapper:hover {
    color: ${(props) =>
      props.colorMode === "dark" ? "var(--ifm-menu-color-active)" : "#000"};
  }
  .MuiTab-textColorPrimary {
    color: ${(props) =>
      props.colorMode === "dark" ? "var(--ifm-menu-color-active)" : "#000"};
  }
`;

const StyledSubText = styled.span`
  color: ${(props) => (props.colorMode === "dark" ? "#fff" : "#000")};
`;

const StyledLink = styled(Link)`
  color: ${(props) =>
    props.colorMode === "dark" ? "var(--ifm-menu-color-active)" : "#000"};
  .MuiTab-wrapper {
    color: ${(props) =>
      props.colorMode === "dark" ? "var(--ifm-menu-color-active)" : "#000"};
  }
  .MuiTab-wrapper:hover {
    color: ${(props) =>
      props.colorMode === "dark" ? "var(--ifm-menu-color-active)" : "#000"};
  }
  .MuiTab-textColorPrimary {
    color: ${(props) =>
      props.colorMode === "dark" ? "var(--ifm-menu-color-active)" : "#000"};
  }
`;
export default BuildInRulesCustomTabs;
