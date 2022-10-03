import React from 'react'
import img from '../assets/Screenshot_1.png'
import './Styles/projects.css'

export const Projects = () => {
    return (
        <div className="projects">
            <div className="container">
                <div className="info">
                    <span className='titleProjects'>
                        Estos son algunos de los proyectos que realicé.
                    </span>
                </div>
                <div className="cardsFather">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card bg-dark text-white">
                                <img src={img} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card bg-dark text-white">
                                <img src={img} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card bg-dark text-white">
                                <img src={img} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card bg-dark text-white">
                                <img src={img} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
