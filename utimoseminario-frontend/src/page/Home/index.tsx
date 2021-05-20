import Footer from "components/Footer";
import NavBar from "components/NavBar";
const imgCliente = "https://user-images.githubusercontent.com/42070237/119032096-cc9db100-b979-11eb-9ca9-c671e99466ce.jpg"

function Home()  {
	return(
		<>
		<NavBar />

		<img src={imgCliente} alt="cliente" />

		<Footer />
		</>
	);
}

export default Home;