import Footer from './components/footer';
import Header from './components/header';
import FileList from './components/fileList';
import { Container } from '@material-ui/core';

function App() {
	return (
		<div className='App'>
			<Container maxWidth='lg'>
				<Header />
				<FileList />
				<Footer />
			</Container>
		</div>
	);
}

export default App;
