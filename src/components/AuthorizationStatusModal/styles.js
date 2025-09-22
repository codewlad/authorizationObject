import styled from 'styled-components';

export const Message = styled.p`
    display: flex;
    gap: 1rem;
    color: ${({ $authorized }) => ($authorized ? '#169916ff' : '#ff5656')};
`

export const ReasonText = styled.p`
    color: #e1e1e6;
`

export const AuthList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const AuthListLine = styled.div`

    text-align: justify;
    
    span {
        color: #ff5656;
    }
`