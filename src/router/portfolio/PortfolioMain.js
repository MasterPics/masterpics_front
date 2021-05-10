import "../../css/router/portfolio/PortfolioMain.css";
import HoverDropdown from "../../module/HoverDropdown";
import SearchForm from "../../module/SearchForm";
import ClickDropdown from "../../module/ClickDropdown";
import ListItem from "../../module/ListItem";
import PlusButton from "../../module/PlusButton";
import React, { useState } from "react";
import useMasonry from "../../hooks/useMasonry";

const listItemData = [
  {
    userProfile: {
      id: 1,
      image: false,
      name: "Nagi",
      category: "otheruse",
    },
    itemContent: {
      id: 1,
      title: "Lorem Ipsum",
      sections: [
        {
          type: "image",
          content:
            "https://images.unsplash.com/photo-1617103901487-3f2714ec9692?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=886&q=80",
        },
        {
          type: "splitText",
          content: ["Pay: 50000원", "2021-03-31\n/2021-04-01"],
        },
      ],
    },
    foot_information: {
      bookmarkedCount: 0,
      bookmarked: false,
      viewCount: 5,
      liked: true,
      likeCount: 10,
    },
  },
  {
    userProfile: {
      id: 1,
      image: false,
      name: "Guckkasten",
      category: "otheruse",
    },
    itemContent: {
      id: 1,
      title: "Mandrake",
      sections: [
        {
          type: "image",
          content:
            "https://images.unsplash.com/photo-1605992052511-03d7c6cb9c23?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=450&q=80",
        },
        {
          type: "splitText",
          content: ["Pay: 20000원", "2021-03-31\n/2021-04-01"],
        },
      ],
    },
    foot_information: {
      bookmarkedCount: 0,
      bookmarked: false,
      liked: false,
      likeCount: 0,
      viewCount: 0,
    },
  },
  {
    userProfile: {
      id: 1,
      image: false,
      name: "Seo Taiji",
      category: "otheruse",
    },
    itemContent: {
      id: 1,
      title: "Haffy End",
      sections: [
        {
          type: "image",
          content:
            "https://images.unsplash.com/photo-1499087666200-e07e9c631266?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        },
        {
          type: "splitText",
          content: ["Pay: 20000원", "2021-03-31\n/2021-04-01"],
        },
      ],
    },
    foot_information: {
      bookmarkedCount: 2,
      bookmarked: false,
      liked: false,
      likeCount: 0,
      viewCount: 23,
    },
  },
  {
    userProfile: {
      id: 1,
      image: false,
      name: "My Chemical Romance",
      category: "otheruse",
    },
    itemContent: {
      id: 1,
      title: "Welcome to the Black Parade",
      sections: [
        {
          type: "image",
          content:
            "https://images.unsplash.com/photo-1499678450342-29ebee16d1ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        },
        {
          type: "splitText",
          content: ["Pay: 20000원", "2021-03-31\n/2021-04-01"],
        },
      ],
    },
    foot_information: {
      bookmarkedCount: 1,
      bookmarked: false,
      liked: false,
      likeCount: 10,
      viewCount: 100,
    },
  },
  {
    userProfile: {
      id: 1,
      image: false,
      name: "Green Day",
      category: "otheruse",
    },
    itemContent: {
      id: 1,
      title: "21 Guns",
      sections: [
        {
          type: "image",
          content:
            "https://images.unsplash.com/photo-1606322504161-7b7760c59421?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1549&q=80",
        },
        {
          type: "splitText",
          content: ["Pay: 20000원", "2021-03-31\n/2021-04-01"],
        },
      ],
    },
    foot_information: {
      bookmarkedCount: 0,
      bookmarked: false,
      liked: false,
      likeCount: 410,
      viewCount: 1020,
    },
  },
  {
    userProfile: {
      id: 1,
      image: false,
      name: "My Chemical Romance",
      category: "otheruse",
    },
    itemContent: {
      id: 1,
      title: "Helena",
      sections: [
        {
          type: "image",
          content:
            "https://images.unsplash.com/photo-1547997256-cdbe00ada4f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80",
        },
        {
          type: "splitText",
          content: ["Pay: 20000원", "2021-03-31\n/2021-04-01"],
        },
      ],
    },
    foot_information: {
      bookmarkedCount: 23,
      bookmarked: true,
      liked: false,
      likeCount: 1,
      viewCount: 1,
    },
  },
  {
    userProfile: {
      id: 1,
      image: false,
      name: "N.EX.T",
      category: "otheruse",
    },
    itemContent: {
      id: 1,
      title: "해에게서 소년에게",
      sections: [
        {
          type: "image",
          content:
            "https://images.unsplash.com/photo-1462952895297-8fd4123c3113?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        },
        {
          type: "splitText",
          content: ["Pay: 20000원", "2021-03-31\n/2021-04-01"],
        },
      ],
    },
    foot_information: {
      bookmarkedCount: 21,
      bookmarked: true,
      liked: false,
      likeCount: 10,
      viewCount: 100,
    },
  },
  {
    userProfile: {
      id: 1,
      image: false,
      name: "KoЯn",
      category: "otheruse",
    },
    itemContent: {
      id: 1,
      title: "Freak On a Leash",
      sections: [
        {
          type: "image",
          content:
            "https://images.unsplash.com/photo-1582178538120-06a684adaec5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=624&q=80",
        },
        {
          type: "splitText",
          content: ["Pay: 20000원", "2021-03-31\n/2021-04-01"],
        },
      ],
    },
    foot_information: {
      bookmarkedCount: 1,
      bookmarked: false,
      liked: false,
      likeCount: 10,
      viewCount: 100,
    },
  },
  {
    userProfile: {
      id: 1,
      image: false,
      name: "자우림",
      category: "otheruse",
    },
    itemContent: {
      id: 1,
      title: "있지",
      sections: [
        {
          type: "image",
          content:
            "https://images.unsplash.com/photo-1591035903277-22dbaf845677?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80",
        },
        {
          type: "splitText",
          content: ["Pay: 20000원", "2021-03-31\n/2021-04-01"],
        },
      ],
    },
    foot_information: {
      bookmarkedCount: 1,
      bookmarked: false,
      liked: false,
      likeCount: 10,
      viewCount: 100,
    },
  },
  {
    userProfile: {
      id: 1,
      image: false,
      name: "브로큰 발렌타인",
      category: "otheruse",
    },
    itemContent: {
      id: 1,
      title: "알루미늄",
      sections: [
        {
          type: "image",
          content:
            "https://images.unsplash.com/photo-1594255897691-9d1edad1ecfc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
        },
        {
          type: "splitText",
          content: ["Pay: 20000원", "2021-03-31\n/2021-04-01"],
        },
      ],
    },
    foot_information: {
      bookmarkedCount: 10,
      bookmarked: false,
      liked: false,
      likeCount: 10,
      viewCount: 100,
    },
  },
  {
    userProfile: {
      id: 1,
      image: false,
      name: "Queen",
      category: "otheruse",
    },
    itemContent: {
      id: 1,
      title: "Somebody to love",
      sections: [
        {
          type: "image",
          content:
            "https://images.unsplash.com/photo-1545828751-0a3b3a1da949?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
        },
        {
          type: "splitText",
          content: ["Pay: 20000원", "2021-03-31\n/2021-04-01"],
        },
      ],
    },
    foot_information: {
      bookmarkedCount: 2,
      bookmarked: true,
      liked: false,
      likeCount: 10,
      viewCount: 100,
    },
  },
];

function PortfolioMain() {
  const [listItems, setListItems] = useState(listItemData);
  const JSXListItemData = listItems.map((data, index) => {
    return (
      <div className="grid-item" key={index}>
        <ListItem {...data} />
      </div>
    );
  });
  const { refMasonry } = useMasonry(listItems, {
    fitWidth: true,
    columnWidth: 360,
    itemSelector: ".grid-item",
    initLayout: false,
  });

  const filter = (category) => {
    console.log(category);
  };

  return (
    <div className="PortfolioMain">
      <div className="bar">
        <div className="bar_left">
          <HoverDropdown
            name="Category"
            items={[
              {
                name: "Photographer",
                onClick: () => {
                  filter("photographer");
                },
              },
              {
                name: "Model",
                onClick: () => {
                  filter("model");
                },
              },
              {
                name: "Hair/Makeup",
                onClick: () => {
                  filter("HairMakeup");
                },
              },
              {
                name: "Stylist",
                onClick: () => {
                  filter("stylist");
                },
              },
              {
                name: "Other use",
                onClick: () => {
                  filter("otheruse");
                },
              },
            ]}
          />
        </div>
        <div className="bar_right">
          <SearchForm />
          <ClickDropdown />
          <PlusButton />
        </div>
      </div>

      {/* <!--contact_list--> */}
      <div className="" ref={refMasonry}>
        {JSXListItemData}
      </div>
      <button
        onClick={() => {
          setListItems(listItems.concat(listItemData));
        }}
      >
        setListItems
      </button>
      <div>
        {/* <!-- 버튼 누르면 상단으로 이동 -->
                <div onclick="topFunction()" id="myBtn" title="Go to top"><i className="fas fa-arrow-circle-up"></i></div>

                <!-- infinite scroll -->
                {% if contacts.has_next %}
                <a className="infinite-more-link" href="?page={{ contacts.next_page_number }}">
                <div className="loading" style="display: none;">Loading...</div>
                </a>
                {% endif %}
                </div>

                <!--category, sort, search, 상호무페이 filter form-->
                <div style="height: 0;">
                <form id="searchForm" method="get" action="{% url 'contact:contact_list' %}">
                <input type="hidden" id="category" name="category" value="{{ category }}">
                <input type="hidden" id="search" name="search" value="{{ search|default_if_none:'' }}">
                <input type="hidden" id="sort" name="sort" value="{{ sort }}">
                <input type="hidden" id="no_pay" name="no_pay" value="{{no_pay}}">
                </form>
              </div> */}
      </div>
    </div>
  );
}

export default PortfolioMain;
