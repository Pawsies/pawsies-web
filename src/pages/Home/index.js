import React from 'react';
import { connect } from 'react-redux';
import { Page } from '../../components';
//import styles from './styles';

import { setPageTitle } from '../../actions/navigation';

class Home extends React.Component {

  componentDidMount () {
    this.props.dispatch(setPageTitle('Dashboard'));
  }

  render () {
    return (
      <Page>
        
      </Page>
    );
  }

}

export default connect()(Home);
