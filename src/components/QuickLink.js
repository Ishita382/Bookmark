import React from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import { Button, Input } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";
import image from "../assets/quickLink.png";
import { appReducers } from "../Redux/selector";
import { useBookmarkHooks } from "../Redux/hooks/bookmarkHooks";

const CustomBox = styled(Box)`
  flex: 1;
  height: 100%;
  width: 100%;
`;
const CustomLinkBox = styled(Box)`
  background-color: #5352ed;
  flex: none;
  height: 200px;
  margin-top: 20px;
  padding: 20px;
  border-radius: 20px;
  padding-left: 35px;
`;
const LinkHeading = styled(Box)`
  font-family: Arial;
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 31px;
  display: flex;
  align-items: center;
  text-align: center;
  position: absolute;
  color: #ffffff;
`;
const URLInput = styled(Input)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 10px;
  position: absolute;
  width: 450px;
  height: 40px;
  color: #fcfcfc;
  flex: none;
  order: 0;
  flex-grow: 0;
  font-size: 12px;
  top: 110px;
  background: #6c6bf9;
  border-radius: 16px;
`;

const URLHeading = styled(Box)`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  position: absolute;
  color: #fcfcfc;
  margin-top: 40px;
  font-family: Arial;
`;

const FolderHeading = styled(Box)`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  position: absolute;
  color: #fcfcfc;
  margin-top: 120px;
  font-family: Arial;
`;

const RootFolder = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 10px;
  position: absolute;
  width: 170px;
  height: 25px;
  color: #fcfcfc;
  flex: none;
  order: 0;
  flex-grow: 0;
  font-size: 16px;
  top: 190px;
  background: #6c6bf9;
  border-radius: 16px;
  font-family: Arial;
`;
const CustomButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 10px;
  position: absolute;
  width: 100px;
  height: 40px;
  top: 190px;
  left: 630px;
  background: #ffffff;
  border-radius: 16px;
  font-size: 13px;
  font-weight: 400;
  :hover {
    color: #fcfcfc;
  }
`;

const Img = styled.img`
  width: 300px;
  height: 280px;
  border-radius: 15px;
  margin: -60px 20px 0px 700px;
`;

function Quicklink() {
  const { bookmarkFolder, folders } = useSelector(appReducers);
  const [link, setLink] = useState();
  const { createBookmark } = useBookmarkHooks();
  //const imgUrl = card;
  //<Img src={imgUrl} />
  const setBookmarkLink = (e) => {
    return setLink(e.target.value);
  };

  return (
    <CustomBox>
      <CustomLinkBox>
        <LinkHeading>Add Quick Link</LinkHeading>
        <URLHeading>URL</URLHeading>
        <URLInput
          type="text"
          placeholder="Paste URL here"
          disableUnderline
          onChange={setBookmarkLink}
        ></URLInput>
        <FolderHeading>Folder</FolderHeading>
        <RootFolder>
          {bookmarkFolder === "" ? "Root" : folders[bookmarkFolder].name}
        </RootFolder>
        <CustomButton
          onClick={() => createBookmark(link, bookmarkFolder)}
        >
          Save
        </CustomButton>
        <Img src={image} alt="AddLink" />
      </CustomLinkBox>
      
    </CustomBox>
  );
}

export default Quicklink;
