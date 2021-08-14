import {
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
} from "@chakra-ui/react";
import * as React from "react";

class Selectbtn extends React.Component {
	render() {
		return (
			<div>
				<Alert
					status='success'
					variant='subtle'
					flexDirection='column'
					alignItems='center'
					justifyContent='center'
					textAlign='center'
					height='629px'>
					<AlertIcon boxSize='40px' mr={0} />
					<AlertTitle mt={4} mb={1} fontSize='lg'>
						Sucess!
					</AlertTitle>
					<AlertDescription maxWidth='sm'>
						This page has rendered sucessfully.
					</AlertDescription>
				</Alert>
				;
			</div>
		);
	}
}

export default Selectbtn;
