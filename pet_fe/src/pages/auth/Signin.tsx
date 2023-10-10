import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { singinStudent } from "../../api/userAPI";
import { useNavigate } from "react-router-dom";
import useUser from "../../global/jotai";

const SignIn = () => {
  const [state, setState] = useUser();
  const navigate = useNavigate();
  const schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = handleSubmit(async (data: any) => {
    console.log("handle submit", data);
    singinStudent(data).then((res) => {
      setState(res);

      navigate("/");
    });
  });

  return (
    <div className="flex justify-center items-center h-[100vh] ">
      <center>
        <form className="w-[300px] border py-8 " onSubmit={onHandleSubmit}>
          <div className="uppercase font-bold ">Sign in</div>
          <br />
          <hr />
          <br />
          <div>
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
              className="bg-orange-600 text-white rounded w-[90%] h-[40px] mt-8  "
              type="submit"
            >
              Sign in
            </button>

            <br />
            <br />
            <hr />
            <br />

            <div className="text-[12px]">
              <div>Don't have an Account</div>
              <Link to="/register">
                <div>Register here</div>
              </Link>
            </div>
          </div>
        </form>
      </center>
    </div>
  );
};

export default SignIn;
