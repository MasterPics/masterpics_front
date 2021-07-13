import { useEffect, useState } from 'react';
import '../../css/router/profile/ProfileMain.css';
import useMasonry from '../../hooks/useMasonry';
import SimpleCard from '../../module/SimpleCard';
import FilterList from '../../module/FilterList';
import ProfileCard from '../../module/ProfileCard';

const itemData = [
    {
        title: 'flower makeup',
        image:
            'https://images.unsplash.com/photo-1547997256-cdbe00ada4f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80',
        like: 50,
        view: 100,
    },
];

function ProfileMain({ user }) {
    const [items, setItems] = useState(null);
    useEffect(() => {
        let JSXListItemData = [];
        for (let i = 0; i < 20; i++) {
            JSXListItemData.push(
                <div className="grid-item" key={i}>
                    <SimpleCard {...itemData[0]} key={i} />
                </div>
            );
        }
        setItems(JSXListItemData);
    }, []);
    const { refMasonry } = useMasonry(items, {
        fitWidth: true,
        columnWidth: '.grid-sizer',
        itemSelector: '.grid-item',
        initLayout: true,
    });

    const filters = [
        { name: '포트폴리오', default: true, subCategory:[
			{name:"나의 포트폴리오", default : true},
			{name: "태그된 목록"},
		] },
        { name: '게시글', subCategory:[
			{name:"컨택트", default : true},
			{name: "플레이스"},
		] },
    ];

    return (
        <div className="ProfileMain">
                <ProfileCard user={user} />

                <div className="posts_area">
                    <FilterList filters={filters} many={false} />
									
										<div className="posts_container">
                    	<div ref={refMasonry}>
                      	  <div className="grid-sizer"></div>
                        	{items}
                    	</div>
										</div>
            </div>
        </div>
    );
}

export default ProfileMain;