import React, { useState } from "react";
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
  const selectedTab = tabsItems.findIndex((item) => item.value === path);
  if (selectedTab === -1) return tabsItems[0].value;
  return tabsItems[selectedTab].value;
};

const CustomTabs = () => {
  const { colorMode, setColorMode } = useColorMode();
  const history = useHistory();
  const [selectedTab, setSelectedTab] = useState(() => handleTabChange());

  const handleSelectTab = (event, value) => {
    setSelectedTab(value);
    history.push(`#${selectedTab}`);
  };

  return (
    <>
      <StyledTabs
        colorMode={colorMode}
        value={selectedTab}
        onChange={handleSelectTab}
      >
        {tabsItems.map((item) => {
          return <Tab key={item.value} label={item.label} value={item.value} />;
        })}
      </StyledTabs>
      <List>
        {navItems.map(
          (item) =>
            item.tabOwner.includes(selectedTab) && (
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
            )
        )}
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

export default CustomTabs;
