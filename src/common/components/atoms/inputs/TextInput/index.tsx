/** @jsxImportSource @emotion/react */

import {FC, InputHTMLAttributes, memo} from 'react';
import {css} from '@emotion/react/macro';
import {INPUT_TEXT_SIZE} from '../../../../utils/constants/textSize';

export interface TextInputProps {
  name?: string;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  onChange: InputHTMLAttributes<HTMLInputElement>['onChange'];
  onBlur: InputHTMLAttributes<HTMLInputElement>['onBlur'];
  value?: InputHTMLAttributes<HTMLInputElement>['value'];
  placeholder: string;
}
const TextInput: FC<TextInputProps> = ({
  placeholder,
  onChange,
  onBlur,
  value,
  name,
  type = 'text',
}) => {
  return (
    <input
      css={inputStyle}
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      step={type === 'number' ? 'any' : undefined}
      onBlur={onBlur}
      value={value}
    />
  );
};

export const inputStyle = css({
  appearance: 'none',
  outlineColor: 'rgb(183,217,252)',
  width: '100%',
  fontFamily: "'Nunito', sans-serif",
  fontSize: INPUT_TEXT_SIZE,
  fontWeight: 700,
  boxSizing: 'border-box',
  color: 'rgba(33, 67, 156, 1)',
  '::placeholder': {
    fontWeight: 400,
    color: 'rgba(33, 67, 156, 0.45)',
  },
  backgroundColor: 'rgba(227, 239, 251, 1)',
  boxShadow: 'none',
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 10,
  paddingBottom: 10,
  border: 'none',
  borderRadius: 5,
});

export default memo(TextInput);
