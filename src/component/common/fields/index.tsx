import { makeField } from "./tools";
import { TextField, TextFieldProps } from "@mui/material";


export const TextInput = makeField<TextFieldProps>(TextField);