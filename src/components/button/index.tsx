import React from 'react';
import * as S from './styles';
type Props = {
	children: any,
}
const Button = ({ children, ...rest }: Props) => {
	return <S.Button {...rest}>{children}</S.Button>;
};

export default Button;
