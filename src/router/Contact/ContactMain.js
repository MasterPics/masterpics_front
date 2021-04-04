import HoverDropdown from "../../module/HoverDropdown";
import SearchForm from "../../module/SearchForm";
import ClickDropdown from "../../module/ClickDropdown";
import LabelCheckbox from "../../module/LabelCheckbox";
import ListItem from "../../module/ListItem";
import useMasonry from "../../hooks/useMasonry";
import "./ContactMain.css";
import React, { useEffect, useState } from "react";
import Masonry from "masonry-layout";

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
      commentCount: 0,
      bookmarkedCount: 0,
      bookmarked: false,
    },
  },
  {
    userProfile: {
      id: 1,
      image: false,
      name: "Nagi",
      category: "otheruse",
    },
    itemContent: {
      id: 1,
      title: "Mandrake",
      sections: [
        {
          type: "image",
          content:
            "https://images.unsplash.com/photo-1540206395-68808572332f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=562&q=80",
        },
        {
          type: "splitText",
          content: ["Pay: 20000원", "2021-03-31\n/2021-04-01"],
        },
      ],
      commentCount: 0,
      bookmarkedCount: 0,
      bookmarked: false,
    },
  },
  {
    userProfile: {
      id: 1,
      image: false,
      name: "Nagi",
      category: "otheruse",
    },
    itemContent: {
      id: 1,
      title: "Issue",
      sections: [
        {
          type: "image",
          content:
            "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          type: "splitText",
          content: ["Pay: 20000원", "2021-03-31\n/2021-04-01"],
        },
      ],
      commentCount: 0,
      bookmarkedCount: 0,
      bookmarked: false,
    },
  },
  {
    userProfile: {
      id: 1,
      image: false,
      name: "Nagi",
      category: "otheruse",
    },
    itemContent: {
      id: 1,
      title: "Issue",
      sections: [
        {
          type: "image",
          content:
            "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          type: "splitText",
          content: ["Pay: 20000원", "2021-03-31\n/2021-04-01"],
        },
      ],
      commentCount: 0,
      bookmarkedCount: 0,
      bookmarked: false,
    },
  },
  {
    userProfile: {
      id: 1,
      image: false,
      name: "Nagi",
      category: "otheruse",
    },
    itemContent: {
      id: 1,
      title: "Issue",
      sections: [
        {
          type: "image",
          content:
            "https://images.unsplash.com/photo-1455218873509-8097305ee378?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        },
        {
          type: "splitText",
          content: ["Pay: 20000원", "2021-03-31\n/2021-04-01"],
        },
      ],
      commentCount: 0,
      bookmarkedCount: 0,
      bookmarked: false,
    },
  },
  {
    userProfile: {
      id: 1,
      image: false,
      name: "Nagi",
      category: "otheruse",
    },
    itemContent: {
      id: 1,
      title: "Issue",
      sections: [
        {
          type: "image",
          content:
            "https://images.unsplash.com/photo-1608094510970-d3eed1918d77?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        },
        {
          type: "splitText",
          content: ["Pay: 20000원", "2021-03-31\n/2021-04-01"],
        },
      ],
      commentCount: 0,
      bookmarkedCount: 0,
      bookmarked: false,
    },
  },
  {
    userProfile: {
      id: 1,
      image: false,
      name: "Nagi",
      category: "otheruse",
    },
    itemContent: {
      id: 1,
      title: "Issue",
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
      commentCount: 0,
      bookmarkedCount: 0,
      bookmarked: false,
    },
  },
  {
    userProfile: {
      id: 1,
      image: false,
      name: "Nagi",
      category: "otheruse",
    },
    itemContent: {
      id: 1,
      title: "Issue",
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
      commentCount: 0,
      bookmarkedCount: 0,
      bookmarked: false,
    },
  },
];

function ContactMain() {
  const JSXListItemData = listItemData.map((data, index) => {
    return (
      <div className="grid-item">
        <ListItem {...data} key={index} />
      </div>
    );
  });
  const [listItems, setListItems] = useState(JSXListItemData);
  // const { refMasonry } = useMasonry(listItems);
  useEffect(() => {
    let masonry = new Masonry(".grid", {
      fitWidth: true,
      columnWidth: 360,
      itemSelector: ".grid-item",
    });
    // masonry.reloadItems();
  }, []);

  return (
    <div className="contactlist">
      <div className="bar">
        <div className="bar_left">
          <HoverDropdown />
        </div>
        <div className="bar_right">
          <SearchForm />
          <ClickDropdown />
          <LabelCheckbox />
          <div className="contact_create">
            <a className="create_btn" href="{% url 'contact:contact_create' %}">
              <i className="far fa-plus-square"></i>
            </a>
          </div>
        </div>
      </div>

      {/* <!--contact_list--> */}
      <div className="grid">{listItems}</div>
      <button
        onClick={() => {
          setListItems(0);
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

export default ContactMain;
