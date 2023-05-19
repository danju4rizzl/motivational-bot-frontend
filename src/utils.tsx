import axios from "axios"

const API_URL = "http://localhost:8000"

interface postPromptProps {
	prompt: string
	route:
		| "seo"
		| "accountant"
		| "realtor"
		| "business"
		| "legal"
		| "sales"
		| "medical"
		| "diy"
		| "private"
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

//  This will make the request to the backend to post the prompt
export const postPrompt = async ({ prompt, route }: postPromptProps) => {
	const response = await axios.post(`${API_URL}/${route}`, {
		question: prompt
	})

	// console.log(response.data)
	return response.data
}
