import { useRouteError } from "react-router-dom"
import LinkButton from "../components/UI/LinkButton"
import { Heading, Text, Box, Grid } from "@chakra-ui/react"

interface RouteError {
	statusText: string
	// Add other properties if applicable
}

export default function ErrorPage() {
	const error = useRouteError() as RouteError
	console.error(error)

	return (
		<Box>
			<Grid placeContent={"center"} h={"100vh"}>
				<Heading>Oops!</Heading>
				<Text>Sorry, an unexpected error has occurred.</Text>
				<Text>{error.statusText}</Text>
				<LinkButton linkTo="/" btnText="Go to HomePage" />
			</Grid>
		</Box>
	)
}
