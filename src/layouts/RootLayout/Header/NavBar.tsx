import styled from "@emotion/styled"
import Link from "next/link"

const NavBar: React.FC = () => {
  const links = [
    { id: 1, name: "关于", to: "/about" },
    { id: 2, name: "友链", to: "/links" },
    { id: 3, name: "日志", to: "/update" }, 
    { id: 4, name: "联系", to: "/contact" }, 
    { id: 5, name: "站点订阅", to: "/sitemap.xml" }, 
  ];
  return (
    <StyledWrapper className="">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.to}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </StyledWrapper>
  )
}

export default NavBar

const StyledWrapper = styled.div`
  flex-shrink: 0;
  ul {
    display: flex;
    flex-direction: row;
    li {
      display: block;
      margin-left: 1rem;
      color: ${({ theme }) => theme.colors.gray11};
    }
  }
`
