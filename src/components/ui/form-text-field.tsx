import { TextField, TextFieldProps } from "@mui/material";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { FormField } from "./form";

type Props<T extends FieldValues> = TextFieldProps & {
  form: UseFormReturn<T>;
  name: Path<T>;
};

const FormTextField = <T extends FieldValues>(props: Props<T>) => {
  const { form, name, ...textFieldProps } = props;

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <TextField
          variant="outlined"
          fullWidth
          error={!!form.formState.errors[name]}
          {...field}
          {...textFieldProps}
        />
      )}
    />
  );
};

export default FormTextField;
