import { useState } from "react"

import { Flex, Text, Box, Card, CardBody } from "@chakra-ui/react"

import PromptForm from "./components/PromptForm"

interface ServerDataObject {
	aiData: string
}

function App() {
	const responsivePadding = { base: "1.2rem", md: "1.6rem", lg: "2rem" }

	// this is the data from the server
	const [serverDataState, setServerDataState] =
		useState<ServerDataObject | null>(null)

	const getAiData = (data: ServerDataObject) => {
		setServerDataState(data)
		console.log(data)
	}

	return (
		<Box bg={"gray.100"}>
			<Flex
				w="100%"
				p={responsivePadding}
				direction={{ base: "column", md: "row" }}
			>
				<Box
					w={["100%", null, "50%"]}
					p={responsivePadding}
					bg={"whiteAlpha.600"}
					rounded={"3xl"}
				>
					<PromptForm onServerData={getAiData} />
				</Box>
				<Box w={["100%", null, "50%"]} p={responsivePadding}>
					{serverDataState && (
						<Card rounded={"3xl"} bg={"whiteAlpha.600"} shadow="2xl">
							<CardBody p={{ base: "10", md: "14", lg: "20" }}>
								<Text fontSize="2xl">{serverDataState.aiData}</Text>
							</CardBody>
						</Card>
					)}
				</Box>
			</Flex>
		</Box>
	)
}

export default App
