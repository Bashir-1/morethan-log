import styled from "@emotion/styled"
import { useRouter } from "next/router"
import React from "react"

type Props = {}

const Footer: React.FC<Props> = () => {
  const router = useRouter()
  return (
    <StyledWrapper>
      <a onClick={() => router.push("/")}>← Back</a>
      <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        ↑ Top
      </a>
    </StyledWrapper>
    <StyledWrapper>
      博客所有文章除特别声明外，均采用署名-非商业性使用-相同方式共享 4.0 国际(CC BY-NC-SA 4.0)许可协议,转载请注明出处
      <br>© {CONFIG.profile.name} {from === y || !from ? y : `${from} - ${y}`}</br>
    </StyledWrapper>
  )
}

export default Footer

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray10};
  a {
    margin-top: 0.5rem;
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
    }
  }
`
