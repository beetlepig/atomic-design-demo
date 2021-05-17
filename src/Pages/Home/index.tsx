/** @jsxImportSource @emotion/react */

import {FC, memo} from 'react';
import TextInput from "../../common/components/atoms/inputs/TextInput";
import {css} from "@emotion/react/macro";

interface Props {

}
const HomePage: FC<Props> = () => {
    return (
        <div>
            {/*
              * First step, atom
              *
                <div css={atomContainer}>
                    <TextInput onChange={() => console.log('change')} onBlur={() => console.log('blur')}
                               placeholder={'cm'}/>
                </div>
             */
            }

            {/*
              * Second step, molecule
              *
                <div css={atomContainer}>
                    <TextInput onChange={() => console.log('change')} onBlur={() => console.log('blur')}
                               placeholder={'cm'}/>
                </div>
             */
            }
        </div>
    );
};

const atomContainer = css({
    width: '30%',
})

export default memo(HomePage);
