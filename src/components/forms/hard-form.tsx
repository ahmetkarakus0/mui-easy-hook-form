import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Slider,
  Switch,
  TextField,
} from "@mui/material";
import { DatePicker, DateTimePicker } from "@mui/x-date-pickers";
import { Controller, UseFormReturn } from "react-hook-form";
import {
  CITIES,
  GENDERS,
  MARIAL_STATUSES,
  SATISFACTION_MARKS,
} from "../../constants";
import { AllFormSchema } from "../../validations/all";
import { Form } from "../ui/form";

type Props = {
  form: UseFormReturn<AllFormSchema>;
  onSubmit: (data: AllFormSchema) => void;
};

const HardForm = ({ form, onSubmit }: Props) => {
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
        <Controller
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <TextField
              variant="outlined"
              fullWidth
              label="First Name"
              error={!!form.formState.errors.firstName}
              {...field}
            />
          )}
        />

        <Controller
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select label="Gender" {...field}>
                {GENDERS.map((gender) => (
                  <MenuItem key={gender.value} value={gender.value}>
                    {gender.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        />

        <Controller
          control={form.control}
          name="maritalStatus"
          render={({ field }) => (
            <FormControl>
              <FormLabel sx={{ textAlign: "start" }}>Marital Status</FormLabel>
              <RadioGroup {...field}>
                {MARIAL_STATUSES.map((status) => (
                  <FormControlLabel
                    key={status.value}
                    value={status.value}
                    control={<Radio />}
                    label={status.label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          )}
        />

        <Controller
          control={form.control}
          name="newsletterSubscription"
          render={({ field }) => (
            <FormControlLabel
              control={
                <Checkbox checked={field.value} onChange={field.onChange} />
              }
              label="Subscribe to Newsletter"
            />
          )}
        />

        <Controller
          control={form.control}
          name="notifications"
          render={({ field }) => (
            <FormControlLabel
              control={
                <Switch checked={field.value} onChange={field.onChange} />
              }
              label="Open Notifications"
            />
          )}
        />

        <Controller
          control={form.control}
          name="satisfactionLevel"
          render={({ field }) => (
            <FormControlLabel
              control={
                <Slider
                  step={1}
                  valueLabelDisplay="on"
                  marks={SATISFACTION_MARKS}
                  getAriaValueText={satisfactionText}
                  max={3}
                  min={1}
                  {...field}
                />
              }
              labelPlacement="top"
              label="Satisfaction Level"
            />
          )}
        />

        <Controller
          control={form.control}
          name="cityId"
          render={({ field }) => (
            <Autocomplete
              disablePortal
              options={CITIES}
              getOptionLabel={(option) => option.label}
              isOptionEqualToValue={(option, value) =>
                option.value === value.value
              }
              fullWidth
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Cities"
                  error={!!form.formState.errors.cityId}
                />
              )}
              value={
                CITIES.find((option) => option.value === field.value) || null
              }
              onChange={(_, value) => {
                field.onChange(value ? value.value : null);
              }}
              onBlur={field.onBlur}
            />
          )}
        />

        <Controller
          control={form.control}
          name="cityIds"
          render={({ field }) => (
            <Autocomplete
              multiple
              disablePortal
              options={CITIES}
              getOptionLabel={(option) => option.label}
              isOptionEqualToValue={(option, value) =>
                option.value === value.value
              }
              fullWidth
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Cities Multiple"
                  error={!!form.formState.errors.cityId}
                />
              )}
              value={CITIES.filter((option) =>
                field.value?.includes(option.value)
              )}
              onChange={(_, value) => {
                field.onChange(
                  Array.isArray(value) ? value.map((item) => item.value) : []
                );
              }}
              onBlur={field.onBlur}
            />
          )}
        />

        <Controller
          control={form.control}
          name="birthDate"
          render={({ field }) => (
            <DatePicker
              sx={{ width: "100%" }}
              label="Birth Date"
              value={field.value}
              onChange={(date) => field.onChange(date)}
              ref={field.ref}
            />
          )}
        />

        <Controller
          control={form.control}
          name="eventStartTime"
          render={({ field }) => (
            <DateTimePicker
              sx={{ width: "100%" }}
              label="Event Start Time"
              value={field.value}
              onChange={(date) => field.onChange(date)}
              ref={field.ref}
            />
          )}
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

export default HardForm;
