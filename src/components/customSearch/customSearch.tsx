import React from 'react';
import {TextInput} from 'react-native';

/**
 *
  @param {} props
 * @returns
 */
const CustomSearch = (props: any) => {
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
export default React.memo(CustomSearch);
