import NavBar from "components/NavBar";
import Footer from "components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";



function Carro(){
   
	const [ listaCarro, setListaCarro] = useState([
		{ id: 1, modelo: "Siena", marca: "Fiat", valor: 39000}
	])


	async function getContent() {
		try {
			const response = await fetch('http://localhost:8080/')
			const data = await response.json()

			console.log(data);
			
		} catch (error) {
			console.log(error);
			
		}
	}

	getContent()

	useEffect(() => {
		axios.get(`http://localhost:8080/signup`)
		.then(response => {
			//const data = response.data

			setListaCarro(response.data)
			
			console.log(response);
			
		}).catch((err) => {
			console.log("ocorreu erro" +err);
			
		})
	}, [ listaCarro]);
	
    return(
        <>
        <NavBar/>
        <div className="container">
        <h1 className="text-primary">Listando Carro</h1>
	
	    <h2 className="text-primary">Nenhum carro cadastrado ainda !</h2>
	       <div className="table-responsive" >
	            <h2 className="text-primary">Carros</h2>
	            <table className="table table-striped table-sm">
	                <thead>
						
	                    <tr>
	                    	<th >Id</th>
	                        <th >Modelo</th>
	                        <th >Marca</th>
	                        <th >Valor</th>
	                        <th >Editar</th>
	                        <th >Deletar</th>
	                    </tr>
						
	                </thead>
	                <tbody>
						
	                <tr >
	                	<td >{}</td>
	                	<td >{}</td>
	                    <td >{}</td>
	                    <td >{}</td>
						<td><button type="submit" className="btn btn-primary"><a>Editar</a></button></td>
	                    <td><button type="submit" className="btn btn-danger"><a>Deletar</a></button></td>
	                </tr>
				
	            </tbody>
	        </table>
		</div>
        <div  className="d-grid gap-2 col-6 mx-auto">
	    <p   className="text-primary"><button type="button" className="btn btn-primary" ><a >Adicionar novo carro</a></button></p>
		</div>
	</div>
        <Footer />
    </>
    );
}

export default Carro;