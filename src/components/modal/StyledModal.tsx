import { Box } from "@mui/material";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

export const StyledModal = styled(Box)`
    background-color: #F8F8F8;
    width: 30em;
    height: auto;
    margin: 3em auto 0 auto;
`;

export const StyledModalText = styled.p`
    font-size: 1.25rem;
    text-align: center;
    padding: 1em 3em 3em;
    color:#135846;
`;

export const StyledModalIcon = styled(IoMdClose)`
    color: #d53126;
    width: 1.5em;
    height: 1.5em;
    margin-left: 90%;
    margin-top: 1em;
`;