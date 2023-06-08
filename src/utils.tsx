import axios from "axios"

const API_URL = "http://localhost:8000"

interface postPromptProps {
	prompt: string
	tone: string
	format: string
	route: string
}

//  This will make the request to the backend to get all the data
export const getAllData = async () => {
	try {
		const res = await axios.get(API_URL)
		return res.data
	} catch (err) {
		console.log(err)
	}
}

/**
 * @async
 * This will make the request to the backend to post the prompt and its parameters
 */
export const postPrompt = async ({
	prompt,
	route,
	tone,
	format
}: postPromptProps) => {
	const response = await axios.post(`${API_URL}/${route}`, {
		prompt,
		tone,
		format
	})

	// console.log(response.data)
	return response.data
}
