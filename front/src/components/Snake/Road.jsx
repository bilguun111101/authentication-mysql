import { Box, styled } from "@mui/material"

const RoadOrWhat = styled(Box)(({ theme, food, snake }) => ({
  width: '20px',
  height: '20px',
  border: snake ? '0.4px solid #FF33F0' : '0.4px solid silver',
  backgroundColor: food ? "#FF3333" : snake ? "#FF33F0" : "#FFF",
}))

const Road = props => {
  const { snake, food } = props;
  return (
    <RoadOrWhat food={food} snake={snake} />
  )
}

export default Road