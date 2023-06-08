import { Container, Grid, Heading } from "@chakra-ui/react"
import supabase from "../config/supabaseClient"
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import appConfig from "../config/appConfig"

const customTheme = {
	default: {
		colors: {
			brand: appConfig.allColors.brand[200]
		}
	}
}

const LoginPage = () => {
	return (
		<Container py={[45, 15]}>
			<Grid>
				<Heading
					fontSize={[50, 70]}
					my={2}
					fontWeight={"hairline"}
					textAlign={"center"}
				>
					Login/Signup
				</Heading>
				<Auth
					supabaseClient={supabase}
					providers={["google", "github"]}
					appearance={{ theme: customTheme }}
				/>
			</Grid>
		</Container>
	)
}

export default LoginPage
