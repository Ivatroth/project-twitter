import { AuthButtonServer } from "../components/auth-button-server";

export default function Login () {
    return (
        <section className="grid place-content-center min-h-screen">
            <h1 className="text-xl fond-bold mb-4">Inicia sesión en Zwitter</h1>
            <AuthButtonServer/>
        </section>
    )
}