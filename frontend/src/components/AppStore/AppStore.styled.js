import styled from 'styled-components';
import { palette } from '../../styles/palette';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import ComponentCard from './AppCard.jsx';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

export const Store = styled.div`
    padding:20px;
    background-color: #1a2b42;
    height: 100%;
    border-radius: 10px;
`;

export const Content = styled(CardContent)`
    height: 100%;
    width: 100%
`;

export const AddButton = styled(CardActions)`
    height: 20px;
    width: 20px;
    margin-top: 50px;
`;

export const AppCard = styled.div`
    padding: 25px;
`;

export const StyledCard = styled(Card)`
    width: 150px;
    height: 150px;
    padding: 5px;
`;

export const AppMedia = styled(ComponentCard)`
`;

export const SearchBar = styled.div`
    text-align: left;
    height: 40px;
    padding-left: 10px;
    padding-bottom: 50px;
    padding-top: 10px
`;

export const StyledGrid = styled(Grid)`
    display: flex;
    justify-content: space-around;
    overflow: hidden;
    justify-content: flex-start;
`;
export const Field = styled.input`
    height: 40px;
    width: 100%;
    border-width: 0;
    border-radius: 10em;
    padding-left: 20px;
    font-size: medium;
    border-width: 5px;
    border-color: ${palette.LIGHT_ORANGE};
    background-color: #4d7d86;
    color: white;
    font-weight: 400;

    &::placeholder {
        color: white;
        font-weight: 400;
    }
`;

export const Input = styled.div`
    border-radius:10em;
    width: 33%;
    height: 40px;
    border-color: ${palette.LIGHT_ORANGE};
    color: white;
`;
