import React from 'react';

import WebsiteList from '../website-list/website-list.component';

import './directory.styles.scss'

class Directory extends React.Component {
    constructor(){
        super();
        this.state = {
            websites: [
                {
                    title: 'Tecnipapel',
                    imageUrl: 'https://res.cloudinary.com/jhonb07/image/upload/v1603210925/registro-react/tecnipapel_mhom2r.png',
                    id: 1,
                    websiteUrl: 'https://tecnipapel.com.co/',
                    linkUrl: 'tecnipapel'
                },
                {
                    title: 'Pitigreen',
                    imageUrl: 'https://res.cloudinary.com/jhonb07/image/upload/v1603211164/registro-react/pitigreen_bkyoe8.png',
                    id: 2,
                    websiteUrl: 'https://pitigreen.com/',
                    linkUrl: ''
                },
                {
                    title: 'Proteseg',
                    imageUrl: "https://res.cloudinary.com/jhonb07/image/upload/v1603212199/registro-react/proteseg_popmte.png",
                    id: 3,
                    websiteUrl: 'https://proteseg.com.co/',
                    linkUrl: ''

                },
                {
                    title: 'Salud Visual',
                    imageUrl: 'https://res.cloudinary.com/jhonb07/image/upload/v1603212410/registro-react/salud-visual_p5iinh.png',
                    id: 4,
                    websiteUrl: 'https://gruposaludvisual.com/',
                    size: 'large',
                    linkUrl: ''
                },
                {
                    title: 'Ingenieria de Sonrirsas',
                    imageUrl: 'https://res.cloudinary.com/jhonb07/image/upload/v1603212775/registro-react/ingenieria-de-sonrisas_vmwfki.png',
                    id: 5,
                    websiteUrl: 'https://ingenieriadesonrisas.com/',
                    size: 'large',
                    linkUrl: ''
                }
            ]
        };

    }
    render(){
        return(
            <div className="directory-menu">
                {
                    this.state.websites.map(({  id, ...otherWebsiteProps}) =>(
                        <WebsiteList 
                        key={id} {...otherWebsiteProps} />
                    ))
                }
            </div>
        );
    }
}

export default Directory;