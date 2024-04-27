import { useNavigate } from 'react-router-dom';
import * as Styled from './style';
import Button from '../../components/Button/Button';
import Failure from '../../assets/image/failure.png';
import URLS from '../../constants/Urls';

const ERROR_MESSAGE = `잘못된 접근입니다
돌아가세요`;

const Fallback = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate(URLS.register);
  };

  return (
    <Styled.Container>
      <Styled.FaliureIcon src={Failure} alt="" />
      <Styled.Ment>{ERROR_MESSAGE}</Styled.Ment>
      <Styled.BackButton>
        <Button label="확인" style={{ borderRadius: 8 }} onClick={goMain} />
      </Styled.BackButton>
    </Styled.Container>
  );
};

export default Fallback;
