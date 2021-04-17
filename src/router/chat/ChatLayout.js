import { useState } from "react";
import "../../css/router/chat/ChatLayout.css";
import ChatList from "../../module/ChatList";
import ChatRoom from "../../module/ChatRoom";

const chatRoomList = [
  {
    name: "Si0",
    profile_img:
      "https://images.unsplash.com/photo-1618308178796-f4dc0a03bab6?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    last_timestamp: "16:30",
    unread_message: 2,
    preview_message: "빈티지 컨셉 개인작업 팀원 구한다고..",
  },
  {
    name: "Si0",
    profile_img:
      "https://images.unsplash.com/photo-1618308178796-f4dc0a03bab6?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    last_timestamp: "16:30",
    unread_message: 0,
    preview_message: "헤어메이크업 모델 구인 보고 연락드..",
  },
  {
    name: "포이오이오",
    profile_img:
      "https://images.unsplash.com/photo-1618308178796-f4dc0a03bab6?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    last_timestamp: "16:30",
    unread_message: 58,
    preview_message: "헤어메이크업 모델 구인 보고 연락드..",
  },
  {
    name: "Si0",
    profile_img:
      "https://images.unsplash.com/photo-1618308178796-f4dc0a03bab6?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    last_timestamp: "16:30",
    unread_message: 2,
    preview_message: "빈티지 컨셉 개인작업 팀원 구한다고..",
  },
  {
    name: "Si0",
    profile_img:
      "https://images.unsplash.com/photo-1618308178796-f4dc0a03bab6?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    last_timestamp: "16:30",
    unread_message: 0,
    preview_message: "헤어메이크업 모델 구인 보고 연락드..",
  },
  {
    name: "포이오이오",
    profile_img:
      "https://images.unsplash.com/photo-1618308178796-f4dc0a03bab6?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    last_timestamp: "16:30",
    unread_message: 58,
    preview_message: "헤어메이크업 모델 구인 보고 연락드..",
  },
];

const chatRoom = {
  participant: {
    profile_img:
      "https://images.unsplash.com/photo-1618308178796-f4dc0a03bab6?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: "포이오이오",
  },
  chats: [
    {
      author: "포이오이오",
      profile_img:
        "https://images.unsplash.com/photo-1618308178796-f4dc0a03bab6?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      type: "text",
      content: "메세지",
    },
    {
      author: "포이오이오",
      profile_img:
        "https://images.unsplash.com/photo-1618308178796-f4dc0a03bab6?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      type: "image",
      content:
        "https://images.unsplash.com/photo-1618308178796-f4dc0a03bab6?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      author: "Si0",
      profile_img:
        "https://images.unsplash.com/photo-1618308178796-f4dc0a03bab6?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      type: "text",
      content:
        "설산에서 크고 같이, 용기가 것이다. 곳이 청춘이 가치를 끓는 평화스러운 인생에 없으면, 튼튼하며, 것은 교향악이다. 인생에 할지라도 옷을 이것을 피는 청춘이 우리의 있는 쓸쓸하랴? 튼튼하며, 커다란 청춘의 청춘 위하여서. 청춘의 구하지 하였으며, 가치를 눈이 얼음이 관현악이며, 있는가? 이상을 그들의 붙잡아 구하지 피다. 얼마나 그것은 지혜는 장식하는 철환하였는가? 타오르고 대한 역사를 우리 인간에 꽃이 칼이다. 군영과 것은 꽃 것이다.보라, 대중을 타오르고 사막이다. ",
    },
    {
      author: "포이오이오",
      profile_img:
        "https://images.unsplash.com/photo-1618308178796-f4dc0a03bab6?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      type: "text",
      content:
        "가진 사랑의 이상 설레는 공자는 이상, 사막이다. 곧 심장은 못할 것이다.",
    },
  ],
};

function ChatLayout() {
  const [chatList, setChatList] = useState(chatRoomList);
  const [currentChatRoom, setCurrentChatRoom] = useState(chatRoom);

  return (
    <div className="ChatLayout">
      <ChatList chatList={chatList} />
      <ChatRoom {...currentChatRoom} />
    </div>
  );
}

export default ChatLayout;
