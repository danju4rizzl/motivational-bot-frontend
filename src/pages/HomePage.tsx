import {
	Box,
	Grid,
	Heading,
	Text,
	Link,
	ButtonGroup,
	Button
} from "@chakra-ui/react"

const HomePage = () => {
	return (
		<Box my={14}>
			<Grid textAlign={"center"} placeItems={"center"} gap={3}>
				<Heading as="h1" size={["lg", "2xl"]} maxW={"2xl"}>
					Hire your own Virtual Assistant <small>🤖</small> instantly
				</Heading>
				<Text maxW={"md"} fontWeight={"medium"}>
					With our visual assistants, you can finally focus on the things that
					matter most. Start working 10x more productive today!
				</Text>

				<ButtonGroup spacing={5} my={2}>
					<Link
						as={Button}
						bg="teal.600"
						href="#"
						color={"white"}
						_hover={{ bg: "teal.400" }}
					>
						Login
					</Link>
					<Link
						as={Button}
						bg="pink.600"
						href="#"
						color={"white"}
						_hover={{ bg: "pink.400" }}
					>
						Register
					</Link>
				</ButtonGroup>
			</Grid>
		</Box>
	)
}

export default HomePage
