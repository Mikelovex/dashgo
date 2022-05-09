import { Avatar, Box, Flex, Text } from "@chakra-ui/react";


interface ProfileProps {
    showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
    return (
        <Flex
            align="center"
        >
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Michael Gonçalves</Text>
                    <Text color="gray.300" fontSize="small">maicon.rafael17@gmail.com</Text>
                </Box>
            )}
            <Avatar size="md" name="Michael Gonçalves" src="https://github.com/mikelovex.png" />
        </Flex>
    )
}