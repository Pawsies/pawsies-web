import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

const textStyle = {
  margin: 0,
  fontSize: '18px'
}

export default (props) => {
  return (
    <Dialog
      title={ props.title }
      actions={[
        <RaisedButton
          primary={ true }
          label={ props.buttonLabel ? props.buttonLabel : 'OK' }
          onTouchTap={ props.onDismiss }
        />
      ]}
      modal={ false }
      open={ props.show }
      onRequestClose={ props.onDismiss }
    >
      { props.text ? (
        <p style={ textStyle }>{ props.text }</p>
      ) : null }
    </Dialog>
  );
}
