import useInput from './useInput';
import CONDITION from '../constants/Condition';

const { REG_EXP } = CONDITION;

const useExpirationDate = (defaultValues: string[]) => {
  const monthCondition = (value: string) => Number(value) >= 1 && Number(value) <= 12;
  const yearCondition = (value: string) => value.length === 2;

  const {
    value: month,
    onChange: setMonth,
    isError: isMonthError,
  } = useInput<string>(defaultValues[0] ?? '', REG_EXP.month, monthCondition);
  const {
    value: year,
    onChange: setYear,
    isError: isYearError,
  } = useInput<string>(defaultValues[1] ?? '', REG_EXP.year, yearCondition);

  return {
    expirationDateState: {
      month,
      year,
    },
    setExpirationDateState: {
      setMonth,
      setYear,
    },
    expirationDateErrorState: {
      isMonthError,
      isYearError,
    },
  };
};

export default useExpirationDate;