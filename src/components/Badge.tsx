import { styled } from "styled-components";

interface Props {
  children: string;
  textColor?: string;
}

const BadgeWrapper = styled.div<{ textcolor?: string }>`
  display: inline-block;
  padding: 4px 4px;
  border-radius: 8px;
  background-color: ${(props) => `${props.textcolor}1A` || "lightgray"};
  color: ${(props) => (props.textcolor ? `${props.textcolor}` : "white")};
  font-size: 12px;
  font-weight: light;
`;

const Badge = ({ textColor, children }: Props) => {
  return <BadgeWrapper textcolor={textColor}>{children}</BadgeWrapper>;
};

export default Badge;
