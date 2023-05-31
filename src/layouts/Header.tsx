import { Flex, Stack, Image, Avatar } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import logo from "../assets/ai-ssistant-logo-alt.svg"
import LinkButton from "../components/Buttons/LinkButton"

const Header = () => {
	return (
		<header>
			<Flex justifyContent="space-between" alignContent="center" py={5} px={28}>
				<Link to="/">
					<Image src={logo} alt="Logo of AI-Assistant" maxW={44} />
				</Link>
				<Stack direction={"row"} spacing={5}>
					<LinkButton text="login" linkTo="/login" isOutline textColor="teal" />
					<LinkButton text="Get started for Free" linkTo="/signup" />
					<Avatar
						name="Deejay Dev"
						src="https://avatars.githubusercontent.com/u/25222958?v=4"
						border={"2px"}
					/>
				</Stack>
			</Flex>
		</header>
	)
}

export default Header
