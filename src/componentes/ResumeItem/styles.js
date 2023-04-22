import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: .5rem;
  padding: .5rem 1.5rem;
  width: 30%;
  height: auto;
  box-shadow: 0rem .0rem .2rem #000;

  @media (max-width: 75.0rem) {
    width: 20%;

    p {
      font-size: 1.2rem;
    }

    span {
      font-size: 2.0rem;
    }

    svg {
      display: none;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 1.0rem;
  margin: 1.5rem auto;

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 2.0rem;
`;

export const Total = styled.span`
  font-size: 3.0rem;
  font-weight: bold;
`;