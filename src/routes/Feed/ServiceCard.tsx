import { CONFIG } from "site.config";
import React from "react";
import styled from "@emotion/styled";
import {
  AiFillCodeSandboxCircle,
  AiFillAudio,
  AiFillDatabase,
  AiFillCloud,
  AiFillRobot,
  AiOutlineSearch,
  AiFillAppstore,
} from "react-icons/ai";
import { Emoji } from "src/components/Emoji";

const getIconByIndex = (index: number) => {
  switch (index % 7) {
    case 0:
      return <AiFillCodeSandboxCircle className="icon" />;
    case 1:
      return <AiFillAudio className="icon" />;
    case 2:
      return <AiFillDatabase className="icon" />;
    case 3:
      return <AiFillCloud className="icon" />;
    case 4:
      return <AiFillRobot className="icon" />;
    case 5:
      return <AiOutlineSearch className="icon" />;
    case 6:
      return <AiFillAppstore className="icon" />;
    default:
      return <AiFillCodeSandboxCircle className="icon" />;
  }
};

const ServiceCard: React.FC = () => {
  if (!CONFIG.projects) return null;
  return (
    <>
      <StyledTitle>
        <Emoji>🌟</Emoji> Service
      </StyledTitle>
      <StyledWrapper>
        {CONFIG.projects.map((project, idx) => (
          <a
            key={idx}
            href={project.href}
            rel="noreferrer"
            target="_blank"
          >
            {project.icon || getIconByIndex(idx)} {/* 使用项目的图标，如果未定义，则使用根据索引获取的图标 */}
            <div className="name">{project.name}</div>
          </a>
        ))}
      </StyledWrapper>
    </>
  );
};

export default ServiceCard;

const StyledTitle = styled.div`
  padding: 0.25rem;
  margin-bottom: 0.75rem;
`;

const StyledWrapper = styled.div`
  display: flex;
  padding: 0.25rem;
  margin-bottom: 2.25rem;
  flex-direction: column;
  border-radius: 1rem;
  background-color: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray4};
  > a {
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
`;
