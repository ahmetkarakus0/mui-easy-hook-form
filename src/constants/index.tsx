import { EGender, EMaritalStatus } from "../enums";
import { TGender, TMaritalStatus, TSatisfactionMark } from "../types";

export const GENDERS: TGender[] = [
  {
    value: EGender.FEMALE,
    label: "Female",
  },
  {
    value: EGender.MALE,
    label: "Male",
  },
];

export const MARIAL_STATUSES: TMaritalStatus[] = [
  {
    value: EMaritalStatus.SINGLE,
    label: "Single",
  },
  {
    value: EMaritalStatus.MARRIED,
    label: "Married",
  },
];

export const SATISFACTION_MARKS: TSatisfactionMark[] = [
  {
    value: 1,
    label: "Not Satisfied",
  },
  {
    value: 2,
    label: "Neutral",
  },
  {
    value: 3,
    label: "Satisfied",
  },
];

export const CITIES = [
  { value: 1, label: "London" },
  { value: 2, label: "Birmingham" },
  { value: 3, label: "Manchester" },
  { value: 4, label: "Leeds" },
  { value: 5, label: "Liverpool" },
  { value: 6, label: "Sheffield" },
  { value: 7, label: "Bristol" },
  { value: 8, label: "Newcastle" },
  { value: 9, label: "Sunderland" },
  { value: 10, label: "Nottingham" },
  { value: 11, label: "Leicester" },
  { value: 12, label: "Portsmouth" },
  { value: 13, label: "Southampton" },
  { value: 14, label: "Oxford" },
  { value: 15, label: "Cambridge" },
  { value: 16, label: "Brighton" },
  { value: 17, label: "Coventry" },
  { value: 18, label: "Hull" },
  { value: 19, label: "Plymouth" },
  { value: 20, label: "Derby" },
];
