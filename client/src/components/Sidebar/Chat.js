import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import { BadgeAvatar, ChatContent } from "../Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import { setActiveChat } from "../../store/activeConversation";
import { updateConversation } from "../../store/utils/thunkCreators";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 8,
    height: 80,
    boxShadow: "0 2px 10px 0 rgba(88,133,196,0.05)",
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "grab"
    }
  }
}));

const Chat = (props) => {
  const classes = useStyles();
  const { conversation, activeConversation } = props;
  const { otherUser } = conversation;

  const handleClick = async (conversation) => {
    await props.setActiveChat(conversation.otherUser.username);
    props.updateConversation(conversation.id);
  };

  useEffect(() => {
    if(otherUser.username ===  activeConversation && conversation.unreadCount > 0){
      props.updateConversation(conversation.id);
    }
  }, [conversation.unreadCount])

  return (
    <Box onClick={() => handleClick(conversation)} className={classes.root}>
      <BadgeAvatar
        photoUrl={otherUser.photoUrl}
        username={otherUser.username}
        online={otherUser.online}
        sidebar={true}
      />
      <ChatContent conversation={conversation} isUnread={conversation.unreadCount === 0? false : true} isActiveChat={otherUser ===  activeConversation}/>

    </Box>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveChat: (id) => {
      dispatch(setActiveChat(id));
    },
    updateConversation: (id) => {
      dispatch(updateConversation(id));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    activeConversation: state.activeConversation
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
