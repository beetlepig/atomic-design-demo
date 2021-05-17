/** @jsxImportSource @emotion/react */

import type {TextInputProps} from '../../atoms/inputs/TextInput';

import {FC, memo, useCallback, useMemo} from 'react';
import styled from '@emotion/styled/macro';
import {INPUT_TEXT_SIZE} from '../../../utils/constants/textSize';
import Text from '../../atoms/Text';
import FormTextInput from '../../molecules/inputs/FormTextInput';
import {css} from '@emotion/react/macro';
import {Col, Row, Visible, useScreenClass} from 'react-grid-system';
import Separator from '../../layout/Separator';

interface Props {
  setFieldValue: (
    field: string,
    value: string,
    shouldValidate?: boolean | undefined
  ) => any;
  onBlur: TextInputProps['onBlur'];
  onChange: TextInputProps['onChange'];
  measureSystemValue: string;
  feetValue?: number | string;
  feetError?: string;
  feetTouched?: boolean;
  inchValue?: number | string;
  inchError?: string;
  inchTouched?: boolean;
  weightValue?: number | string;
  weightError?: string;
  weighTouched?: boolean;
  cmValue?: number | string;
  cmError?: string;
  cmTouched?: boolean;
  kgValue?: number | string;
  kgError?: string;
  kgTouched?: boolean;
}
const ImperialMetricInputs: FC<Props> = ({
  setFieldValue,
  measureSystemValue,
  feetValue,
  feetError,
  feetTouched,
  inchValue,
  inchError,
  inchTouched,
  weightValue,
  weightError,
  weighTouched,
  cmValue,
  cmError,
  cmTouched,
  kgValue,
  kgError,
  kgTouched,
  onBlur,
  onChange,
}) => {
  const screenClass = useScreenClass();
  console.log(screenClass);
  const onMeasureImperialSelect = useCallback(() => {
    setFieldValue('measureSystemSelection', 'imperial');
  }, [setFieldValue]);
  const onMeasureMetricSelect = useCallback(() => {
    setFieldValue('measureSystemSelection', 'metric');
  }, [setFieldValue]);

  const imperialMetricInputs = useMemo(() => {
    return (
      <>
        <Col xs={24} sm={8}>
          <FormTextInput
            name={'feet'}
            labelText={'Height'}
            value={feetValue}
            onChange={onChange}
            onBlur={onBlur}
            error={feetError}
            touched={feetTouched}
            placeholder={'Feet'}
          />
        </Col>
        <Col xs={24} sm={8}>
          <FormTextInput
            value={inchValue}
            name={'inch'}
            labelText={'⠀'}
            onChange={onChange}
            onBlur={onBlur}
            error={inchError}
            touched={inchTouched}
            placeholder={'Inch'}
          />
        </Col>
        <Visible xs>
          <Col xs={24}>
            <Separator size={15} direction={'horizontal'} />
          </Col>
        </Visible>
        <Col xs={24} sm={8}>
          <FormTextInput
            labelText={'Weight'}
            value={weightValue}
            name={'weight'}
            onChange={onChange}
            onBlur={onBlur}
            error={weightError}
            touched={weighTouched}
            placeholder={'Pounds'}
          />
        </Col>
      </>
    );
  }, [
    feetValue,
    feetError,
    feetTouched,
    inchValue,
    inchError,
    inchTouched,
    onBlur,
    onChange,
    weightValue,
    weightError,
    weighTouched,
  ]);
  const metricMetricInputs = useMemo(() => {
    return (
      <>
        <Col xs={24} sm={12}>
          <FormTextInput
            name={'cm'}
            labelText={'Height'}
            value={cmValue}
            onChange={onChange}
            onBlur={onBlur}
            error={cmError}
            touched={cmTouched}
            placeholder={'cm'}
          />
        </Col>
        <Visible xs>
          <Col xs={24}>
            <Separator size={15} direction={'horizontal'} />
          </Col>
        </Visible>
        <Col xs={24} sm={12}>
          <FormTextInput
            labelText={'Weight'}
            value={kgValue}
            name={'kg'}
            error={kgError}
            touched={kgTouched}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={'kg'}
          />
        </Col>
      </>
    );
  }, [
    onChange,
    onBlur,
    cmError,
    cmTouched,
    cmValue,
    kgValue,
    kgError,
    kgTouched,
  ]);

  return (
    <div>
      <StyledMeasureSystemSelection
        isSelected={measureSystemValue === 'imperial'}
        onClick={onMeasureImperialSelect}>
        <Text
          fontSize={INPUT_TEXT_SIZE}
          text={'Imperial'}
          color={
            measureSystemValue === 'imperial'
              ? 'rgba(255, 255, 255, 1)'
              : 'rgba(33, 67, 156, 1)'
          }
        />
      </StyledMeasureSystemSelection>
      <StyledMeasureSystemSelection
        isSelected={measureSystemValue === 'metric'}
        onClick={onMeasureMetricSelect}>
        <Text
          fontSize={INPUT_TEXT_SIZE}
          text={'Metric'}
          color={
            measureSystemValue === 'metric'
              ? 'rgba(255, 255, 255, 1)'
              : 'rgba(33, 67, 156, 1)'
          }
        />
      </StyledMeasureSystemSelection>
      <div css={inputsContainer}>
        <Row align={'start'}>
          {measureSystemValue === 'imperial'
            ? imperialMetricInputs
            : metricMetricInputs}
        </Row>
      </div>
    </div>
  );
};

const StyledMeasureSystemSelection = styled('div')<{isSelected: boolean}>(
  {
    display: 'inline-block',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    border: 'solid',
    borderWidth: 1,
    borderBottomWidth: 0,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    cursor: 'pointer',
  },
  ({isSelected}) => ({
    backgroundColor: isSelected ? 'rgba(16, 123, 238, 1)' : 'transparent',
    borderColor: isSelected ? 'transparent' : 'rgba(217, 232, 247, 1)',
  })
);

const inputsContainer = css({
  padding: 20,
  paddingBottom: 53,
  border: 'solid',
  borderWidth: 1,
  borderBottomRightRadius: 5,
  borderBottomLeftRadius: 5,
  borderTopRightRadius: 5,
  borderColor: 'rgba(217, 232, 247, 1)',
});

export default memo(ImperialMetricInputs);
