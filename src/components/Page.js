import React from 'react';
import { colors } from '../conventions';

const styles = {
  page: {
    background: colors.layout,
    color: colors.primaryText,
    margin: '24px 0',
    padding: '24px',
    boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px'
  }
}

export default ({ children, style }) => {
  return (
    <div style={{ ...styles.page, ...style }}>
      { children }
    </div>
  );
}