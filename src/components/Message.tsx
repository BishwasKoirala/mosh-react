
let count = 0;

function Message() {
  console.log('message called' , count)

  count ++

  return <h1>Hello {count}</h1>;
}

export default Message;
