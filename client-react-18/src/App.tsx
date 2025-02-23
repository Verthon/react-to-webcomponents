import './App.css';

const App = () => {
  return (
    <div className="content">
      <h1>Client React</h1>
      {/* @ts-expect-error */}
      <react-app></react-app>
    </div>
  );
};

export default App;
