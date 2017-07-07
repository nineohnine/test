import React, { Component } from 'react';
import { NavigationService } from '../services';

export default class Screen extends Component {
  constructor(props){
    NavigationService.getInstance().setNavigator(props.navigator);
    super(props);
  }
}
