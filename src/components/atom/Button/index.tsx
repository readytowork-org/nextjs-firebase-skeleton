import { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../../../utils/theme";
import { Button } from "antd";

type ButtonType = "primary" | "link";
export interface ButtonProps {
  children?: React.ReactNode;
  htmlType?: "button" | "submit" | "reset";
  type?: ButtonType;
  width?: string;
  block?: boolean;
  padding?: string;
  loading?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  minheight?: number;
  minwidth?: number;
  boxshadow?: string;
  background?: string;
  borderradius?: string;
  noradius?: boolean;
  typography?: any;
  color?: string;
  fontSize?: string;
  bold?: boolean;
  margin?: string;
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: React.MouseEventHandler<HTMLAnchorElement>) => void;
  bordercolor?: string;
}

const Wrapper = styled.div`
  display: contents;
  & .ant-btn-primary {
    background: ${theme.blue2};

    box-shadow: 0px 0px 12px rgba(28, 86, 225, 0.51);
    font-size: 16px;
    line-height: 30px;
    font-weight: 700;
  }

  & .ant-btn-link {
    box-shadow: none;
    background: transparent;
    color: ${theme.blue2};
  }
`;
const StyledButton = styled(Button)`
  ${({ typography }: ButtonProps) => {
    if (typography) {
      return typography;
    }
  }}
  &[disabled] {
    background-color: ${theme.secondaryLight};
    border: none;
    box-shadow: none !important;
    color: ${theme.base};
  }
  border-color: ${theme.blue2};

  border-radius: ${({ borderradius, noradius }: ButtonProps) => {
    return noradius ? "none" : borderradius ? borderradius : "100px";
  }};
  margin: ${({ margin }: ButtonProps) => {
    return margin && margin;
  }};
  padding: ${({ type, padding }: ButtonProps) => {
    if (padding) {
      return `${padding} !important`;
    }
    switch (type) {
      case "primary":
        return "0px 36px 0px 37px";
      default:
        return "0px 36px 0px 37px";
    }
  }};

  background: ${({ background }: ButtonProps) => {
    return background ? background : theme.blue2;
  }};

  color: ${({ color }: ButtonProps) => {
    return color ? `${color} !important` : theme.base;
  }};
  font-size: ${({ fontSize }: ButtonProps) => {
    return fontSize && fontSize;
  }};
  font-weight: ${({ bold }: ButtonProps) => {
    return bold && "bold";
  }};
  min-width: ${({ minwidth }: ButtonProps) => {
    return minwidth && `${minwidth}px`;
  }};
  width: ${({ width }: ButtonProps) => {
    return width && `${width}`;
  }};
  min-height: ${({ minheight }: ButtonProps) => {
    return minheight && `${minheight}px`;
  }};
`

export const ButtonComponent: React.FC<ButtonProps> = ({
  children,
  htmlType,
  loading,
  onClick,
  ...rest
}) => {
  return (
    <Wrapper {...rest}>
      <StyledButton
        onClick={onClick}
        htmlType={htmlType}
        loading={loading}
        {...rest}
      >
        {children}
      </StyledButton>
    </Wrapper>
  );
};
