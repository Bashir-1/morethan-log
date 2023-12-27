import { CONFIG } from "site.config"
import React from "react"
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineMail,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineWeibo,
  AiOutlineSend,
} from "react-icons/ai"
import styled from "@emotion/styled"

const ContactCard: React.FC = () => {
  return (
    <>
      <StyledTitle>💬 Contact</StyledTitle>
      <StyledWrapper>
        {CONFIG.profile.github && (
          <a
            href={`https://github.com/${CONFIG.profile.github}`}
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub className="icon" />
            <div className="name">github</div>
          </a>
        )}
        {CONFIG.profile.instagram && (
          <a
            href={`https://www.instagram.com/${CONFIG.profile.instagram}`}
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineInstagram className="icon" />
            <div className="name">instagram</div>
          </a>
        )}
        {CONFIG.profile.twitter && (
          <a
            href={`https://twitter.com/${CONFIG.profile.twitter}`}
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter className="icon" />
            <div className="name">Twitter</div>
          </a>
        )}
        {CONFIG.profile.weibo && (
          <a
            href={`https://weibo.com/u/${CONFIG.profile.weibo}`}
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineWeibo className="icon" />
            <div className="name">weibo</div>
          </a>
        )}
        {CONFIG.profile.youtube && (
          <a
            href={`https://space.bilibili.com/${CONFIG.profile.youtube}`}
            rel="noreferrer"
            target="_blank"
          >
            <AiFillYoutube className="icon" />
            <div className="name">bilibili</div>
          </a>
        )}
        {CONFIG.profile.send && (
          <a
            href={`https://t.me/${CONFIG.profile.send}`}
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineSend className="icon" />
            <div className="name">Telegram</div>
          </a>
        )}
        {CONFIG.profile.email && (
          <a
            href={`mailto:${CONFIG.profile.email}`}
            rel="noreferrer"
            target="_blank"
            css={{ overflow: "hidden" }}
          >
            <AiOutlineMail className="icon" />
            <div className="name">email</div>
          </a>
        )}
        {CONFIG.profile.linkedin && (
          <a
            href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin}`}
            rel="noreferrer"
            target="_blank"
          >
            <AiFillLinkedin className="icon" />
            <div className="name">linkedin</div>
          </a>
        )}
      </StyledWrapper>
    </>
  )
}

export default ContactCard

const StyledTitle = styled.div`
  padding: 0.25rem;
  margin-bottom: 0.75rem;
`
const StyledWrapper = styled.div`
  display: flex;
  padding: 0.25rem;
  flex-direction: column;
  border-radius: 1rem;
  background-color: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray4};
  a {
    display: flex;
    padding: 0.75rem;
    gap: 0.75rem;
    align-items: center;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.gray11};
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
      background-color: ${({ theme }) => theme.colors.gray5};
    }
    .icon {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    .name {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`
