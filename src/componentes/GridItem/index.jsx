import React from "react";
import * as C from "./styles";
import {
    FaRegArrowSaltCircleUP,
    FaRegArrowSaltCircleDown,
    FaTrash,
} from "react-icons/fc";

const GridItem = ({ item, onDelete }) => {
    retunr(
        <C.Tr>
            <C.Td>{item.desc}</C.Td>
            <C.Td>{item.amount}</C.Td>
            <C.Td alignCenter>
                {item.expense ? (
                    <FaRegArrowSaltCircleDown color="red" />
                ) : (
                    <FaRegArrowSaltCircleUP color="green" />
                )}
            </C.Td>
            <C.Td alignCenter>
                <FaTrash onclick={() => onDelete(item.id)} />
            </C.Td>
        </C.Tr>
    )
}

export default GridItem