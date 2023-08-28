import { AuthButtonServer } from "@/app/components/auth-button-server"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { PostList } from "./components/post-list"
import { type Database } from "./types/database"
import { ComposePost } from "./components/compose-post"

export default async function Home() {
  const supabase = createServerComponentClient<Database>({cookies})
  const { data: {session}} = await supabase.auth.getSession();

  if(session === null) redirect('/login')

  const { data: posts } = await supabase
    .from('posts')
    .select('*, users(name, avatar_url, user_name)')
    .order('created_at', {ascending: false})

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <section className="max-w-[600px] w-full mx-auto border-l border-r border-white/20 min-h-screen">
        <ComposePost userAvatarUrl={session.user?.user_metadata?.avatar_url} />
        <PostList posts={posts}/>
      </section>
        <AuthButtonServer/>
    </main>
  )
  
}
