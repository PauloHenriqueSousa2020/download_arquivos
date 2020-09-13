# DOWNLOAD DE ARQUIVOS EM PASTA LOCAL UTILIZANDO O FILE SYSTEM
Pequeno projeto para demonstrar download de arquivos PDF em pasta local.

<h2 align="center"> Desenvolvida com as tecnologias <img src="https://github.com/PauloHenriqueSousa2020/be-the-hero/blob/master/imgs/js.png" height="18" alt="javascript"> JavaScript, 
<img src="https://github.com/PauloHenriqueSousa2020/be-the-hero/blob/master/imgs/node.png" alt="node" height="18"> Node, 
<img src="https://github.com/PauloHenriqueSousa2020/be-the-hero/blob/master/imgs/react.png" alt="react" height="18"> React.

<h3> Outras tecnologias: </h3>
<ul>
  <li> <a href="https://www.npmjs.com/package/nodemon/"> Nodemon </a> </li> 
  <li> <a href="https://expressjs.com/pt-br/"> Express </a> </li>
  <li> <a href="https://www.npmjs.com/package/axios"> Axios </a> </li>
  <li> <a href="https://www.npmjs.com/package/cors"> Cors </a> </li>
  <li> <a href="https://nodejs.org/api/fs.html"> File System </a> </li>
</ul>


<h3> Para utilizar: </h3>
<p> Faça o download do projeto no GitHub <br/>
<br/>Execute <code>npm install</code> ou <code>yarn install</code>  nas pastas <b>backend e web</b>, para instalar as dependências.<br/>
<br/>Execute <code>npm start</code> ou <code>yarn start</code> na pasta <b>back-end</b> para rodar o servidor na porta localhost:3333<br/>
<br/>Execute <code>npm start</code> ou <code>yarn start</code> na pasta <b>front-end</b> para rodar a página web na porta localhost:3000<br/>

<h3> Interface WEB: </h3>
<table>
	<tr>
		<th width="100%">
			Listagem de arquivos<br>
		</th>
	</tr>
	<tr>
		<td>
			<img src="assets/Listagem de arquivos.png" >
		</td>
	</tr>
  	<tr>
		<th width="100%">
       Downloads<br>
		</th>
	</tr>
	<tr>
		<td>
			<img src="assets/Downloads.png" >
		</td>
	</tr>
  	<tr>
		<th width="100%">
			Downloads<br>
		</th>
	</tr>
	<tr>
		<td>
			<img src="assets/Downloads(1).png" >
		</td>
	</tr>
<table>

Para utilizar basta no arquivo downloadController.js especificar a pasta onde se encontra os documentos a serem listados para download na linha 6.
