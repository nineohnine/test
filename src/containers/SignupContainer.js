import { connect } from 'react-redux';
import { push, pop } from '../actions/NavigationActions';
import { bootApp } from '../actions';
import { Container, Content, Form, Item, Input, Label } from 'native-base';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class Signup extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Email</Label>
              <Input  keyboardType = 'email-address' />
            </Item>
            <Item floatingLabel last>
              <Label>Phone</Label>
              <Input keyboardType = 'phone-pad' />
            </Item>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry = 'true' />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    bootApp: () => dispatch(bootApp())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);
