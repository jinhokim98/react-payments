import * as Preview from './style';
import magnetic from '../../assets/image/magnetic.svg';
import visa from '../../assets/image/visa.svg';
import masterCard from '../../assets/image/masterCard.svg';
import theme from '../../styles/theme';
import { CardNumberState, ExpirationDateState, ShowImageCondition } from '../../types/Types';
import CONDITION from '../../constants/Condition';

interface CardInformationPreviewProps {
  cardNumberState: CardNumberState;
  expirationDateState: ExpirationDateState;
  userNameState: string;
  showImageCondition: ShowImageCondition;
}

const CardInformationPreview = ({
  cardNumberState,
  expirationDateState,
  userNameState,
  showImageCondition,
}: CardInformationPreviewProps) => {
  const { first, second, third, fourth } = cardNumberState;
  const { month, year } = expirationDateState;
  const slashViewCondition = month && year;
  const { visaShowCondition, masterCardShowCondition } = showImageCondition;

  return (
    <Preview.Container>
      <Preview.ImgContainer>
        <Preview.CardImg src={magnetic} alt="" />
        {masterCardShowCondition && <Preview.CardImg src={masterCard} alt="masterCard" />}
        {visaShowCondition && <Preview.CardImg src={visa} alt="visa" />}
      </Preview.ImgContainer>
      <Preview.UserInformationContainer>
        <Preview.CardNumberContainer>
          <Preview.UserInformation $typo={theme.typography.cardNumber}>
            {first}
          </Preview.UserInformation>
          <Preview.UserInformation $typo={theme.typography.cardNumber}>
            {second}
          </Preview.UserInformation>
          <Preview.UserInformation $typo={theme.typography.cardNumber}>
            {CONDITION.hiddenCardNumber.repeat(String(third ?? '').length)}
          </Preview.UserInformation>
          <Preview.UserInformation $typo={theme.typography.cardNumber}>
            {CONDITION.hiddenCardNumber.repeat(String(fourth ?? '').length)}
          </Preview.UserInformation>
        </Preview.CardNumberContainer>
        <Preview.UserInformation $typo={theme.typography.cardExpirationDate}>
          {`${month ?? ''}${slashViewCondition ? CONDITION.splitSlash : ''}${year ?? ''}`}
        </Preview.UserInformation>
        <Preview.UserInformation $typo={theme.typography.cardUserName}>
          {userNameState ?? ''}
        </Preview.UserInformation>
      </Preview.UserInformationContainer>
    </Preview.Container>
  );
};

export default CardInformationPreview;
