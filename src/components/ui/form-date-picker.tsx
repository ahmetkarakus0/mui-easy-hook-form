import { DatePicker, DateTimePicker } from "@mui/x-date-pickers";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { FormField } from "./form";

type Props<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  hasTime?: boolean;
};

const FormDatePicker = <T extends FieldValues>(props: Props<T>) => {
  const { form, name, label, hasTime } = props;

  const Component = hasTime ? DateTimePicker : DatePicker;

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <Component
          sx={{ width: "100%" }}
          label={label}
          value={field.value}
          onChange={(date) => field.onChange(date)}
          ref={field.ref}
        />
      )}
    />
  );
};

export default FormDatePicker;
