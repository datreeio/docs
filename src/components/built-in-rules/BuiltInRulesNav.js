import React from 'react';
import NavItem from '../NavItem';
import styles from './styles.module.scss';
import { navItems } from '../../../static/builtInRulesNavbarItems';

export const BuiltInRulesContainer = () => {
  return (
    <ul className={styles.list}>
      {navItems
        .filter((item) => item.isContainer)
        .map((item) => (
          <NavItem
            key={item.id}
            slug={item.slug}
            title={item.title}
            isEnabledByDefault={item.isEnabledByDefault}
            styles={styles.link}
          />
        ))}
    </ul>
  );
};

export const BuiltInRulesWorkload = () => {
  return (
    <ul className={styles.list}>
      {navItems
        .filter((item) => item.isWorkload)
        .map((item) => (
          <NavItem
            key={item.id}
            slug={item.slug}
            title={item.title}
            isEnabledByDefault={item.isEnabledByDefault}
            styles={styles.link}
          />
        ))}
    </ul>
  );
};

export const BuiltInRulesCronjob = () => {
  return (
    <ul className={styles.list}>
      {navItems
        .filter((item) => item.isCronJob)
        .map((item) => (
          <NavItem
            key={item.id}
            slug={item.slug}
            title={item.title}
            isEnabledByDefault={item.isEnabledByDefault}
            styles={styles.link}
          />
        ))}
    </ul>
  );
};

export const BuiltInRulesNetworking = () => {
  return (
    <ul className={styles.list}>
      {navItems
        .filter((item) => item.isNetworking)
        .map((item) => (
          <NavItem
            key={item.id}
            slug={item.slug}
            title={item.title}
            isEnabledByDefault={item.isEnabledByDefault}
            styles={styles.link}
          />
        ))}
    </ul>
  );
};

export const BuiltInRulesSecurity = () => {
  return (
    <ul className={styles.list}>
      {navItems
        .filter((item) => item.isSecurity)
        .map((item) => (
          <NavItem
            key={item.id}
            slug={item.slug}
            title={item.title}
            isEnabledByDefault={item.isEnabledByDefault}
            styles={styles.link}
          />
        ))}
    </ul>
  );
};

export const BuiltInRulesDeprecation = () => {
  return (
    <ul className={styles.list}>
      {navItems
        .filter((item) => item.isDeprecation)
        .map((item) => (
          <NavItem
            key={item.id}
            slug={item.slug}
            title={item.title}
            isEnabledByDefault={item.isEnabledByDefault}
            styles={styles.link}
          />
        ))}
    </ul>
  );
};

export const BuiltInRulesArgo = () => {
  return (
    <ul className={styles.list}>
      {navItems
        .filter((item) => item.isArgo)
        .map((item) => (
          <NavItem
            key={item.id}
            slug={item.slug}
            title={item.title}
            isEnabledByDefault={item.isEnabledByDefault}
            styles={styles.link}
          />
        ))}
    </ul>
  );
};

export const BuiltInRulesOther = () => {
  return (
    <ul className={styles.list}>
      {navItems
        .filter((item) => item.isOther)
        .map((item) => (
          <NavItem
            key={item.id}
            slug={item.slug}
            title={item.title}
            isEnabledByDefault={item.isEnabledByDefault}
            styles={styles.link}
          />
        ))}
    </ul>
  );
};
