import { forwardRef } from "react";
import { TextField } from "@material-ui/core";

// Add props that we are expecitng:
interface inputType {
    name: string,
    placeholder: string
}

export const Input = forwardRef((props:inputType,ref) => {
    return (
        <TextField
            variant='outlined'
            margin='normal'
            inputRef={ref}
            type='text'
            fullWidth
            {...props}
            >
        </TextField>
    )
})