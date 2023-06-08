import { Box, Grid, Heading, Text, ButtonGroup } from "@chakra-ui/react"
import LinkButton from "../components/UI/LinkButton"

const HomePage = () => {
	return (
		<Box py={125} px={10} h={"100vh"}>
			<Grid textAlign={"center"} gap={3} placeItems={"center"}>
				<Heading as="h1" size={["lg", "2xl", "3xl"]} maxW={"2xl"}>
					Hire your own Virtual Assistant <small>🤖</small> instantly
				</Heading>
				<Text maxW={"md"} fontWeight={"medium"}>
					with <strong>Luma</strong>, you can finally Become
					<strong> 10x</strong> productive 🦾 and focus on the things that
					matter most!
				</Text>

				<ButtonGroup spacing={5} my={2}>
					<LinkButton
						btnText="Try out Luma for Free "
						linkTo="/login"
						isOutline
						textColor="brand.300"
					/>
				</ButtonGroup>
			</Grid>
		</Box>
	)
}

export default HomePage
