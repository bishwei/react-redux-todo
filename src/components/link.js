import React, { PropTypes } from 'react';

const onLinkClick = (onClick) => (event) => {
  event.preventDefault();
  onClick();
};

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <button onClick={onLinkClick(onClick)}>
      {children}
    </button>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
