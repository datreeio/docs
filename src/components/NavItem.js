import React from 'react';

const NavItem = ({ slug, title, isEnabledByDefault, styles }) => {
  return (
    <li>
      <a className={styles} href={slug}>
        {title}
        <span>Enabled by default? {isEnabledByDefault ? 'True' : 'False'}</span>
      </a>
    </li>
  );
};

export default NavItem;
