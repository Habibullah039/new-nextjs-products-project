"use client";

import { FormRegister } from "@/types";
import { registerUser } from "@/utils/actions/registerUser";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";




const RegisterPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormRegister>();

    const router = useRouter();


    const onSubmit = async (data: FormRegister) => {

        try {

            const res = await registerUser(data);
            // console.log(res);

            if (res.success) {
                alert(res.message);
                router.push("/login");
            }

        } catch (err: any) {
            console.error(err.message);
            throw new Error(err.message);
        }
    }
    return (
        <div className="block mx-auto md:w-2/5  sm:w-96 my-[30px] p-10 rounded-lg shadow-xl bg-gray-200">
            <h1 className="text-center text-4xl mb-2">
                Register <span className="text-accent">Now</span>
            </h1>


            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body py-3">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input
                            type="text"
                            {...register("username")}
                            placeholder="User Name"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
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
                            <span className="label-text">Number</span>
                        </label>
                        <input
                            type="number"
                            {...register("number")}
                            placeholder="Number"
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
                            placeholder="Password"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-accent btn-outline">
                            Register
                        </button>
                    </div>
                    <p className="text-center">
                        Already have an account?{" "}
                        <Link className="text-accent" href="/login">
                            Login
                        </Link>
                    </p>
                </form>
            </div>

        </div>
    );
};

export default RegisterPage;


