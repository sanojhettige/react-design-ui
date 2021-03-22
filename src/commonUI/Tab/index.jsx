import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { TabContainer, TabButtonsContainer } from './styles';

function Tab({ tabButtons, tabPages, selectedTabIndex, progressedTabs, onChange }) {
  const [selectedTab, setSelectedTab] = useState(selectedTabIndex);

  const handleOnTabClick = tabIndex => () => {
    setSelectedTab(tabIndex);
    onChange(tabIndex);
  };

  const isTabSelected = (index, selected) => {
    if (progressedTabs.length) {
      return progressedTabs.includes(index);
    } else {
      return index === selected;
    }
  };

  const isTabClickable = index => (progressedTabs.length ? progressedTabs.includes(index) : true);

  return (
    <TabContainer>
      <TabButtonsContainer>
        {tabButtons.map((button, index) =>
          React.cloneElement(button, {
            ...(isTabClickable(index) && { onClick: handleOnTabClick(index) }),
            isSelected: isTabSelected(index, selectedTab),
          })
        )}
      </TabButtonsContainer>
      {tabPages[selectedTab]}
    </TabContainer>
  );
}

Tab.propTypes = {
  tabButtons: PropTypes.array.isRequired,
  tabPages: PropTypes.array.isRequired,
  selectedTabIndex: PropTypes.number,
  progressedTabs: PropTypes.arrayOf(PropTypes.number),
  onChange: PropTypes.func,
};

Tab.defaultProps = {
  selectedTabIndex: 0,
  progressedTabs: [],
  onChange: () => {},
};

export default Tab;
