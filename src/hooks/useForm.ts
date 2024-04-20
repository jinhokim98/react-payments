import useCardNumber from './useCardNumbers';
import useExpirationDate from './useExpirationDate';
import useUserName from './useUserName';

interface FormState {
  cardNumber: number[];
  expirationDate: number[];
  userName: string;
}

const useForm = (defaultValues: FormState) => {
  const { cardNumberState, setCardNumberState, cardNumberErrorState, showImageCondition } =
    useCardNumber(defaultValues.cardNumber);
  const { expirationDateState, setExpirationDateState, expirationDateErrorState } =
    useExpirationDate(defaultValues.expirationDate);
  const { userNameState, setUserNameState, isUserNameError } = useUserName(defaultValues.userName);

  const previewProps = {
    cardNumberState,
    expirationDateState,
    userNameState,
    showImageCondition,
  };

  const formProps = {
    cardNumberState,
    setCardNumberState,
    cardNumberErrorState,
    expirationDateState,
    setExpirationDateState,
    expirationDateErrorState,
    userNameState,
    setUserNameState,
    isUserNameError,
  };

  return { previewProps, formProps };
};

export default useForm;
