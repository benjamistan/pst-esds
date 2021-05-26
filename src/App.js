import Footer from './components/footer';
import Header from './components/header';
import FileList from './components/fileList';
import { Container } from '@material-ui/core';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import Amplify from 'aws-amplify';
import awsConfig from './aws-exports';

Amplify.configure(awsConfig);

function App() {
	return (
		<div className='App'>
			<Container maxWidth='lg'>
				<Header />
				<AmplifySignOut />
				<FileList />
				<Footer />
			</Container>
		</div>
	);
}

export default withAuthenticator(App);
