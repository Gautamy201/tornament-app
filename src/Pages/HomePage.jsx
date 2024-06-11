import { useNavigate } from "react-router-dom";
import ComanComponent from "../Components/ComanComponent";

const HomePage = () => {
  const navigate = useNavigate();
  const heading = "An Ultimate eSports Patform";
  const info = `
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolore placeat quisquam molestiae ipsam maxime minima dolorem, deserunt fuga sint iure pariatur ut reiciendis possimus illo dolor rem? Quisquam, atque.
    Assumenda, recusandae minima quod nesciunt earum aspernatur aut odio magni qui! Ipsam beatae voluptates iusto natus! Aut distinctio illo cum praesentium, itaque, magni rem, enim in ex mollitia asperiores voluptatibus?`;
  return (
    <>
      <ComanComponent
        heading={heading}
        info={info}
        btnText1={"Create New Account"}
        btnText2={"Login"}
        btnFun1={() => navigate("/loginSignup")}
        btnFun2={() => navigate("/loginSignup")}
      />
    </>
  );
};

export default HomePage;
