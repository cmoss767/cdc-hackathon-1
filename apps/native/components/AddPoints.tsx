import {
  Box,
  Button,
  HStack,
  Heading,
  ScrollView,
  Stack,
  Text,
  View,
} from "native-base";
import React from "react";
import useReportTrash from "../hooks/useReportTrash";
interface TrashData {
  amount?: number;
  name?: string;
  location?: object;
  report?: boolean;
  severity?: "LOW" | "MEDIUM" | "HIGH";
}

const AddPoints = () => {
  const data: TrashData = {
    amount: 1,
    location: {},
    name: "wizard",
    report: true,
    severity: "LOW",
  };

  // const mutation = useMutation({
  //   mutationFn: (newData) => {
  //     return ApiService.post("/report", {
  //       amount: 1,
  //       location: {},
  //       name: "wizard",
  //       report: true,
  //       severity: "LOW",
  //     });
  //   },
  // });

  const reportTrash = useReportTrash();
  const handleReportTrash = async () => {
    await reportTrash.mutateAsync(data);
  };

  return (
    <>
      <Text>Add Points</Text>
      <Button onPress={handleReportTrash}>Report Trash</Button>
    </>
  );
};

export default AddPoints;
