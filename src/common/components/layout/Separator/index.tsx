import {memo} from 'react';
import styled from '@emotion/styled/macro';

interface Props {
  size: number;
  direction: 'vertical' | 'horizontal';
  display?: 'block' | 'inline-block';
  height?: number;
  color?: string;
  showLine?: boolean;
}

const Separator = styled.div<Props>`
  display: ${({display = 'block'}) => display};
  height: ${({direction, height}) =>
    direction === 'horizontal' ? `${height ?? 1}px` : 'auto'};
  margin-top: ${({size, direction}) =>
    direction === 'horizontal' ? `${size / 2}px` : 0};
  margin-bottom: ${({size, direction}) =>
    direction === 'horizontal' ? `${size / 2}px` : 0};
  width: ${({direction}) => (direction === 'vertical' ? '1px' : 'auto')};
  margin-left: ${({size, direction}) =>
    direction === 'vertical' ? `${size / 2}px` : 0};
  margin-right: ${({size, direction}) =>
    direction === 'vertical' ? `${size / 2}px` : 0};
  background-color: ${({showLine, color}) =>
    showLine ? color ?? 'rgba(204, 213, 237, 1)' : 'transparent'};
  opacity: ${({color}) => (!color ? 0.3 : 1)};
`;

export default memo(Separator);
