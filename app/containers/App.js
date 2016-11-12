// @flow
import React, { Component, PropTypes } from 'react';
import {loadState} from '../actions/actions_index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AppBar} from 'material-ui';
import Dashboard from '../components/Dashboard';
import DeckList from '../components/DeckList';
import Drawer from 'material-ui/Drawer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {drawerOpen: false};
  }

  static propTypes = {
    children: PropTypes.element.isRequired
  };

  onDrawerToggle() {
    this.setState({drawerOpen: !this.state.drawerOpen});
  }

  onDeckSelect(deck) {
    console.log(deck);
  }

//Add state to props passed to children of App
  renderChildren(props) {
    return React.Children.map( this.props.children, (child) => {
      if (child.type === Dashboard) {
        return React.cloneElement(child, {
          dashboard: props.dashboard,
          onDrawerToggle: this.onDrawerToggle.bind(this)
        });
      } else {
        return child;
      }
    })
  }

  render() {
    return (
      <div>
        <AppBar title="NameFace" />
        {this.renderChildren(this.props)}
        <Drawer open={this.state.drawerOpen}>
          <DeckList decks={this.props.dashboard.decks} onDeckSelect={this.onDeckSelect} />
        </Drawer>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({loadState}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
