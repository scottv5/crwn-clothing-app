import styled, { css } from "styled-components";
import { FC, InputHTMLAttributes } from "react";

type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

type LabelProps = {
  shrink?: boolean;
};

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <Label
          shrink={
            (otherProps.value &&
              typeof otherProps.value === "string" &&
              !!otherProps.value.length) ||
            false
          }
        >
          {label}
        </Label>
      )}
    </Group>
  );
};

export default FormInput;

const subColor = "grey";
const mainColor = "black";
const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;
const Group = styled.div`
  position: relative;
  margin: 45px 0;
  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;
const Label = styled.label<LabelProps>`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${(props) => (props.shrink ? shrinkLabelStyles : null)}
`;
const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;
  &:focus {
    outline: none;
  }
  &:focus ~ ${Label} {
    ${shrinkLabelStyles}
  }
`;
