const App = ({ appClass = '', children = null }) => {
  return <div className={`app ${appClass}`}>{children}</div>;
};

export default App;
