"use client";

import { FormLogin } from "@/types";
import { loginUser } from "@/utils/actions/loginUser";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";




const LoginPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormLogin>();

    const router = useRouter();

    const onSubmit = async (data: FormLogin) => {

        // console.log(data);

        try {

            const res = await loginUser(data);

            signIn('credentials', {
                email: data.email,
                password: data.password,
                redirect: false
            });

            if (res.accessToken) {
                alert(res.message);
                localStorage.setItem('accessToken', res.accessToken);
                router.push("/");
            }

        } catch (err: any) {
            console.error(err.message);
            throw new Error(err.message);
        }
    }
    return (
        <div className="block mx-auto md:w-2/5  sm:w-96 my-[30px] p-10 rounded-lg shadow-xl bg-gray-200">
            <h1 className="text-center text-4xl mb-5">
                Login <span className="text-accent">Here</span>
            </h1>



            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control mt-5">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            {...register("email")}
                            placeholder="Email"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            {...register("password")}
                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control mt-6">
                        <button
                            type="submit"
                            className="btn btn-accent btn-outline"


                        >
                            Login
                        </button>
                    </div>
                    <p className="text-center">
                        Don&apos;t have an account?{" "}
                        <Link className="text-accent" href="/register">
                            Create an account
                        </Link>
                    </p>
                </form>
                <p className="text-center">Or Sign Up Using</p>
                <div className="flex justify-center mb-10 mt-2">
                    <button
                        className="btn btn-circle"
                        onClick={() =>
                            signIn("google", {
                                callbackUrl: "https://multi-products-project.vercel.app/dashboard",

                            })}
                    >
                        <Image
                            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                            width={50}
                            height={50}
                            alt="google logo"
                        />
                    </button>
                    <button
                        className="btn btn-circle"
                        onClick={() =>
                            signIn("github", {
                                callbackUrl: "https://multi-products-project.vercel.app/dashboard",

                            })}>
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                            width={35}
                            height={35}
                            alt="github logo"
                        />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default LoginPage;