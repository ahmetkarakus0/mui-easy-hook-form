import { Box, Button } from "@mui/material";
import { AllFormSchema } from "../../validations/all";
import { UseFormReturn } from "react-hook-form";
import {
  CITIES,
  GENDERS,
  MARIAL_STATUSES,
  SATISFACTION_MARKS,
} from "../../constants";
import {
  Form,
  FormAutocomplete,
  FormCheckbox,
  FormDatePicker,
  FormRadioGroup,
  FormSelect,
  FormSlider,
  FormSwitch,
  FormTextField,
} from "../ui";

type Props = {
  form: UseFormReturn<AllFormSchema>;
  onSubmit: (data: AllFormSchema) => void;
};

const EasyForm = ({ form, onSubmit }: Props) => {
  const satisfactionText = (value: number) =>
    SATISFACTION_MARKS.find((mark) => mark.value === value)?.label || "";

  return (
    <Form {...form}>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormTextField form={form} name="firstName" label="First Name" />
        <FormSelect
          form={form}
          name="gender"
          label="Gender"
          options={GENDERS}
          valueKey="value"
          labelKey="label"
        />
        <FormRadioGroup
          form={form}
          name="maritalStatus"
          label="Marital Status"
          options={MARIAL_STATUSES}
          valueKey="value"
          labelKey="label"
        />

        <FormCheckbox
          form={form}
          name="newsletterSubscription"
          label="Subscribe to Newsletter"
        />

        <FormSwitch
          form={form}
          name="notifications"
          label="Open Notifications"
        />

        <FormSlider
          form={form}
          name="satisfactionLevel"
          label="Satisfaction Level"
          step={1}
          valueLabelDisplay="on"
          marks={SATISFACTION_MARKS}
          getAriaValueText={satisfactionText}
          max={3}
          min={1}
        />

        <FormAutocomplete
          form={form}
          name="cityId"
          options={CITIES}
          valueKey="value"
          labelKey="label"
          label="Cities"
        />

        <FormAutocomplete
          form={form}
          name="cityIds"
          options={CITIES}
          valueKey="value"
          labelKey="label"
          multiple
          label="Cities Multiple"
        />

        <FormDatePicker form={form} name="birthDate" label="Birth Date" />
        <FormDatePicker
          form={form}
          name="eventStartTime"
          label="Event Start Time"
          hasTime
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ py: 1.5, borderRadius: 2, fontWeight: "bold" }}
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </Form>
  );
};

export default EasyForm;
