import React, { Component } from 'react';
import './palette.css';

import Navbar from '../navbar';
import Footer from '../footer';

export default class Palette extends Component{

	constructor(props){
		super(props);
		this.state = {
			palette: []
		}
	}

	_getPalette = async () => {
  		let oCode = "#";
  		let tCode = "#";
  		let trCode = "#";
  		let frCode = "#";
  		let fvCode = "#";
  		let sxCode = "#";
		while( oCode.length < 7 ){
		  oCode += (Math.round(Math.random() * 15)).toString(16)
		}
		while( tCode.length < 7 ){
		  tCode += (Math.round(Math.random() * 15)).toString(16)
		}
		while( trCode.length < 7 ){
		  trCode += (Math.round(Math.random() * 15)).toString(16)
		}
		while( frCode.length < 7 ){
		  frCode += (Math.round(Math.random() * 15)).toString(16)
		}
		while( fvCode.length < 7 ){
		  fvCode += (Math.round(Math.random() * 15)).toString(16)
		}
		while( sxCode.length < 7 ){
		  sxCode += (Math.round(Math.random() * 15)).toString(16)
		}
		let color = [oCode,tCode,trCode,frCode,fvCode,sxCode];
  		this.setState({palette: color});
	}

	async componentDidMount(){
		await this._getPalette();
	}

	render(){

		return(
			<div>
				<Navbar />
				<br />
				<div className="container">

          <div className="app-header animated fade fadeIn delay-3s">
            <center>
              <h1 className="app-headline animated bounce delay-5s">
                Escolha cores de forma inteligente
              </h1 >
              <h4 className="grey-text">
                Pode até parecer simples, mas é o passo mais importante no processo de design 
              </h4>
            </center>
          </div>

					<div className="row" >
    					<div className="col s12 m6 l4">
      						<div className="card animated fade fadeInLeft delay-2s ">
        						<div className="card-image">
          							<img style={{
          								backgroundColor: this.state.palette[0],
          								padding: 98
          							}} />
          							<a onClick={async () => {
          								const t = this.state.palette[1];
          								const tr = this.state.palette[2];
          								const fr = this.state.palette[3];
          								const fv = this.state.palette[4];
          								const sx = this.state.palette[5];
          								let o = "#";
										while( o.length < 7 ){
		  									o += (Math.round(Math.random() * 15)).toString(16)
										}
										const buffer = await [o,t,tr,fr,fv,sx]
										this.setState({palette: buffer})
          							}} class="btn-floating pulse halfway-fab waves-effect waves-light red"><i className="material-icons">palette</i></a>
        						</div>
        						<div className="card-content">
          							<p className="color">
          								{this.state.palette[0]}
          							</p>
        						</div>
      						</div>
  						</div>

    					<div className="col s12 m6 l4">
      						<div className="card animated fade fadeInDown delay-2s">
        						<div className="card-image">
          							<img style={{
          								backgroundColor: this.state.palette[1],
          								padding: 98
          							}} />
          							<a onClick={async () => {
          								const o = this.state.palette[0];
          								const tr = this.state.palette[2];
          								const fr = this.state.palette[3];
          								const fv = this.state.palette[4];
          								const sx = this.state.palette[5];
          								let t = "#";
										while( t.length < 7 ){
		  									t += (Math.round(Math.random() * 15)).toString(16)
										}
										const buffer = await [o,t,tr,fr,fv,sx]
										this.setState({palette: buffer})
          							}} className="btn-floating pulse halfway-fab waves-effect waves-light red"><i className="material-icons">palette</i></a>
        						</div>
        						<div className="card-content">
          							<p className="color">
          								{this.state.palette[1]}
          							</p>
        						</div>
      						</div>
  						</div>	


    					<div className="col s12 m6 l4">
      						<div className="card animated fade fadeInRight delay-2s">
        						<div className="card-image">
          							<img style={{
          								backgroundColor: this.state.palette[2],
          								padding: 98
          							}} />
          							<a onClick={async () => {
          								const o = this.state.palette[0];
          								const t = this.state.palette[1];
          								const fr = this.state.palette[3];
          								const fv = this.state.palette[4];
          								const sx = this.state.palette[5];
          								let tr = "#";
										while( tr.length < 7 ){
		  									tr += (Math.round(Math.random() * 15)).toString(16)
										}
										const buffer = await [o,t,tr,fr,fv,sx]
										this.setState({palette: buffer})
          							}} className="btn-floating pulse halfway-fab waves-effect waves-light red"><i className="material-icons">palette</i></a>
        						</div>
        						<div className="card-content">
          							<p className="color">
          								{this.state.palette[2]}
          							</p>
        						</div>
      						</div>
  						</div>


    					<div className="col s12 m6 l4">
      						<div className="card animated fade fadeInLeft delay-2s">
        						<div className="card-image">
          							<img style={{
          								backgroundColor: this.state.palette[3],
          								padding: 98
          							}} />
          							<a onClick={async () => {
          								const o = this.state.palette[0];
          								const t = this.state.palette[1];
          								const tr = this.state.palette[2];
          								const fv = this.state.palette[4];
          								const sx = this.state.palette[5];
          								let fr = "#";
										while( fr.length < 7 ){
		  									fr += (Math.round(Math.random() * 15)).toString(16)
										}
										const buffer = await [o,t,tr,fr,fv,sx]
										this.setState({palette: buffer})
          							}} className="btn-floating pulse red halfway-fab waves-effect waves-light"><i className="material-icons">palette</i></a>
        						</div>
        						<div className="card-content">
          							<p className="color">
          								{this.state.palette[3]}
          							</p>
        						</div>
      						</div>
  						</div>

    					<div className="col s12 m6 l4">
      						<div className="card animated fade fadeInUp delay-2s">
        						<div className="card-image">
          							<img style={{
          								backgroundColor: this.state.palette[4],
          								padding: 98
          							}} />
          							<a onClick={async () => {
          								const o = this.state.palette[0];
          								const t = this.state.palette[1];
          								const tr = this.state.palette[2];
          								const fr = this.state.palette[3];
          								const sx = this.state.palette[5];
          								let fv = "#";
										while( fv.length < 7 ){
		  									fv += (Math.round(Math.random() * 15)).toString(16)
										}
										const buffer = await [o,t,tr,fr,fv,sx]
										this.setState({palette: buffer})
          							}} className="btn-floating pulse halfway-fab waves-effect waves-light red"><i className="material-icons">palette</i></a>
        						</div>
        						<div className="card-content">
          							<p className="color">
          								{this.state.palette[4]}
          							</p>
        						</div>
      						</div>
  						</div>

     					<div className="col s12 m6 l4">
      						<div className="card animated fade fadeInRight delay-2s">
        						<div className="card-image">
          							<img style={{
          								backgroundColor: this.state.palette[5],
          								padding: 98
          							}} />
          							<a onClick={async () => {
          								const o = this.state.palette[0];
          								const t = this.state.palette[1];
          								const tr = this.state.palette[2];
          								const fr = this.state.palette[3];
          								const fv = this.state.palette[4];
          								let sx = "#";
										while( sx.length < 7 ){
		  									sx += (Math.round(Math.random() * 15)).toString(16)
										}
										const buffer = await [o,t,tr,fr,fv,sx]
										this.setState({palette: buffer})
          							}} className="btn-floating pulse halfway-fab waves-effect waves-light red"><i className="material-icons">palette</i></a>
        						</div>
        						<div className="card-content">
          							<p className="color">
          								{this.state.palette[5]}
          							</p>
        						</div>
      						</div>
  						</div>

					</div>
				</div>

				<Footer />
		</div>
		)
	}

}