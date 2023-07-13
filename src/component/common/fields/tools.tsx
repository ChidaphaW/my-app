// import { makeStyles } from "@mui/material";
import { ComponentType, useMemo } from "react";
import { FieldProps, FieldRenderProps } from "react-final-form";
import { Field as FieldFinalForm } from "react-final-form";
import { StyledTextError } from "./styled";

export const modifyComponent =
  (Component: ComponentType<any>) => (props: FieldRenderProps<any>) => {
    const {
      input,
      meta,
      style,
      className,
      onChange,
      name,
      // hideErrorLabel = false,
      ...restProps
    } = props;
    const { error, touched } = meta;

    const isError = useMemo(() => {
      return error && touched;
    }, [error, touched]);

    return (
      <div style={style}>
        <Component
          {...input}
          onChange={(v: any) => {
            input.onChange(v);
            if (onChange) {
              onChange(v);
            }
          }}
          isError={isError}
          meta={meta}
          {...restProps}
        />
        {isError && <StyledTextError variant="body1" color={"red"}>{error}</StyledTextError>}
      </div>
    );
  };

type CustomFieldProps = {
  hideErrorLabel?: boolean;
};

export const makeField = <T extends any>(component: ComponentType<any>) => {
  const newComponent = modifyComponent(component);
  const returnField = (
    props: FieldProps<string, FieldRenderProps<string>> & T & CustomFieldProps
  ) => <FieldFinalForm {...props} render={newComponent} />;
  return returnField;
};
