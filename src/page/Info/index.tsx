import { Typography } from "@mui/material"
import Button from "../../component/common/Button";
import { useRouter } from "../../utils/helper";
import { useCallback } from "react";

const Info = () => {
  const { navigate } = useRouter();

  const onClickButtonCallBack = useCallback(() => {
    navigate("/counter");
    }, [navigate]);

    return (
      <>
        <Typography variant="h2" style={{textAlign: "center"}}>
          Change Page
        </Typography>
        <br />
        <br />
        <Button onClick={onClickButtonCallBack} variant={"contained"}  color={"info"}>Goto Counter</Button>
        </>
      );
};


export default Info;