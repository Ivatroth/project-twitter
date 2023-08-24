import { AuthButtonServer } from "@/app/components/auth-button-server"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { PostList } from "./components/post-list"

export default async function Home() {
  const supabase = createServerComponentClient({cookies})
  const { data: {session}} = await supabase.auth.getSession();

  if(session === null) redirect('/login')

  const { data: posts } = await supabase
    .from('post')
    .select('*, users(name, avatar_url, user_name)')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <section className="max-w-[800px] mx-auto border-l border-r border-white/20 min-h-screen">
        <AuthButtonServer/>
        <PostList posts={posts}/>
      </section>
    </main>
  )
  
}
