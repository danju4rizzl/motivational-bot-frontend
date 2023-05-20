import { useState, useEffect } from "react"

import {
	Flex,
	Text,
	Box,
	Card,
	CardBody,
	Skeleton,
	Editable,
	EditablePreview,
	EditableTextarea
} from "@chakra-ui/react"

import { useQuery } from "@tanstack/react-query"
import { getAllData } from "./utils"
import PromptForm from "./components/PromptForm"

function App() {
	// this is the data from the server
	const [serverDataState, setServerDataState] = useState(null)
	const responsivePadding = { base: "1.2rem", md: "1.6rem", lg: "2rem" }

	const { isError } = useQuery({
		queryKey: ["deejay-data"],
		queryFn: getAllData
	})

	const getAiData = (data) => {
		console.log("😀", data)
		setServerDataState(data)
	}

	return (
		<Flex
			w="100%"
			h="100vh"
			p={responsivePadding}
			direction={{ base: "column", md: "row" }}
			bg={"gray.100"}
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
					<Card>
						<CardBody>
							<Skeleton isLoaded={serverDataState} minH={6}>
								<Text fontSize="2xl">
									{isError
										? "Something went wrong, check the server 🔴"
										: serverDataState.aiData}
								</Text>
							</Skeleton>
						</CardBody>
					</Card>
				)}
			</Box>
		</Flex>
	)
}

export default App
