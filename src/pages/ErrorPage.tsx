import { useRouteError, Link } from "react-router-dom"
import LinkButton from "../components/Buttons/LinkButton"
import {
	Heading,
	Text,
	Flex,
	Container,
	Center,
	Box,
	Grid
} from "@chakra-ui/react"

interface RouteError {
	statusText: string
	// Add other properties if applicable
}

export default function ErrorPage() {
	const error: RouteError = useRouteError()
	console.error(error)

	return (
		<Box>
			<Grid placeContent={"center"} h={"100vh"}>
				<Heading>Oops!</Heading>
				<Text>Sorry, an unexpected error has occurred.</Text>
				<Text>{error.statusText}</Text>
				<LinkButton linkTo="/" text="Go to HomePage" />
			</Grid>
		</Box>
	)
}
