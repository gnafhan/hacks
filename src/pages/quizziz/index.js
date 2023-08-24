import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  Input,
  useColorModeValue,
  Center,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Text,
} from "@chakra-ui/react";
// Assets
// Custom components
import AdminLayout from "layouts/admin";
import Card from "components/card/Card";
import { MdAddTask } from "react-icons/md";

export default function UserReports() {
  // Chakra Color Mode

  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  return (
    <>
      <AdminLayout>
        <Box pt={{ base: "130px", md: "80px", xl: "90px" }}>
          <Card minH={"75vh"}>
            {/* <Container maxW="container.md"> */}
            <Flex justifyContent="center" mb="10">
              <Center>
                <Input
                  placeholder="Enter Quizziz Code"
                  borderRadius="16px"
                  width={{ base: "", md: "md" }}
                  // mb={{ base: "10px", md: "0" }}
                />
                <Button ml={{ base: "5px", md: "10px" }}>Submit</Button>
              </Center>
            </Flex>
            <Flex flexWrap="wrap" flexDirection={"row"} justifyContent="start" >
            <Card width="25%">
              <Text>
                Makanan yang berasal dari bakwan pergi jauh tapi dari mana kamu berasala dan kamu adalah satu yang kamu inginkan tetapi anda inging tijsk aksnmkasns asdnjacin assncakcn
              </Text>

              <Text>
                Aaa
              </Text>

            </Card>
            <Card width="25%">
              <Text>
                Makanan yang berasal dari bakwan pergi jauh tapi dari mana kamu berasala dan kamu adalah satu yang kamu inginkan tetapi
              </Text>
              
              <Text>
                Aaa
              </Text>

            </Card>
            <Card width="25%">
              <Text>
                Makanan yang berasal dari bakwan pergi jauh tapi dari mana kamu berasala dan kamu adalah 
              </Text>
              
              <Text>
                Aaa
              </Text>

            </Card>
            <Card width="25%">
              <Text>
                Makanan yang berasal dari bakwan pergi jauh tapi dari mana kamu berasala dan kamu adalah satu yang kamu inginkan tetapi
              </Text>
              
              <Text>
                Aaa
              </Text>

            </Card>
            <Card width="25%">
              <Text>
                Makanan yang berasal dari bakwan pergi jauh tapi dari mana kamu berasala dan kamu adalah satu yang kamu inginkan tetapi
              </Text>
              
              <Text>
                Aaa
              </Text>

            </Card>
            <Card width="25%">
              <Text>
                Makanan yang berasal dari bakwan pergi jauh tapi dari mana kamu berasala dan kamu adalah satu yang kamu inginkan tetapi
              </Text>
              
              <Text>
                Aaa
              </Text>

            </Card>
            <Card width="25%">
              <Text>
                Makanan yang berasal dari bakwan pergi jauh tapi dari mana kamu berasala dan kamu adalah satu yang kamu inginkan tetapi
              </Text>
              
              <Text>
                Aaa
              </Text>

            </Card>
            <Card width="25%">
              <Text>
                Makanan yang berasal dari bakwan pergi jauh tapi dari mana kamu berasala dan kamu adalah satu yang kamu inginkan tetapi
              </Text>
              
              <Text>
                Aaa
              </Text>

            </Card>
            <Card width="25%">
              <Text>
                Makanan yang berasal dari bakwan pergi jauh tapi dari mana kamu berasala dan kamu adalah satu yang kamu inginkan tetapi
              </Text>
              
              <Text>
                Aaa
              </Text>

            </Card>
            <Card width="25%">
              <Text>
                Makanan yang berasal dari bakwan pergi jauh tapi dari mana kamu berasala dan kamu adalah satu yang kamu inginkan tetapi
              </Text>
              
              <Text>
                Aaa
              </Text>

            </Card>
            </Flex>
            
            {/* </Container> */}
          </Card>
        </Box>
      </AdminLayout>
    </>
  );
}
