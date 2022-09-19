import { Box, Button, Input } from "@mui/material";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { appReducers } from "../Redux/selector";
import image from "../assets/card.png";
import BookIcon from "@mui/icons-material/Book";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import { useBookmarkHooks } from "../Redux/hooks/bookmarkHooks";

const CustomBox = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const BookmarkBox = styled(Box)`
  margin-bottom: 400px;
  display: flex;
  flex-wrap: wrap;
  margin-left: 50px;
`;

const Card = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  gap: 25px;
  margin-right: 40px;
  margin-top: 30px;
  width: 200px;
  height: 155px;
  background: #ffffff;
  box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12),
    0px 8px 24px -4px rgba(24, 39, 75, 0.08);
  border-radius: 20px;
  font-family: Arial;
`;

const LoadingBox = styled(Box)`
  font-size: 20px;
  color: #5352ed;
  font-family: Arial;
  margin-top: 135px;
  margin-left: 500px;
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

const AddLinkButton = styled(Button)`
  margin-left: 1070px;
  margin-top: 20px;
  border: 2px solid #5352ed;
  border-radius: 10px;
  padding-right: 28px;
  padding-left: 17px;
  color: #5352ed;
  display: flex;
`;
const Img = styled.img`
  width: 170px;
  height: 80px;
  border-radius: 15px;
  margin: 20px 20px 0px 20px;
  margin-bottom: -25px;
  margin-left: -4px;
  padding-bottom: 10px;
`;

const Text = styled(Box)`
  text-align: center;
  color: black;
  font-size: 15px;
  margin-left: -60px;
  font-weight: bold;
`;
const SecondText = styled(Box)`
  margin-top: 5px;
  text-align: center;
  color: #77757f;
  font-size: 12px;
  margin-left: -60px;
`;
const LoadingBookmarkBox = styled(Box)`
  font-size: 20px;
  color: gray;
  font-family: Arial;
  margin-top: 170px;
  margin-left: 420px;
`;
const CustomInput = styled(Input)`
  margin-top: 0px;
  margin-left: 26px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 93px 8px 16px;
  gap: 8px;
  width: 240px;
  height: 35px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  order: 1;
  flex-grow: 0;
`;
const SaveButton = styled(Button)`
  margin-left: 95px;
  margin-top: 38px;
  color: white;
  background: #5352ed;
  border-radius: 11px;
  padding: 8px 25px 8px 25px;
  font-size: 12px;
  font-weight: 600;
`;
const CloseButton = styled(Button)`
  margin-top: -250px;
  margin-left: 235px;
  color: black;
`;
const ModalBox = styled(Box)`
  align-items: center;
  margin-left: 600px;
  margin-top: 260px;
  height: 280px;
  width: 300px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12),
    0px 8px 24px -4px rgba(24, 39, 75, 0.08);
`;

const Select = styled(Box)`
  color: #5352ed;
  font-size: 30px;
  padding-top: 115px;
  margin-left: 62px;
  font-family: Arial;
`;
const FolderName = styled(Box)`
  color: black;
  font-size: 18px;
  margin-left: 6px;
  margin-top: 0px;
  padding: 30px 0px 0px 20px;
  font-family: Arial;
  font-weight: bold;
`;

const URL = styled(Box)`
  color: gray;
  font-family: Arial;
  font-weight: bold;
  padding-top: 30px;
  margin-top: 10px;
  margin-left: 26px;
  font-size: 13px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
`;

const CloseFolderButton = styled(Button)`
  margin-top: -370px;
  margin-left: 240px;
  color: black;
`;
function Bookmark() {
  const initial = useSelector(appReducers);
  const { bookmarks, folders, bookmarkLoading, bookmarkFolder } = initial;
  const { createBookmark } = useBookmarkHooks();
  const imgUrl = image;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [url, setUrl] = useState();

  const addUrl = (e) => {
    return setUrl(e.target.value);
  };

  return (
    <CustomBox>
      <AddLinkButton onClick={() => handleOpen()}>+ Add Link</AddLinkButton>

      <Modal open={open}>
        <ModalBox>
          {bookmarkFolder === "" ? (
            <>
              <Select>Select Folder</Select>
              <CloseButton onClick={() => handleClose()}>
                <Close />
              </CloseButton>
            </>
          ) : (
            <>
              <FolderName>{folders[bookmarkFolder].name}</FolderName>

              <URL>URL</URL>
              <CustomInput
                onChange={addUrl}
                placeholder="Enter URL"
                disableUnderline
              ></CustomInput>

              <SaveButton
                onClick={() => {
                  createBookmark(url, bookmarkFolder);
                  handleClose();
                }}
              >
                Submit
              </SaveButton>
              <CloseFolderButton onClick={() => handleClose()}>
                <Close />
              </CloseFolderButton>
            </>
          )}
        </ModalBox>
      </Modal>

      <BookmarkBox>
        {bookmarkFolder === "" ? (
          <LoadingBox>
            <BookIcon />
            <Text>No Bookmarks Found</Text>
            <SecondText>
              Keep content organised <br />
              with folders and subfolders
            </SecondText>
          </LoadingBox>
        ) : bookmarkLoading === true ? (
          <LoadingBookmarkBox>...Loading Bookmarks</LoadingBookmarkBox>
        ) : !bookmarkFolder.isEmpty && bookmarkLoading === false ? (
          folders[bookmarkFolder].bIds.map((item) => (
            <Card key={item}>
              <Img src={imgUrl} alt="title" />
              <Name>{bookmarks[item].name}</Name>
              <Description>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Description>
            </Card>
          ))
        ) : !bookmarkFolder.isEmpty &&
          bookmarkLoading === false &&
          folders[bookmarkFolder].bIds.length === 0 ? (
          <LoadingBox>No Bookmarks</LoadingBox>
        ) : (
          <></>
        )}
      </BookmarkBox>
    </CustomBox>
  );
}

export default Bookmark;
