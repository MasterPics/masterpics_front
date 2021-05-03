import "../css/module/RandomMagazine.css";

function RandomMagazine() {
    return (
        <div className="page">
            <div className="left part-1">
                <div className="left-top">
                    <img src="https://images.unsplash.com/photo-1596760020480-3b330a990539?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=935&q=80" className="left-top-photo"/>   
                    <p className="recommendation-collage">recommendation collage</p>
                </div>
                <div className="left-bottom">
                    <img src="https://images.unsplash.com/photo-1616740386718-6a4e42e3cf02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" className="left-bottom-photo" />
                </div>
            </div>
            <div className="middle part-2">
                <div className="main-title">
                    <div className="main">
                        <div className="main-1">Random</div>
                        <div className="main-2">Magazine</div>   
                    </div>
                    <div className="sub">with passionate artists</div>
                </div>
                <div className="middle-middle">
                    <div className="middle-promote">다양한 아티스트들의 작업물을 확인하세요</div>
                    <img src="https://images.unsplash.com/photo-1615537572530-4c76817865c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" className="middle-photo" />
                    <div className="middle-bottom-recommend">contact and portfolio website for passionate artists. phoing provides web services for personal photo work.</div>
                </div>
            </div>
            <div className="right part-3">
                <div className="right-top">
                    <img src="https://images.unsplash.com/photo-1614788466123-1ec2a5833087?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" className="right-top-photo"/>
                    <div className="recommendation-random-collage">recommendation random collage</div>
                </div>
                <div className="right-bottom">
                    <img src="https://images.unsplash.com/photo-1618278096912-d14cda36d45b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80" className="right-bottom-photo" />
                </div>
            </div> 
        </div>  
    )
}

export default RandomMagazine;