import styled from "styled-components"

const Box = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  background-color: #bada55;
`

export default function Index() {
  return (
    <Box>
      <h1>Welcome to Remix (With Styled Component)</h1>
    </Box>
  )
}
