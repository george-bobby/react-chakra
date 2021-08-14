import { Alert, AlertIcon, Stack } from "@chakra-ui/react";
import * as React from "react";

class Selectbtn extends React.Component {
	render() {
		return (
			<div>
				<Stack spacing={3}>
					<Alert status='error'>
						<AlertIcon />
						There was an error processing your request
					</Alert>

					<Alert status='success'>
						<AlertIcon />
						Data uploaded to the server. Fire on!
					</Alert>

					<Alert status='warning'>
						<AlertIcon />
						Seems your account is about expire, upgrade now
					</Alert>

					<Alert status='info'>
						<AlertIcon />
						Chakra is going live on August 30th. Get ready!
					</Alert>
				</Stack>
				;
			</div>
		);
	}
}

export default Selectbtn;
