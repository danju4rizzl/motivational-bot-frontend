import React from "react"
import ReactDOM from "react-dom/client"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import LoginPage from "./pages/LoginPage.tsx"
import Root from "./routes/Root.tsx"
import ErrorPage from "./pages/ErrorPage.tsx"
import HomePage from "./pages/HomePage.tsx"
import appConfig from "./config/appConfig.ts"

// This is to extend chakraUI's color styles
// This defines the colors object, which contains the brand color palette
const colors = appConfig.allColors

// This creates a new custom theme by extending the Chakra UI theme with the colors object
const customTheme = extendTheme({ colors })

//This creates a new QueryClient instance from react-query

const queryClient = new QueryClient()

/**
 ** This creates a new BrowserRouter component and passes it the routes defined in the createRoutesFromElements function
 */
const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <HomePage /> // This will show the home page whenever the user is on the home route
			},
			{
				path: "/login",
				element: <LoginPage />
			}
		]
	}
])

// This renders the App component in the root element
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={customTheme}>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</ChakraProvider>
	</React.StrictMode>
)
