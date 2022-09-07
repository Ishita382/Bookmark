import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";

const CustomBox = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const BookmarkBox = styled(Box)`
  margin-bottom: 400px;
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  gap: 25px;
  margin-right: 66px;
  margin-top: 30px;
 
  width: 170px;
  height: 140px;
  background: #ffffff;
  box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12),
    0px 8px 24px -4px rgba(24, 39, 75, 0.08);
  border-radius: 20px;
  font-family: Arial;
`;

const LoadingBox = styled(Box)`
  font-size: 30px;
  color: gray;
  font-family: Arial;
  margin-top: 200px;
  margin-left: 370px;
  box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12),
    0px 8px 24px -4px rgba(24, 39, 75, 0.08);
`;

const Description = styled(Box)`
  font-size: 12px;
  background-color: #f5f5f5;
  justify-content: center;
  padding: 4px;
  border-radius: 6px;
`;

const Name = styled(Box)`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: -20px;
  color: #808080;
`;
function Bookmark() {
  const initial = useSelector((state) => state.loginDetails);
  const { bookmarks, folders, bookmarkFolder, bookmarkLoading } = initial;

  return (
    <CustomBox>
      <BookmarkBox>
        {bookmarkLoading === "initial" ? (
          <LoadingBox>No Bookmarks</LoadingBox>
        ) : bookmarkFolder !== "" && bookmarkLoading === "false" ? (
          folders[bookmarkFolder].bIds.map((item) => (
            <Card key={item}>
              <Name>{bookmarks[item].name}</Name>
              <Description>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Description>
            </Card>
          ))
        ) : (
          <LoadingBox>...Loading</LoadingBox>
        )}
      </BookmarkBox>
    </CustomBox>
  );
}

export default Bookmark;
