import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import { app } from "../firebase";

const IntroHeader = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);

  const onSubmit = async (data, event) => {
    event.preventDefault();
    const action = event.nativeEvent.submitter.value;
    try {
      if (action === "회원가입") {
        if (data.password.length < 6) {
          alert("PW는 6글자 이상이어야 합니다.");
          return;
        }
        const createdUser = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        console.log("회원가입 정보", createdUser);
        alert("회원가입 완료.");
      } else if (action === "로그인") {
        const loggedInUser = await signInWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        console.log("User logged in:", loggedInUser);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("잘못된 계정 정보입니다.");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <HeaderContainer>
      <IntroHeaderLayout>
        <HeaderLeft>
          <IconWrapper>
            <IconImg src="../../refri_favicon.jpg" al="이미지 깨짐" />
          </IconWrapper>
          <HeaderLogoBox>냉장고를 부탁해! </HeaderLogoBox>
        </HeaderLeft>
        <HeaderRight onSubmit={handleSubmit(onSubmit)}>
          <InputBox
            {...register("email")}
            type="email"
            id="email"
            placeholder="Email"
          />
          <InputBox
            {...register("password")}
            type="password"
            id="password"
            placeholder="PW"
          />
          <ButtonBox type="submit" value="로그인" />
          <ButtonBox type="submit" value="회원가입" />
        </HeaderRight>
      </IntroHeaderLayout>
    </HeaderContainer>
  );
};

const InputBox = styled.input`
  width: 180px;
  height: 15px;
  padding: 10px 20px;
  margin: 0 10px 0 0;
  border: 1px solid green;
  border-radius: 15px;
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
`;

const ButtonBox = styled.input`
  width: 70px;
  height: 35px;
  margin: 0 5px 0 0;
  border: none;
  border-radius: 10px;
  background-color: #ffd900e6;
  cursor: pointer;
`;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  background-color: white;
`;

const IntroHeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 20px 20px 10px;
  text-align: center;
`;

const HeaderLeft = styled.div`
  display: flex;
  min-width: 230px;
  padding: 10px 0 10px 20px;
`;

const HeaderRight = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  padding-top: 5px;
`;

const IconImg = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 10px 0 0;
`;

const HeaderLogoBox = styled.span`
  padding: 4px 10px 0px 5px;
  color: rgb(64, 122, 87);
  font-size: 22px;
  font-weight: 600;
`;

export default IntroHeader;
