import React from "react";
import { Box, Typography, Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    flexGrow: 1,
    marginRight: 20,
    alignItems: "center"
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: "#9CADC8",
    letterSpacing: -0.17,
  },
  previewText__bold: {
    fontSize: 12,
    letterSpacing: -0.17,
    fontWeight: 600,
  }
}));

const ChatContent = (props) => {
  const classes = useStyles();

  const { conversation, isActiveChat } = props;
  const { latestMessageText, otherUser } = conversation;

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography className={props.isUnread? classes.previewText__bold : classes.previewText}>
          {latestMessageText}
        </Typography>
      </Box>
      <Box>
      {!isActiveChat &&
        <Badge badgeContent={conversation.unreadCount} color="primary" />}
      </Box>
    </Box>
  );
};

export default ChatContent;
