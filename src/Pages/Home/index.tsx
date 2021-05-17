/** @jsxImportSource @emotion/react */

import {FC, memo, useCallback, useState} from 'react';
import {css} from "@emotion/react/macro";
import TextInput from "../../common/components/atoms/inputs/TextInput";
import FormTextInput from "../../common/components/molecules/inputs/FormTextInput";
import ImperialMetricInputs from "../../common/components/organisms/ImperialMetricInputs";
import {Col, Container, Row} from "react-grid-system";

interface Props {

}
const HomePage: FC<Props> = () => {
    const [actualTab, setActualTab] = useState(() => 'metric');

    const setFieldValue = useCallback((_, value) => {
        setActualTab(value);
    }, []);
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

            {/*
              * Third step, organism
              *
                <div css={atomAndMoleculeContainer}>
                    <ImperialMetricInputs
                        measureSystemValue={'metric'}
                        setFieldValue={() => console.log('set field')}
                        onBlur={() => console.log('blur')}
                        onChange={() => console.log('sadss')}
                    />
                </div>
             */
            }
            <div css={atomAndMoleculeContainer}>
                <ImperialMetricInputs
                    measureSystemValue={actualTab}
                    setFieldValue={setFieldValue}
                    onBlur={() => console.log('blur')}
                    onChange={() => console.log('sadss')}
                />
            </div>
        </div>
    );
};

const atomAndMoleculeContainer = css({
    margin: 20,
    width: '40%',
})

export default memo(HomePage);
