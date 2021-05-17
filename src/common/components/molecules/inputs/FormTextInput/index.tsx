/** @jsxImportSource @emotion/react */

import {FC, memo} from 'react';
import {css} from '@emotion/react/macro';

import TextInput, {TextInputProps} from '../../../atoms/inputs/TextInput';
import ErrorMessage from '../../../atoms/inputs/ErrorMessage';
import Text from '../../../atoms/Text';
import {INPUT_TEXT_SIZE} from '../../../../utils/constants/textSize';
import Separator from '../../../layout/Separator';

interface Props {
  labelText?: string;
  name: string;
  type?: TextInputProps['type'];
  touched?: boolean;
  error?: string;
  onChange: TextInputProps['onChange'];
  onBlur: TextInputProps['onBlur'];
  value?: TextInputProps['value'];
  placeholder: string;
}
const FormTextInput: FC<Props> = ({
    labelText,
    touched,
    error,
    placeholder,
    onChange,
    onBlur,
    value,
    name,
    type,
  }) => {
  return (
      <div css={InputWrapper}>
        {labelText && (
            <Text
                fontSize={INPUT_TEXT_SIZE}
                tag={'label'}
                htmlFor={name}
                text={labelText}
            />
        )}
        <Separator size={5} direction={'horizontal'} />
        <TextInput
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
        />
        <ErrorMessage touched={touched} text={error} />
      </div>
  );
};

const InputWrapper = css({
  flex: 1,
});

export default memo(FormTextInput);
