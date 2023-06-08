import { useState, useEffect } from "react"
import supabase from "../config/supabaseClient"
import { User } from "@supabase/supabase-js"

/**
Interface for UserMetadata. This describes the data for a user when they are logged in. 
*/
interface UserMetadata {
	avatar_url?: string
	email?: string
	email_verified?: boolean
	full_name?: string
	user_name?: string
}

/**
* 🟢 This hook will return the logged-in user's metadata from Supabase by @real_deejay_dev
* @example const user = useUserData();
					user ? 'Has Data' : 'No Data
*/
const useUserData = () => {
	const [userData, setUserData] = useState<UserMetadata | null>(null)

	useEffect(() => {
		async function getUserMetaData() {
			const { data } = await supabase.auth.getUser()
			data.user && setUserData(data.user.user_metadata)
		}
		getUserMetaData()
	}, [])

	return userData
}

export default useUserData
