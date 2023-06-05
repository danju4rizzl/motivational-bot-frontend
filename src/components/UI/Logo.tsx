import { Link } from "react-router-dom"
import { Image } from "@chakra-ui/react"
import logo from "../../assets/logo.svg"

const Logo = () => {
	return (
		<Link to="/">
			<Image
				src={logo}
				alt="Logo of AI-Assistant"
				p={{ base: 5, md: 2 }}
				w={"3xs"}
			/>
		</Link>
	)
}

export default Logo
