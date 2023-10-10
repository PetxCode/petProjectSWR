import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { registerStudent } from "../../api/userAPI";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const schema = yup.object({
    studentName: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    schoolName: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = handleSubmit(async (data: any) => {
    console.log("handle submit", data);
    registerStudent(data).then(() => {
      navigate("/sign-in");
    });
  });

  return (
    <div className="flex justify-center items-center h-[100vh] ">
      <center className="">
        <form className="w-[300px] border py-8 " onSubmit={onHandleSubmit}>
          <div className="uppercase font-bold ">Register</div>
          <br />
          <hr />
          <br />
          <div>
            <input
              className="border h-10 rounded outline-none pl-2 w-[90%] my-2 "
              placeholder="Enter your school Name"
              {...register("schoolName")}
            />
            <input
              className="border h-10 rounded outline-none pl-2 w-[90%] my-2 "
              placeholder="Enter your name"
              {...register("studentName")}
            />
            <input
              className="border h-10 rounded outline-none pl-2 w-[90%] my-2 "
              placeholder="Enter your email"
              {...register("email")}
            />
            <input
              className="border h-10 rounded outline-none pl-2 w-[90%] my-2 "
              placeholder="Enter your password"
              {...register("password")}
            />

            <button
              type="submit"
              className="bg-orange-600 text-white rounded w-[90%] h-[40px] mt-8  "
            >
              Register
            </button>

            <br />
            <br />
            <hr />
            <br />

            <div className="text-[12px]">
              <div>Already have an Account</div>
              <Link to="/sign-in">
                <div>sign in here</div>
              </Link>
            </div>
          </div>
        </form>
      </center>
    </div>
  );
};

export default Register;
