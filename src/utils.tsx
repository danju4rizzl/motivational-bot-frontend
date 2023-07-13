import axios from "axios"
import appConfig from "./config/appConfig"
import { PostPromptProps } from "./config/types"

// This is the url of the backend globally available
const API_URL = appConfig.localServerUrl

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
	assistant,
	tone,
	format
}: PostPromptProps) => {
	const response = await axios.post(`${API_URL}/${assistant}`, {
		prompt,
		tone,
		format
	})

	// console.log(response.data)
	return response.data
}
