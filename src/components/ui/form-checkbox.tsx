import { Checkbox, FormControlLabel } from "@mui/material";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { FormField } from "./form";

type Props<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
};

const FormCheckbox = <T extends FieldValues>({
  form,
  name,
  label,
}: Props<T>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormControlLabel
          control={<Checkbox checked={field.value} onChange={field.onChange} />}
          label={label}
        />
      )}
    />
  );
};

export default FormCheckbox;
