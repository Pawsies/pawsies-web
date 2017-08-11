import React from 'react';;
import IconButton from 'material-ui/IconButton';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { Page, ProgressPage } from '../components';
import { colors } from '../conventions';

const styles = {
  tableHeaderRow: {
    background: colors.primary,
    border: 'none'
  },
  tableHeaderCell: {
    color: colors.primaryText,
    fontSize: '16px'
  },
  tableBodyCell: {
    fontSize: '16px'
  }
}

export default class TablePage extends React.Component {

  renderHeader () {
    let { headers, buttons } = this.props;
    return (
      <TableHeader displaySelectAll={ false } adjustForCheckbox={ false }>
        <TableRow style={ styles.tableHeaderRow }>
          { headers.map((header, index) => {
            let style = { ...styles.tableHeaderCell };
            if (header.align) {
              style.textAlign = header.align;
            }
            if (header.style) {
              style = { ...style, ...header.style };
            }
            return (
              <TableHeaderColumn style={ style } key={ index }>
                { header.title }
              </TableHeaderColumn>
            );
          }) }
          { buttons ?
            <TableHeaderColumn
              key={ headers.length }
              style={{
                ...styles.tableHeaderCell,
                width: `${ buttons.length * 48 }px`
              }}
            />
          : null}
        </TableRow>
      </TableHeader>
    );
  }

  renderBody () {
    let { items, headers, buttons } = this.props;
    return (
      <TableBody displayRowCheckbox={ false } showRowHover={ true }>
        { items.map((item, itemIndex) => (
          <TableRow key={ itemIndex }>
            { item.fields.map((field, fieldIndex) => {
              let header = headers[fieldIndex];
              let style = {};
              if (header.align) {
                style.textAlign = header.align;
              }
              if (header.style) {
                style = { ...style, ...header.style };
              }
              if (field.style) {
                style = { ...style, ...field.style };
              }
              return (
                <TableRowColumn style={ style } key={ fieldIndex }>
                  { field.value }
                </TableRowColumn>
              );
            }) }
            { buttons ?
              <TableRowColumn style={{ textAlign: 'right', width: `${ buttons.length * 48 }px` }}>
                { buttons.map((button, index) => 
                  <IconButton
                    key={ index } iconClassName="material-icons"
                    onTouchTap={ () => button.action(item.id) }
                  >{ button.icon }</IconButton>
                ) }
              </TableRowColumn>
            : null }
          </TableRow>
        )) }
      </TableBody>
    );
  }

  render () {

    let { items, noShadow } = this.props;
    
    if (!items) {
      return <ProgressPage />;
    }

    let noShadowStyle = {};
    if (noShadow) {
      noShadowStyle = {
        boxShadow: 'none',
        border: '1px solid rgba(33, 33, 33, 0.1)'
      };
    }
    
    return (
      <Page style={{ padding: 0, ...noShadowStyle }}>
        <Table selectable={ false }>
          { this.renderHeader() }
          { this.renderBody() }
        </Table>
      </Page>
    );

  }

}
