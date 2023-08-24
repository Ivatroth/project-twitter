import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { AuthButton } from "@/app/components/auth-button-client"

export async function AuthButtonServer () {
    const supabase = createServerComponentClient({cookies});
    // recuperamos la session
    const { data: {session}} = await supabase.auth.getSession();
    
    return <AuthButton session = {session}/>
}