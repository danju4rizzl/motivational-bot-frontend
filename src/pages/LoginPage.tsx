import {
	Text,
	FormControl,
	Input,
	Button,
	Container,
	Grid,
	Heading
} from "@chakra-ui/react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from "react"

import supabase from "../config/supabaseClient"
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"

const LoginPage = () => {
	return (
		<Container>
			<Grid>
				<Heading fontSize={26}>Login Page</Heading>
				<Auth
					supabaseClient={supabase}
					appearance={{ theme: ThemeSupa }}
					providers={["google", "facebook", "twitter"]}
				/>
			</Grid>
		</Container>
	)
}

export default LoginPage
