function Application() {
  return (
    <div>
      <h1>Hello from React</h1>
      <p>I was rendered from the application component</p>
    </div>
  );
}//this is a component


ReactDOM.render(<Application />, document.getElementById('container'));
