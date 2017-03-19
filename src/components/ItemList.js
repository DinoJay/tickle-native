import React, { Component } from 'react';
import { View, ListView, StyleSheet, Text } from 'react-native';

import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';

const mapStateToProps = state => ({
  items: state.items,
  hasErrored: state.itemsHasErrored,
  isLoading: state.itemsIsLoading
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(itemsFetchData(url))
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  }
});

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.label !== r2.label });

class ItemList extends Component {
  constructor(props) {
    super(props);
    // this.state = { items: [], hasErrored: false, isLoading: true };
  }

  componentDidMount() {
    this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
  }

  render() {
    console.log('props.items', this.props);
    // if (this.props.hasErrored) {
    //   return <View> <Text>Sorry! There was an error loading the items</Text> </View>;
    // }
    // if (this.props.isLoading) {
    //   return <View><Text>Loading…</Text></View>;
    // }
    return (
      <ListView
        style={styles.container}
        dataSource={ds.cloneWithRows(this.props.items)}
        renderRow={data => <View><Text>{data.label}</Text></View>}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
