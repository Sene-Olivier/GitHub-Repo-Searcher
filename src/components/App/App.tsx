import { Image } from 'semantic-ui-react';
import Message from '../Message/Message';
import ReposResults from '../ReposResults/ReposResults';
import logoGithub from '../../assets/images/logo-github.png';
import SearchBar from '../SearchBar/SearchBar';

import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <Image src={logoGithub} alt="logo github" centered size="small" />
      </header>
      <SearchBar />
      <Message message="La recherche a donné 115999 résultats" />
      <ReposResults />
    </div>
  );
}

export default App;
