import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex; justify-content: center; align-items: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: #4b4b4b;
  padding: 2rem;
  border-radius: 8px;
  width: 400px;
`;

export const Input = styled.input`
  width: 100%;
  height: 4rem;
  padding: 1rem;
  background: #2f2f2f;
  color: #e1e1e6;
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
  outline: none;
  border-radius: 4px;
  font-size: 1.6rem;
`;

export const ConteinerButton = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  width: 100%;
`

export const Button = styled.button`
  border-radius: 4px;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  font-weight: 500;
  transition: 0.1s;
  cursor: pointer;

  border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
  background-color: #303030;
  color: ${({ theme }) => theme.COLORS.DEFAULT};

  &:nth-child(even){
    background-color: ${({ theme }) => theme.COLORS.TRIJAY_COLOR};
  }

  
  &:hover {
    filter: brightness(1.2);
  }
`;