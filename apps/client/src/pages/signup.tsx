import { Signup } from "@repo/ui/Signup";

export default function SignupPage() {
  return (
    <div>
      <Signup
        onClick={async (username, password) => {
          // const res = await axios.post("admin.kirat.com/signup", {
          //   username,
          //   password,
          // });
        }}
      ></Signup>
    </div>
  );
}
