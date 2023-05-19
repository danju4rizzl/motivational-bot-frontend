import { useState, useEffect } from "react"

import { Flex, Text, Box, Card, CardBody, Skeleton } from "@chakra-ui/react"

import { useQuery } from "@tanstack/react-query"
import { getAllData } from "./utils"
import PromptForm from "./components/PromptForm"

function App() {
	// this is the data from the server
	const [serverDataState, setServerDataState] = useState(null)

	const { data, isLoading, isError } = useQuery({
		queryKey: ["deejay-data"],
		queryFn: getAllData
	})

	const getAiData = (data) => {
		console.log("😀", data)
		setServerDataState(data)
	}

	return (
		<Flex w="100%" p={["32", "14"]} direction={{ base: "column", md: "row" }}>
			<Box w={["80%", "50%"]} p={"20"}>
				<PromptForm onServerData={getAiData} />
			</Box>
			<Box w={["80%", "50%"]} p={"20"}>
				{serverDataState && (
					<Card>
						<CardBody>
							<Skeleton isLoaded={serverDataState} h={6}>
								<Text>
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
