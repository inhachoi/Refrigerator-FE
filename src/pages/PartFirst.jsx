import styled, { keyframes } from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

function PartFirst() {
  return (
    <PartLayout>
      <MainComment>나만의</MainComment>
      <SubComment>친환경 스마트 냉장고</SubComment>
      <ImgsPart>
        <AnimatedImgFirst
          src="../../food1.jpeg"
          alt="사진1"
        />
        <AnimatedImgSecond
          src="../../food2.jpg"
          alt="사진2"
        />
        <AnimatedImgThird
          src="../../food3.jpg"
          alt="사진3"
        />
        <AnimatedImgFourth
          src="../../food4.avif"
          alt="사진4"
        />
        <AnimatedImgFifth
          src="../../food5.jpg"
          alt="사진5"
        />
      </ImgsPart>
      <BounceArrow>
        <IoIosArrowDown />
      </BounceArrow>
    </PartLayout>
  );
}

const PartLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 100vh;
  font-size: 50px;
  font-weight: bold;
`;

const MainComment = styled.div`
  margin: 20px;

  @media (max-width: 900px) {
    font-size: 30px;
  }
`;

const SubComment = styled.div`
  padding-top: 0px;
  color: rgb(64, 122, 87);

  @media (max-width: 900px) {
    font-size: 30px;
  }
`;

const ImgsPart = styled.div`
  margin: 60px 0px 100px 0px;
`;

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px); // 시작 위치 설정
  }
  to {
    opacity: 1;
    transform: translateY(0); // 끝 위치 설정 
  }
`;

const AnimatedImgFirst = styled.img`
  width: 250px;
  height: 300px;
  object-fit: cover;
  margin: 10px;
  border-radius: 20px;
  opacity: 0; // 초기에 투명하게 설정
  animation: ${fadeInAnimation} 1.5s ease 0s forwards; // 0.3초 지연된 시작

  @media (max-width: 900px) {
    width: 100px;
    height: 150px;
  }
`;

const AnimatedImgSecond = styled.img`
  width: 250px;
  height: 300px;
  object-fit: cover;
  margin: 10px;
  border-radius: 20px;
  opacity: 0;
  animation: ${fadeInAnimation} 1.5s ease 0.3s forwards;

  @media (max-width: 900px) {
    width: 100px;
    height: 150px;
  }
`;

const AnimatedImgThird = styled.img`
  width: 250px;
  height: 300px;
  object-fit: cover;
  margin: 10px;
  border-radius: 20px;
  opacity: 0;
  animation: ${fadeInAnimation} 1.5s ease 0.6s forwards;

  @media (max-width: 900px) {
    width: 100px;
    height: 150px;
  }
`;

const AnimatedImgFourth = styled.img`
  width: 250px;
  height: 300px;
  object-fit: cover;
  margin: 10px;
  border-radius: 20px;
  opacity: 0;
  animation: ${fadeInAnimation} 1.5s ease 0.9s forwards;

  @media (max-width: 900px) {
    width: 100px;
    height: 150px;
  }

  @media (max-width: 359px) {
    display: none;
  }
`;

const AnimatedImgFifth = styled.img`
  width: 250px;
  height: 300px;
  object-fit: cover;
  margin: 10px;
  border-radius: 20px;
  opacity: 0;
  animation: ${fadeInAnimation} 1.5s ease 1.2s forwards;

  @media (max-width: 900px) {
    width: 100px;
    height: 150px;
  }
`;

const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translate(-50%, 0);
  }
  40% {
    transform: translate(-50%, -20px);
  }
  60% {
    transform: translate(-50%, -10px);
  }
`;

const BounceArrow = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  font-size: 40px;
  animation: ${bounceAnimation} 2s infinite;
`;

export default PartFirst;
