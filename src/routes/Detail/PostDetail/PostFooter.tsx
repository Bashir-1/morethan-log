import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const Footer: React.FC<Props> = () => {
  const router = useRouter();

  return (
    <StyledWrapper>
      <a onClick={() => router.push("/")}>← Back</a>
      <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        ↑ Top
      </a>
      <span className="custom-text">
        博客所有文章除特别声明外，均采用署名-非商业性使用-相同方式共享 4.0 国际(CC BY-NC-SA 4.0)许可协议；转载文章请注明来自：NCC-17039（附上本站地址）
      </span>
    </StyledWrapper>
  );
};

export default Footer;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray10};
  a {
    margin-top: 0.5rem;
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
    }
  }

  .custom-text {
    margin-top: 0.5rem;
    text-align: center; /* 可以根据需要设置文本居中等样式 */
    max-width: 80%; /* 根据需要设置最大宽度 */
    font-size: 0.75rem; /* 根据需要设置字体大小 */
  }
`;
