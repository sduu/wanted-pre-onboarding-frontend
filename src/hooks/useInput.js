import { useCallback, useState } from 'react';

const useInput = initialState => {
  const [value, setValue] = useState(initialState);

  const updateValue = useCallback(e => {
    const { type, value } = e.target;

    if (type === 'checkbox' || type === 'radio') {
      setValue(prev => !prev);
    } else if (typeof initialState === 'object') {
      setValue(prev => ({ ...prev, [type]: value }));
    } else {
      setValue(value);
    }
  }, []);

  return [value, updateValue, setValue];
};

export default useInput;
