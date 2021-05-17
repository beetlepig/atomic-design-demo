/** @jsxImportSource @emotion/react */

import {FC, memo} from 'react';
import {css} from "@emotion/react/macro";
import TextInput from "../../common/components/atoms/inputs/TextInput";
import FormTextInput from "../../common/components/molecules/inputs/FormTextInput";

interface Props {

}
const HomePage: FC<Props> = () => {
    return (
        <div>
            {/*
              * First step, atom
              *
                <div css={atomAndMoleculeContainer}>
                    <TextInput onChange={() => console.log('change')} onBlur={() => console.log('blur')}
                               placeholder={'cm'}/>
                </div>
             */
            }

            {/*
              * Second step, molecule
              *
                <div css={atomAndMoleculeContainer}>
                    <FormTextInput
                        name={'cm'}
                        onChange={() =>  console.log('on change')}
                        onBlur={() => console.log('blur')}
                        placeholder={'cm'}
                        labelText={'centimeters'}
                    />
                </div>
             */
            }

        </div>
    );
};

const atomAndMoleculeContainer = css({
    margin: 20,
    width: '30%',
})

export default memo(HomePage);
