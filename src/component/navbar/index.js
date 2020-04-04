import React, { Component } from 'react';
import './navbar.css';
import M from 'materialize-css';

export default class Navbar extends Component{

	componentDidMount(){
		const options = {};

		var tootip = document.querySelectorAll('.tooltipped');
		var sidenav = document.querySelectorAll('.sidenav');
    	
    	var tootipInstance = M.Tooltip.init(tootip, options);
    	var sidenavInstance = M.Sidenav.init(sidenav, options);
	}

	render() {
		return (
			<div>
				<nav className='navbar-fixed white animated fade fadeInDown delay-2s'>
					<div className='container'>
						<div className='nav-wrapper row'>
							<a href='/' className='brand-logo brand left'>
								<span className='back'>UX</span> 
								 Palette
							</a>
							<ul className='right animated fade fadeInRight delay-3s right'>
								<li className='right hide-on-med-and-down' >
									<a href='mailto:danielpereirasuporte@gmail.com' data-position="right" data-tooltip="Contato" className='nav-item tooltipped'>
										<i className="material-icons" >email</i>
								 	</a>
								</li>
								<li className='right hide-on-med-and-down' >
									<a href='https://github.com/behindthecodes/react-ux-palette' data-position="bottom" data-tooltip="Projeto" className='nav-item tooltipped'>
										<i className="material-icons">code</i>
								 	</a>
								</li>
								<li className='right hide-on-med-and-down' >
									<a href='https://medium.com/@behindthecodes' data-position="bottom" data-tooltip="Blog" className='nav-item tooltipped'>
										<i className="material-icons">create</i>
								 	</a>
								</li>
								<li className='right hide-on-med-and-down' >
									<a href='https://behindthecodes.github.io/' data-position="left" data-tooltip="Autor" className='nav-item tooltipped'>
										<i className="material-icons" >free_breakfast</i>
								 	</a>
								</li>
								<li className='right hide-on-large-only' >
									<a href='#!' className="left nav-item sidenav-trigger" data-target="menu">
										<i className="material-icons" >menu</i>
								 	</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>


			  <ul id="menu" className="sidenav">
			    <li>
			    	<div className="user-view">
			      		<div className="background sidenav-background"></div>
			      		<a href="#!">
			      			<img className="circle" src="https://avatars2.githubusercontent.com/u/61810952?s=460&u=5b29baf5a0d22d27cda7acc119d7c4824914c482&v=4"/>
			      		</a>
			      		<a href="#!">
			      			<span className="white-text name">
			      				Daniel Pereira
			      			</span>
			      		</a>
			      		<a href="#!">
			      			<span className="white-text email">
			      				danielpereirasuporte@gmail.com
			      			</span>
			      		</a>
			    	</div>
			    </li>
			    <li>
			    	<a href="https://behindthecodes.github.io">
			    		<i className="material-icons">free_breakfast</i>
			    		Autor
			    	</a>
			    	<a href="https://github.com/behindthecodes/react-ux-palette">
			    		<i className="material-icons">code</i>
			    		Projeto
			    	</a>
			    	<a href="https://medium.com/@behindthecodes">
			    		<i className="material-icons">create</i>
			    		Blog
			    	</a>
			    	<a href="mailto:danielpereirasuporte@gmail.com">
			    		<i className="material-icons">email</i>
			    		Contato
			    	</a>
			    </li>
			    <li>
			    	<div className="divider"></div>
			    </li>
			    <li>
			    	<center>
			    		<span>Licença MIT</span>
			    	</center>
			    </li>
			  </ul>

			</div>
		);
	}

}