'use client'
import { ComsosePostButton } from "./compose-text-button";
import { addPost } from "./actions/add-post-action";
import { useRef } from "react";

export function ComposePost ({userAvatarUrl}: {userAvatarUrl: string}){

  const formRef = useRef<HTMLFormElement>(null)

  return (
    <form ref={formRef}
        action={async (formData) => {
          await addPost(formData)
          formRef.current?.reset()
        }}
        className="flex flex-row p-3 border-b border-white/20">
      <img className="rounded-full w-10 h-10 object-contain mr-4" src={userAvatarUrl} />
      <div className="flex flex-1 flex-col gap-y-4">
        <textarea 
              name='post' 
              rows={4} 
              className="w-full text-2x1 bg-black text-white placeholder-gray-500 px-2 py-1" 
              placeholder="¡¿Que esta pasando?!">
        </textarea>
        <ComsosePostButton/>
      </div>
    </form>
  )
}