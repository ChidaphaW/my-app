import { useMemo, useState } from "react";
import { useGetCount } from "../../../services/home/home-query";
import { Typography } from "@mui/material";



const HiddenText = () => {

    const { data: countState } = useGetCount();
    const [textShow] = useState<string>("Hello World")

     const textUI = useMemo( () => {
        return countState && countState > 5 ? (
            <Typography variant="body1" style={{textAlign: "center"}}>{textShow}</Typography>
        ) : (<></>)
     },[countState]

     )

    return textUI;

}

export default HiddenText;