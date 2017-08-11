import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import { Page } from '../components';

export default (props) => {
  return (
    <Page style={{ textAlign: 'center', padding: '48px' }}>
      <CircularProgress size={ 100 } thickness={ 8 } />
    </Page>
  );
}