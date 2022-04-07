
import React, { useEffect, useState } from "react";
import '../index.css'

import { FaEquals } from 'react-icons/fa';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { ButtonSortEvent } from "../interfaces";


type CardProps = {
    text: string,
    onSortChange: Function,
    sortBy: string,
    reset: boolean
}

export default function ButtonSort({text, sortBy,onSortChange, reset}:CardProps){

    const [isFirstSort, setFirstSort] = useState<boolean>(true);
    const [isASC, setASC] = useState<boolean>(true);

    useEffect(()=>{
        setFirstSort(true);
        setASC(true);
    }, [reset])

    function onClick():void{
        
        if(isFirstSort){
            const inter: ButtonSortEvent = {sortBy: sortBy, isASC: isASC};
            setFirstSort(false);
            onSortChange(inter);
            return;
        }
        setASC(!isASC);
        const inter: ButtonSortEvent = {sortBy: sortBy, isASC: !isASC};
        onSortChange(inter);
    }
    
    return (
        <button className="singleButton" onClick={onClick}>
            <div>
                {`${text} `} &nbsp; &nbsp;
            </div>
            <div>
                {isFirstSort ? <FaEquals/> : isASC ? <IoIosArrowUp/> : <IoIosArrowDown/>}
            </div>
        </button>
    );
}