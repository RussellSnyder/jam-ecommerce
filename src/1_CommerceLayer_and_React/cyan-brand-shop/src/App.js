import React from 'react';
import axios from 'axios';
import './App.css';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// loads the Icon plugin
UIkit.use(Icons);

const dudHref = null

const getAcessToken = () => {
    return axios({
        method: 'post',
        url: `https://the-cyan-brand-75.commercelayer.io/oauth/token`,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        data: {
            "grant_type": "client_credentials",
            "client_id": "e3f24e4a6fb9a334306ec7da84d3d17331bd43506119794e7cdc9e9171957f7b",
            "scope": "market:1477"
        },
    })
}

const getSkuData = (accessToken) => {
    return axios({
        method: 'get',
        url: '/api/skus',
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/vnd.api+json"
        },
        params: {
            include: "prices"
        }
    })
}


const Pagination = ({numPages}) => {
    // TODO take into account current page to pass active and arrows
    const internalPages = [];
    for (let i = 1; i < numPages; i++) {
        internalPages.push(<li key={`page-${i}`}><a href={dudHref}>{i}</a></li>)
    }

    return <ul className="uk-pagination uk-flex-center">
        <li><a href={dudHref}><span uk-icon="icon: chevron-left"/></a></li>
        {internalPages}
        <li><a href={dudHref}><span uk-icon="icon: chevron-right"/></a></li>
    </ul>
}

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            accessToken: null,
            skuData: []
        }
    }

    componentDidMount() {
        getAcessToken()
                .then(res => getSkuData(res.data.access_token))
                .then(res => {
                    const {data, meta, included} = res.data;
                    const priceData = included.filter(item => item.type === "prices")
                    this.setState({data, meta, included, priceData})
                })
                .catch(err => console.error(err))
    }

    render() {

        const {data, meta, priceData} = this.state

        return (
                <div id="cyan-shop">
                    <nav className="uk-navbar-container uk-margin-medium-bottom" data-uk-navbar>
                        <a className="uk-navbar-item uk-logo" href={dudHref}>Cyan Shop</a>
                        <div className="uk-navbar-right">
                            <ul className="uk-navbar-nav">
                                <li>
                                    <a href={dudHref}>
                                        Hot List
                                    </a>
                                </li>
                                <li>
                                    <a href={dudHref}>
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a href={dudHref}>
                                        About
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="uk-container">
                        {meta && <h3>
                            {meta.record_count} over {meta.page_count} pages
                        </h3>}
                        <div className="uk-child-width-1-3@m uk-child-width-1-2@s" data-uk-grid={true}>
                            {data && data.map((article, i) => {
                                const {name, description, image_url, code} = article.attributes
                                return <div key={code}>
                                    <div className="uk-card uk-card-default">
                                        <div className="uk-card-media-top">
                                            <img src={image_url} alt={name}/>
                                        </div>
                                        <div className="uk-card-body">
                                            <h3 className="uk-card-title">{name}</h3>
                                            <p>{description}</p>
                                        </div>
                                        <div className="uk-card-footer">
                                            {priceData[i].attributes.formatted_amount}
                                            <a href={dudHref} className="uk-button uk-button-text uk-float-right">
                                                Item Details <span className="uk-margin-small-left"
                                                                   uk-icon="icon: expand"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                    {meta && <Pagination numPages={meta.page_count} />}
                </div>
        )
    }
}

export default App;
