import {
  Button,
  FormControl,
  HStack,
  Input,
  Slider,
  Stack,
  Switch,
  Text,
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

interface AddPointsProps {
  location: {
    latitude: number;
    longitude: number;
  };
}

const AddPoints = ({ location }: AddPointsProps) => {
  const [amount, setAmount] = React.useState<string>("1");
  const [name, setName] = React.useState<string>("");
  const [report, setReport] = React.useState<boolean>(false);
  const [severity, setSeverity] = React.useState<"LOW" | "MEDIUM" | "HIGH">(
    "LOW"
  );

  const reportTrash = useReportTrash();
  const handleReportTrash = async () => {
    await reportTrash.mutateAsync({
      amount: Number(amount),
      name,
      location,
      report,
      severity,
    });
  };

  const handleNameInput = (text: string) => setName(text);
  const handleNumberInput = (text: string) => setName(text);
  const handleSlide = (value: number) => {
    setSeverity(value === 1 ? "LOW" : value === 2 ? "MEDIUM" : "HIGH");
  };

  return (
    <>
      <Text>Add Points</Text>
      <Button onPress={handleReportTrash}>Report Trash</Button>
      <Stack w={"100%"} alignContent={"center"} justifyContent={"center"}>
        <Input placeholder="Name" value={name} onChangeText={handleNameInput} />
        <HStack justifyContent={"space-between"}>
          <Input
            w={"8%"}
            placeholder="Amount"
            value={amount}
            onChangeText={handleNumberInput}
            keyboardType="numeric"
          />
        </HStack>
        <Stack
          w={"100%"}
          px={4}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Slider
            size={"sm"}
            defaultValue={1}
            minValue={1}
            maxValue={3}
            onChange={handleSlide}
          >
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
          </Slider>
        </Stack>
        <Switch
          size="sm"
          value={report}
          onChange={() => {
            setReport((prevReport) => {
              return !prevReport;
            });
          }}
        />
      </Stack>
    </>
  );
};

export default AddPoints;
