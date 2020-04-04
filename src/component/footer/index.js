import React, { Component } from 'react';
import './footer.css';
import M from 'materialize-css';

export default class Footer extends Component {

	componentDidMount(){
		this._write()
		const options = {}
	    var elems = document.querySelectorAll('.modal');
	    var instances = M.Modal.init(elems, options);
	}

	_write = () => {
		setInterval(function(){
			const element = document.querySelector('.developer');
			const textArray = element.innerHTML.split('');
			element.innerHTML = '';
		    textArray.forEach((letra, i) => {
		      setTimeout(() => element.innerHTML += letra, 75 * i);
		    });
		},5111)
	}

	render(){
		return(
			<div>
				<footer className='grey darken-4 animated fade fadeInUp delay-3s'>
					<div className='container'>
						<ul className='devby'>
							<li className='left'>
								<span className='white-text developer'>
									Desenvolvido com ❤ por Daniel Pereira
								</span>
							</li>
							<li className='right'>
								<a className='MIT modal-trigger hide-on-med-and-down' data-target="mit" href="#!">
									Licença MIT
								</a>
							</li>
						</ul>
					</div>
				</footer>

				<div id="mit" class="modal modal-fixed-footer">
			    	<div class="modal-content">
			      		<h4>Licença MIT</h4>
			      		<pa>
			      			Direitos autorais (c) 2020 <b>Daniel Pereira</b>
			      		</pa>
			      		<br/>
			      		<br/>
			      		<pa>
							É concedida permissão, gratuitamente, a qualquer pessoa que obtenha uma cópia
							deste software e arquivos de documentação associados (o "Software"), para lidar
							no Software sem restrição, incluindo, sem limitação, os direitos
							usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e / ou vender
							cópias do Software e permitir pessoas a quem o Software está
							mobilado para fazê-lo, sujeito às seguintes condições:
						</pa>
						<br/>
						<br/>
						<pa>
							O aviso de direitos autorais acima e este aviso de permissão devem ser incluídos em todos
							cópias ou partes substanciais do Software.
						</pa>
						<br/>
						<br/>
						<pa>
							O SOFTWARE É FORNECIDO "TAL COMO ESTÁ", SEM GARANTIA DE QUALQUER TIPO, EXPRESSA OU
							IMPLÍCITA, INCLUINDO MAS NÃO SE LIMITANDO A GARANTIAS DE COMERCIALIZAÇÃO,
							APTIDÃO PARA UM OBJETIVO ESPECÍFICO E NÃO INFRACÇÃO. EM NENHUM CASO A
							AUTORES OU TITULARES DE DIREITOS AUTORAIS SÃO RESPONSÁVEIS POR QUALQUER REIVINDICAÇÃO, DANOS OU OUTROS
							RESPONSABILIDADE, SEJA EM AÇÃO DE CONTRATO, TORT OU DE OUTRA FORMA, DECORRENTE DE,
							FORA OU EM CONEXÃO COM O SOFTWARE OU O USO OU OUTROS NEGÓCIOS NO
							PROGRAMAS.
			      		</pa>
			    	</div>
			    	<div class="modal-footer grey darken-4">
			      		<a href="#!" class="modal-close white-text waves-effect waves-green btn-flat">Eu aceito</a>
			    	</div>
			  	</div>

			</div>
		)
	}

}
