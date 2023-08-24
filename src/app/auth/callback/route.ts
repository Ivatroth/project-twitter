//! esta ruta es para iniciar sesion

import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { type NextRequest, NextResponse } from 'next/server'

// esto es una opción de Next.js, para evitar que cachee de forma
// estática la ruta, y que siempre se ejecute en el servidor
export const dynamic = 'force-dynamic'

export async function GET (request: NextRequest) {
  const requestUrl = new URL(request.url)
  // accedemos a los parametros querys
  const code = requestUrl.searchParams.get('code')

  if (code !== null) {
    // si tenemos codigo entonces creamos el cliente de supabase
    const supabase = createRouteHandlerClient({ cookies })
    // usando el codigo que le hemos pasado por URL
    // nos devuelve la secion del usuario
    await supabase.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(requestUrl.origin)
}