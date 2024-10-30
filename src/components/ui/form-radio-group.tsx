import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
} from "@mui/material";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { FormField } from "./form";

type Props<T extends FieldValues, U> = RadioGroupProps & {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  options: U[];
  valueKey: keyof U;
  labelKey: keyof U;
};

const FormRadioGroup = <T extends FieldValues, U>(props: Props<T, U>) => {
  const { form, name, label, options, valueKey, labelKey, ...radioGroupProps } =
    props;

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormControl>
          <FormLabel sx={{ textAlign: "start" }}>{label}</FormLabel>
          <RadioGroup {...radioGroupProps} {...field}>
            {options.map((option) => (
              <FormControlLabel
                key={String(option[valueKey])}
                value={String(option[valueKey])}
                control={<Radio />}
                label={String(option[labelKey])}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    />
  );
};

export default FormRadioGroup;
