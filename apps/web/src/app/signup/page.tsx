import { SignupSidePanel } from "@/components/auth/SignupSidePanel"
import { SignupForm } from "@/components/auth/SignupForm"

export default function SignupPage() {
  return (
    <div className="flex min-h-screen">
      <SignupSidePanel />
      <div className="flex flex-1 items-center justify-center">
        <SignupForm />
      </div>
    </div>
  )
}
