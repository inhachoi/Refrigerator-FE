import styled from "styled-components";
import { FaArrowDown } from "react-icons/fa6";
import { PiTreeBold } from "react-icons/pi";
import { TbBrandCarbon } from "react-icons/tb";

function PartThird() {
  return (
    <PartLayout>
      <PartComment>
        <MainComment>
          <TbBrandCarbon />
          &nbsp;탄소 배출&nbsp; <FaArrowDown />
        </MainComment>
        <SubComment>
          유통기한이 임박한 음식을 먹으면, 음식물 쓰레기 처리 과정에서 생기는
          탄소 배출을 막을 수 있어요. 아낀 탄소 배출량을, 나무가
          <PiTreeBold /> 휴식할 수 있는 일수로 보여줘요.
        </SubComment>
      </PartComment>
      <PartImg src="../../eco4.webp" alt="" />
    </PartLayout>
  );
}

const PartLayout = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  background-color: #eef9e2;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const PartImg = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 900px) {
    width: 100%;
    height: 50vh;
  }
`;

const PartComment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 50px;
  font-size: 20px;

  @media (max-width: 900px) {
    width: 100%;
    height: 40vh;
    padding: 0px;
  }
`;

const MainComment = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  color: rgb(64, 122, 87);
  font-size: 40px;
  font-weight: bold;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 25px;
  }
`;

const SubComment = styled.div`
  margin: 20px 0;
  color: rgb(56, 99, 74);
  font-size: 20px;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 15px;
    margin: 10px 60px;
  }
`;

export default PartThird;
