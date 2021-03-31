import HoverDropdown from "../../module/HoverDropdown";
import SearchForm from "../../module/SearchForm";
import ClickDropdown from "../../module/ClickDropdown";
import LabelCheckbox from "../../module/LabelCheckbox";
import ListItem from "../../module/ListItem";
import "./ContactMain.css";

const ListItemData = [
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
      thumbnailUrl:
        "https://images.unsplash.com/photo-1617103901487-3f2714ec9692?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=886&q=80",
      pay: 50000,
      is_closed: false,
      start_date: "2021-03-31",
      end_date: "2021-04-01",
      commentCount: 0,
      bookmarkedCount: 0,
      bookmarked: false,
    },
  },
  {
    userProfile: {
      image: "",
      name: "Nagi",
      category: "otheruse",
    },
    itemContent: {
      title: "Lorem Ipsum",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1617103901487-3f2714ec9692?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=886&q=80",
      pay: 50000,
      is_closed: false,
      start_date: "2021-03-31",
      end_date: "2021-04-01",
      commentCount: 20,
      bookmarkedCount: 10,
      bookmarked: true,
    },
  },
  {
    userProfile: {
      image: "",
      name: "Nagi",
      category: "otheruse",
    },
    itemContent: {
      title: "Lorem Ipsum",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1616627562215-43d8db4e5be6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      pay: 50000,
      is_closed: false,
      start_date: "2021-03-31",
      end_date: "2021-04-01",
      commentCount: 2,
      bookmarkedCount: 8,
      bookmarked: false,
    },
  },
  {
    userProfile: {
      image: "",
      name: "Nagi",
      category: "otheruse",
    },
    itemContent: {
      title: "Lorem Ipsum",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1617118658610-916b54a8c334?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
      pay: 50000,
      is_closed: false,
      start_date: "2021-03-31",
      end_date: "2021-04-01",
      commentCount: 1,
      bookmarkedCount: 1,
      bookmarked: true,
    },
  },
  {
    userProfile: {
      image: "",
      name: "Nagi",
      category: "otheruse",
    },
    itemContent: {
      title: "Lorem Ipsum",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1617121361721-618914459dc8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      pay: 50000,
      is_closed: false,
      start_date: "2021-03-31",
      end_date: "2021-04-01",
      commentCount: 13,
      bookmarkedCount: 12,
      bookmarked: false,
    },
  },
  {
    userProfile: {
      image: false,
      name: "Nagi",
      category: "otheruse",
    },
    itemContent: {
      title: "Lorem Ipsum",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1617103901487-3f2714ec9692?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=886&q=80",
      pay: 50000,
      is_closed: false,
      start_date: "2021-03-31",
      end_date: "2021-04-01",
      commentCount: 0,
      bookmarkedCount: 0,
      bookmarked: false,
    },
  },
  {
    userProfile: {
      image: "",
      name: "Nagi",
      category: "otheruse",
    },
    itemContent: {
      title: "Lorem Ipsum",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1617103901487-3f2714ec9692?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=886&q=80",
      pay: 50000,
      is_closed: false,
      start_date: "2021-03-31",
      end_date: "2021-04-01",
      commentCount: 20,
      bookmarkedCount: 10,
      bookmarked: true,
    },
  },
  {
    userProfile: {
      image: "",
      name: "Nagi",
      category: "otheruse",
    },
    itemContent: {
      title: "Lorem Ipsum",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1616627562215-43d8db4e5be6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      pay: 50000,
      is_closed: false,
      start_date: "2021-03-31",
      end_date: "2021-04-01",
      commentCount: 2,
      bookmarkedCount: 8,
      bookmarked: false,
    },
  },
  {
    userProfile: {
      image: "",
      name: "Nagi",
      category: "otheruse",
    },
    itemContent: {
      title: "Lorem Ipsum",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1617118658610-916b54a8c334?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
      pay: 50000,
      is_closed: false,
      start_date: "2021-03-31",
      end_date: "2021-04-01",
      commentCount: 1,
      bookmarkedCount: 1,
      bookmarked: true,
    },
  },
  {
    userProfile: {
      image: "",
      name: "Nagi",
      category: "otheruse",
    },
    itemContent: {
      title: "Lorem Ipsum",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1617121361721-618914459dc8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      pay: 50000,
      is_closed: false,
      start_date: "2021-03-31",
      end_date: "2021-04-01",
      commentCount: 13,
      bookmarkedCount: 12,
      bookmarked: false,
    },
  },
];

function ContactMain() {
  return (
    <div class="contactlist">
      <div class="bar">
        <div class="bar_left">
          <HoverDropdown />
        </div>
        <div class="bar_right">
          <SearchForm />
          <ClickDropdown />
          <LabelCheckbox />
          <div class="contact_create">
            <a class="create_btn" href="{% url 'contact:contact_create' %}">
              <i class="far fa-plus-square"></i>
            </a>
          </div>
        </div>
      </div>

      {/* <!--contact_list--> */}
      <div class="grid">
        {ListItemData.map((data) => {
          return <ListItem {...data} />;
        })}
      </div>
      <div>
        {/* <!-- 버튼 누르면 상단으로 이동 -->
                <div onclick="topFunction()" id="myBtn" title="Go to top"><i class="fas fa-arrow-circle-up"></i></div>
                
                
                
                <!-- infinite scroll -->
                {% if contacts.has_next %}
                <a class="infinite-more-link" href="?page={{ contacts.next_page_number }}">
                    <div class="loading" style="display: none;">Loading...</div>
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
