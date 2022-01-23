const App = ({ appClass, children }) => {
  return <div className={`app ${appClass || ""}`}>{children}</div>;
};

export default App;
