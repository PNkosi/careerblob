import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    return (
        <div className="container flex items-center justify-center">
            <SignIn />
        </div>
    )
}