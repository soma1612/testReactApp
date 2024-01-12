import React, { useState } from 'react';
import MuiCard from '../controls/card';
import { useSelector } from 'react-redux';
import { TextField } from '@mui/material';

const Trash = () => {

    const deleteTask = useSelector((state) => state.deleteTask);
    const [inputValue, setInputValue] = useState('');

    const filteredData = inputValue
        ? deleteTask.filter(
            (item) => item.taskName.toLowerCase().includes(inputValue.toLowerCase())
        )
        : deleteTask;

    return (
        <>
            <TextField
                type="text"
                variant="standard"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search Tasks..."
                style={{ margin: "20px 0px 0px", width: "100%" }}
            />
            <hr style={{ margin: '25px 0px' }} />
            <div>
                {filteredData.length > 0 ? (
                    filteredData.map((data) => (
                        <MuiCard  page="trash" taskDetails={data} />
                    ))
                ) : (
                    null
                )}
            </div>
        </>
    )
}

export default Trash;