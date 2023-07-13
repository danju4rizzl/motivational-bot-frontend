import { useForm, FormProvider } from "react-hook-form"
import {
	FormControl,
	FormLabel,
	Textarea,
	Select,
	Grid,
	useToast,
	Icon
} from "@chakra-ui/react"

import { useMutation } from "@tanstack/react-query"
import { postPrompt } from "../../utils"
import appConfig from "../../config/appConfig"
import CustomButton from "../UI/CustomButton"

import { Md123 } from "react-icons/md"
import { PostPromptProps, PromptFormProps } from "../../config/types"

// Define the PromptForm component
const PromptForm: React.FC<PromptFormProps> = ({ serverData }) => {
	// Initialize the useForm hook
	const { register, handleSubmit, watch, reset } = useForm()
	const methods = useForm()
	const toast = useToast()
	const watchForm = watch()

	// Configure the postPromptMutation using react-query
	const postPromptMutation = useMutation(postPrompt, {
		onSuccess: (data) => {
			// console.log(" data from server:", data)
			serverData(data)
			reset({
				prompt: ""
			})
		},
		onError: (error) => {
			console.log(error)
			toast({
				title: "Something went wrong",
				description: "Oops there's an issue on  the server",
				status: "error",
				isClosable: true,
				position: "bottom"
			})
		}
	})

	// Define the handleSubmitForm function to handle form submission
	function handleSubmitForm(data: PostPromptProps) {
		console.log("data", data)

		// Call the postPromptMutation with the form data
		postPromptMutation.mutate({ ...data })
	}

	function handleChange(e: any) {
		console.log(e)
		console.log(watchForm)
	}

	// Render the form with the necessary form elements
	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(handleSubmitForm)}>
				<FormControl>
					<FormLabel htmlFor="promptInput">Write your prompt</FormLabel>
					{/* <Icon as={Md123} /> */}
					<Textarea
						id="promptInput"
						height={{ base: 50, md: 210 }}
						fontSize={18}
						color={"blackAlpha.800"}
						_focus={{
							border: "none",
							fontSize: 19
						}}
						transition="font 0.2s ease"
						placeholder="Write a blog post about Business Intelligence."
						{...register("prompt", { required: true, maxLength: 2501 })}
						onChange={handleChange}
					/>
				</FormControl>

				<FormControl my={5}>
					<FormLabel htmlFor="assistant">
						Which assistant would you like to use
					</FormLabel>
					<Select
						id="assistant"
						placeholder="Select option"
						{...register("assistant")}
					>
						{appConfig.promptConfig.assistantOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</Select>
				</FormControl>

				<FormControl my={5}>
					<FormLabel htmlFor="tone">
						What type of tone would you like to use (optional)
					</FormLabel>
					<Select id="tone" placeholder="Select option" {...register("tone")}>
						{appConfig.promptConfig.toneOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</Select>
				</FormControl>

				<FormControl my={5}>
					<FormLabel htmlFor="format">
						How do you want to view your responses (optional)
					</FormLabel>
					<Select
						id="format"
						placeholder="Select option"
						{...register("format")}
					>
						{appConfig.promptConfig.formatOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</Select>
				</FormControl>

				<Grid>
					<CustomButton type="submit">Generate AI Answer 🤖</CustomButton>
				</Grid>
			</form>
		</FormProvider>
	)
}

// Export the PromptForm component
export default PromptForm
