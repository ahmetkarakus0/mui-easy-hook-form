import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Paper, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { useForm } from "react-hook-form";
import {
  allFormInitialValues,
  allFormSchema,
  AllFormSchema,
} from "../validations/all";
import HardForm from "./forms/hard-form";

const LongWay = () => {
  const form = useForm<AllFormSchema>({
    resolver: zodResolver(allFormSchema),
    defaultValues: allFormInitialValues,
  });

  const onSubmit = (data: AllFormSchema) => {
    console.log(data);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        sx={{ bgcolor: "#f0f4f8", padding: 2 }}
      >
        <Typography variant="h4" mb={1} color="primary" fontWeight="bold">
          Form Components
        </Typography>
        <Typography variant="body1" mb={3} color="textSecondary">
          Oh no, my fingers are broken
        </Typography>
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            borderRadius: 3,
            maxWidth: 400,
            width: "100%",
            textAlign: "center",
            bgcolor: "#ffffff",
          }}
        >
          <HardForm form={form} onSubmit={onSubmit} />
        </Paper>
      </Box>
    </LocalizationProvider>
  );
};

export default LongWay;
