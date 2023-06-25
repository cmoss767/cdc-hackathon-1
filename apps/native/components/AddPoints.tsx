import {
  Button,
  Divider,
  HStack,
  Heading,
  Input,
  Slider,
  Stack,
  Switch,
  Text,
} from "native-base"
import React from "react"
import useReportTrash from "../hooks/useReportTrash"
interface TrashData {
  amount?: number
  name?: string
  location?: object
  report?: boolean
  severity?: "LOW" | "MEDIUM" | "HIGH"
}

interface AddPointsProps {
  location: {
    latitude: number
    longitude: number
  }
}

const AddPoints = ({ location }: AddPointsProps) => {
  const [amount, setAmount] = React.useState<string>("1")
  const [name, setName] = React.useState<string>("")
  const [report, setReport] = React.useState<boolean>(false)
  const [severity, setSeverity] = React.useState<"LOW" | "MEDIUM" | "HIGH">(
    "MEDIUM"
  )

  const reportTrash = useReportTrash()
  const handleReportTrash = async () => {
    await reportTrash.mutateAsync({
      amount: Number(amount),
      name,
      location,
      report,
      severity,
    })
  }

  const handleNameInput = (text: string) => setName(text)
  const handleNumberInput = (text: string) => setAmount(text)
  const handleSlide = (value: number) => {
    setSeverity(value === 1 ? "LOW" : value === 2 ? "MEDIUM" : "HIGH")
  }

  return (
    <Stack
      maxWidth={"100%"}
      minHeight={"100%"}
      px={2}
      pt={1}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      space={2}
    >
      <Heading size={"md"} color={"primary.600"}>
        Report Trash or Pickup
      </Heading>
      <Divider />
      <HStack alignItems={"center"} justifyContent={"center"} px={5} space={2}>
        <Text>Name</Text>
        <Input
          w={"80%"}
          placeholder="Your Name Or Organization"
          value={name}
          onChangeText={handleNameInput}
        />
      </HStack>
      <Divider />

      <HStack
        alignItems={"center"}
        justifyContent={"space-between"}
        px={4}
        space={2}
      >
        <HStack space={2} alignItems={"center"} pr={8}>
          <Text>Amount</Text>
          <Input
            w={"90px"}
            textAlign={"left"}
            placeholder="Amount"
            value={amount}
            onChangeText={handleNumberInput}
            keyboardType="numeric"
          />
        </HStack>
        <HStack space={0} alignItems={"center"} justifyContent={"center"}>
          <Button
            size={"xs"}
            px={0}
            py={1}
            variant={"ghost"}
            onPress={() => {
              setReport(false)
            }}
          >
            Report
          </Button>
          <Switch
            size="sm"
            value={report}
            onChange={() => {
              setReport((prevReport) => {
                return prevReport ? false : true
              })
            }}
          />
          <Button
            size={"xs"}
            variant={"ghost"}
            px={0}
            py={1}
            onPress={() => {
              setReport(true)
            }}
          >
            Pickup
          </Button>
        </HStack>
      </HStack>
      <Divider />

      <Stack w={"100%"} px={8} alignItems={"center"}>
        <Text>Severity</Text>
        <Slider
          size={"sm"}
          defaultValue={2}
          value={severity === "LOW" ? 1 : severity === "MEDIUM" ? 2 : 3}
          minValue={1}
          maxValue={3}
          onChange={handleSlide}
        >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
        <HStack justifyContent={"space-between"} w={"100%"}>
          <Text
            onPress={() => {
              setSeverity("LOW")
            }}
          >
            Low 😔
          </Text>
          <Text
            onPress={() => {
              setSeverity("MEDIUM")
            }}
          >
            Medium 😷
          </Text>
          <Text
            onPress={() => {
              setSeverity("HIGH")
            }}
          >
            High 🤢
          </Text>
        </HStack>
      </Stack>
      <Divider />

      <Button variant={"outline"} onPress={handleReportTrash} mb={2}>
        {!report ? "Report Trash 🗑️" : "Add Points! 📈"}
      </Button>
    </Stack>
  )
}

export default AddPoints
