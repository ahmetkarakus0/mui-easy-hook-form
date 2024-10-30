import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { FormField } from "./form";

type Props<T extends FieldValues, U> = SelectProps & {
  form: UseFormReturn<T>;
  name: Path<T>;
  options: U[];
  valueKey: keyof U;
  labelKey: keyof U;
};

const FormSelect = <T extends FieldValues, U>(props: Props<T, U>) => {
  const { form, name, options, valueKey, labelKey, ...selectProps } = props;

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormControl fullWidth>
          <InputLabel>{selectProps.label}</InputLabel>
          <Select label={selectProps.label} {...selectProps} {...field}>
            {options.map((option) => (
              <MenuItem
                key={String(option[valueKey])}
                value={String(option[valueKey])}
              >
                {String(option[labelKey])}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};

export default FormSelect;
