import axios from "axios";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { type } from "os";
import { useEffect } from "react";
import { useState } from "react";
import { Carro } from "types/carro";
import { BASE_URL } from "utils/requests";

type Props = {
	carro: Carro
}

function Home()  {

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

	/* useEffect(() => {
		axios.get(`http://localhost:8080/signup`)
		.then(response => {
			//const data = response.data

			setListaCarro(response.data)
			
			console.log(response);
			
		}).catch((err) => {
			console.log("ocorreu erro" +err);
			
		})
	}, [ listaCarro]); */
	
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
	                        <th >Edit</th>
	                        <th >Delete</th>
	                    </tr>
						
	                </thead>
	                {/* <tbody>
						{ listaCarro.map(item => ( 
	                <tr key={item.id}>
	                	<td >{item.id}</td>
	                	<td >{item.modelo}</td>
	                    <td >{item.marca}</td>
	                    <td >{item.valor}</td>
	                    <td><a >Edit</a></td>
	                    <td><a >Delete</a></td>
	                </tr>
					))}
	            </tbody> */}
	        </table>
		</div>
	    <p><a >Add a new carro</a></p>
	</div>
        <Footer />
    </>
    );
}

export default Home;