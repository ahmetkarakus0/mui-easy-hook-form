import { Autocomplete, TextField } from "@mui/material";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { FormField } from "./form";

type Props<T extends FieldValues, U> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  options: U[];
  valueKey: keyof U;
  labelKey: keyof U;
  label: string;
  multiple?: boolean;
};

const FormAutocomplete = <T extends FieldValues, U>(props: Props<T, U>) => {
  const {
    form,
    name,
    options,
    valueKey,
    labelKey,
    label,
    multiple = false,
  } = props;

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <Autocomplete
          multiple={multiple}
          disablePortal
          options={options}
          getOptionLabel={(option) => String(option[labelKey])}
          isOptionEqualToValue={(option, value) =>
            option[valueKey] === value[valueKey]
          }
          fullWidth
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              error={!!form.formState.errors[name]}
            />
          )}
          value={
            multiple
              ? options.filter((option) =>
                  field.value?.includes(option[valueKey])
                )
              : options.find((option) => option[valueKey] === field.value) ||
                null
          }
          onChange={(_, value) => {
            field.onChange(
              multiple
                ? Array.isArray(value)
                  ? value.map((item) => item[valueKey])
                  : []
                : value
                ? value[valueKey as keyof typeof value]
                : null
            );
          }}
          onBlur={field.onBlur}
        />
      )}
    />
  );
};

export default FormAutocomplete;
