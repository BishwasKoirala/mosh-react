function Message() {
  const name = ''

  if (name)
    return <h1>Hello {name}</h1>

  return <h1>Hello Nobody</h1>

}

export default Message