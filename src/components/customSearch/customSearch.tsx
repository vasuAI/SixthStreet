import React from 'react';
import {TextInput} from 'react-native';

/**
 *
  @param {} props
 * @returns
 */
const CustmSearch = (props: any) => {
  const {value, placeholder, onChange, inputStyle, placeholderTextColor} =
    props;
  return (
    <TextInput
      value={value}
      style={inputStyle}
      onChangeText={onChange}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
    />
  );
};

/**
 * @exports
 */
export default React.memo(CustmSearch);
