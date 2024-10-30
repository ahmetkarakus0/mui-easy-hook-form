import { FormControlLabel, Slider, SliderProps } from "@mui/material";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { FormField } from "./form";

type Props<T extends FieldValues> = SliderProps & {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
};

const FormSlider = <T extends FieldValues>(props: Props<T>) => {
  const { form, name, label, ...sliderProps } = props;

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormControlLabel
          control={<Slider {...sliderProps} {...field} />}
          labelPlacement="top"
          label={label}
        />
      )}
    />
  );
};

export default FormSlider;
