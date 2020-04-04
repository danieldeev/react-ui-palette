import React, { Component } from 'react';

import Loading from '../../component/loading';
import Palette from '../../component/palette';

export default class App extends Component{

	constructor(props){
		super(props);
		this.state = {
      loading: true
		}
	} 

	async componentDidMount(){
		this.setState({ loading: false })
	}

	render(){

    if(this.state.loading == true ){
      return(
        <Loading />
      )
    }else{
      return(
        <Palette />
      )
    }

	}

}