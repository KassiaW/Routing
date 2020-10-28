import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Framework from '../Framework/Framework';
import './Frameworks.css';

class Frameworks extends Component {
    state = {
        framework: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }



    render () {
        return (
            <div>
                <h1>Code Frameworks</h1>
                    <section className="Frameworks">
                        {
                            
                            this.state.framework.map( framework => {
                                // console.log(course);
                                return (
                                    <Link key={framework.id} to={{ 
                                        pathname: this.props.match.url + '/' + framework.id, 
                                        search: '?title=' + framework.title
                                    }}>
                                        <article className="Course" >{framework.title}</article>
                                    </Link>

                                );
                            } )
                        }
                        
                    </section>
                    <Route path={this.props.match.url + '/:id'} component={Framework} />
            </div>
            
        );
    }
}

export default Frameworks;

