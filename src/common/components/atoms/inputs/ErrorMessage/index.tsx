/** @jsxImportSource @emotion/react */

import {FC, memo} from 'react';
import {css} from '@emotion/react/macro';
import Text from '../../Text';
import {INPUT_TEXT_SIZE} from '../../../../utils/constants/textSize';

interface Props {
  touched?: boolean;
  text?: string;
}

const ErrorMessage: FC<Props> = ({text, touched}) => {
  return (
    <>
      {touched && text && (
        <div css={TextWrapper}>
          <Text
            text={text}
            fontSize={INPUT_TEXT_SIZE}
            color={'rgba(255, 92, 92, 1)'}
          />
        </div>
      )}
    </>
  );
};

const TextWrapper = css({
  paddingLeft: 5,
  paddingRight: 5,
  paddingTop: 10,
});

export default memo(ErrorMessage);
