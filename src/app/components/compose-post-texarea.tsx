'use client'
import { useEffect, useRef } from "react"
import { experimental_useFormStatus as useFormStatus } from "react-dom"

export function ComposePostTextArea () {
    const {pending} = useFormStatus()
    const alreadySent = useRef(false)
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    console.log({pending});
    console.log(textAreaRef.current);
    
    
    useEffect(()=>{
        console.log({alreadySent});
        console.log(textAreaRef.current);
        if(textAreaRef.current === null) return;
        
        if(!pending && alreadySent.current){
            alreadySent.current = false
            textAreaRef.current.value = ''
            return
        }

        alreadySent.current = pending

    },[pending])

    return(
        <textarea 
            ref={textAreaRef}
            name='post' 
            rows={4} 
            className="w-full text-2x1 bg-black text-white placeholder-gray-500 px-2 py-1" 
            placeholder="¡¿Que esta pasando?!">
        </textarea>
    )
}