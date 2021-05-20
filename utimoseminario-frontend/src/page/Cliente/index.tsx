import Footer from "components/Footer";
import NavBar from "components/NavBar";


function Cliente(){
    return (
        <>
        <NavBar/>

        <div  className="container">
	  <h1 className="text-primary">Listando Cliente</h1>
	    <h2 className="text-primary">Nenhum cliente cadastrado ainda !</h2>
	        <div  className="table-responsive">
	            <h2 className="text-primary">Clientes</h2>
	            <table className="table">
	                <thead>
	                    <tr>
	                    	<th scope="col">Id</th>
	                        <th scope="col">Nome</th>
	                        <th scope="col">CPF</th>
	                        <th scope="col">RG</th>
	                        <th scope="col">Rua</th>
	                        <th scope="col">Bairro</th>
	                        <th scope="col">CEP</th>
	                        <th scope="col">Editar</th>
	                        <th scope="col">Deletar</th>
	                    </tr>
	                </thead>
	                <tbody>
	                <tr >
	                	<td ></td>
	                	<td ></td>
	                    <td ></td>
	                    <td ></td>
	                    <td ></td>
	                    <td ></td>
	                    <td ></td>
	                    <td><button type="submit" className="btn btn-primary"><a>Editar</a></button></td>
	                    <td><button type="submit" className="btn btn-danger"><a>Deletar</a></button></td>
	                    
	                </tr>
	            </tbody>
	        </table>
	    </div>  
        </div>   
        <div  className="d-grid gap-2 col-6 mx-auto">
	    <p   className="text-primary"><button type="button" className="btn btn-primary " ><a>Adicionar novo cliente</a></button></p>
		</div> 

        <Footer />
        </>
    );
}

export default Cliente;