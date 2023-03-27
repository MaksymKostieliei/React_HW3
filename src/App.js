import { FormProvider } from './store/FormContext';
import CurrentFormPage from './components/CurrentFormPage ';
import './App.css';

function App() {
  return (
    <FormProvider>
      <div className="App">
        <form className="form">
          <CurrentFormPage />
        </form>
      </div>
    </FormProvider>
  );
}

export default App;
