import { LoginForm } from "@/features/auth/components/login-form";
import { requireUnauth } from "@/lib/auth-utils";

const Page = async () =>{
    await requireUnauth(); // if logged in it will redirect to the protected server component

    return (
            <LoginForm/>
    )
};

export default Page;