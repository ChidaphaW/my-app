import { useCallback, useEffect, useMemo, useState } from "react";

import { Container } from "./style";

import { Typography } from "@mui/material";
import { useGetCount, useUpdateCount } from "../../services/home/home-query";
import Button from "../../component/common/Button";
import HiddenText from "./component";
import { useRouter } from "../../utils/helper";

const Counter = () => {
  const { data: countState } = useGetCount();
  const { mutate: updateCount } = useUpdateCount();
  const [count, setCount] = useState<number>(0);

  const { navigate } = useRouter();

  useEffect(() => {
    setCount(countState || 0);
  }, [countState]);

  const countUI = useMemo(() => {
    // const isEvent = count % 2 === 0;
    return (
      <Typography variant="h2" color={"black"} style={{textAlign: "center", fontWeight: 'bold'}}>
        {/* Count: {count} is {isEvent ? "Event" : "Odd"} */}
        {count} 
      </Typography>
    );
  }, [count]);

  const onClickButtonIncreaseCounter = useCallback(() => {
    setCount((prevCount) => {
      const newValue = prevCount + 1;
      updateCount(newValue);
      return newValue;
    });
  }, [setCount, updateCount]);

  const onClickButtonDecreaseCounter = useCallback(() => {
    setCount((prevCount) => {
      const newValue = prevCount - 1;
      updateCount(newValue);
      return newValue;
    });
  }, [setCount, updateCount]);

  const onClickButtonSetCounter = useCallback(() => {
    setCount((prevCount) => {
      const newValue = prevCount - prevCount;
      updateCount(newValue);
      return newValue;
    });
  }, [setCount, updateCount]);

  const onClickButtonGoTo = useCallback(() => {
    navigate("/info");
    }, [navigate]);

  return (
    <Container>
      {countUI}
      <div style={{textAlign: "center"}}>
      <Button onClick={onClickButtonIncreaseCounter} variant={"contained"}>INCREASE COUNTER</Button>
      <Button onClick={onClickButtonDecreaseCounter} variant={"contained"} color={"error"}>DECREASE COUNTER</Button>
      <Button onClick={onClickButtonSetCounter} variant={"outlined"} color={"error"}>RESET COUNTER</Button>
      <HiddenText/>

      <br />
      <br />
      <Button onClick={onClickButtonGoTo} variant={"contained"}  color={"success"}>Goto Info</Button>

      </div>
    </Container>
  );
};

export default Counter;
