import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className='border-top py-4 bg-dark'>
            <div className='container'>
                <div className='row justify-content-between align-items-start'>
                    <div className='col-md-2'>
                        <div className='row'>
                        </div>
                        <div className='row'>
                            <div className='col-12 text-white'>
                                <div className='row'>
                                    <div className='col-1'>
                                        <i className='bi bi-instagram'></i>
                                    </div>
                                    <div className='col'>
                                        <p className='m-0'><i class="fab fa-instagram"></i> Instagram</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-1'>
                                        <i className='bi bi-telephone'></i>
                                    </div>
                                    <div className='col'>
                                        <p className='m-0'><i class="fas fa-phone-alt"></i> Telefono</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-1'>
                                        <i className='bi bi-envelope'></i>
                                    </div>
                                    <div className='col'>
                                        <p className='m-0'><i class="fas fa-at"></i> Email</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 text-white'>
                        <div className='row mb-2'>
                            <p className='m-0 fs-5 text-center fw-bold'>Suscribete a nuestro Newsletter</p>
                        </div>
                        <form className='row gx-2 align-items-center'>
                            <div className='col-9'>
                                <input
                                    className='form-control'
                                    type='text'
                                    placeholder='email'
                                />
                            </div>
                            <div className='col-3'>
                                <button className='btn btn-warning'>
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-2 text-white'>
                        <div className='row'>
                            <div className='col-12'>
                                <p className='m-0 fs-5 text-start fw-bold'>Secciones</p>
                            </div>
                        </div>
                        <div className='row ps-2'>
                            <Link
                                to='/'
                                className='col-12 text-decoration-none'
                            >
                                <p className='m-0 fs-6 text-start text-white'>
                                    Home
                                </p>
                            </Link>
                            <Link
                                to='/categories/Cremas'
                                className='col-12 text-decoration-none'
                            >
                                <p className='m-0 fs-6 text-start text-white'>
                                    Cremas
                                </p>
                            </Link>
                            <Link
                                to='/categories/MakeUp'
                                className='col-12 text-decoration-none'
                            >
                                <p className='m-0 fs-6 text-start text-white'>
                                    MakeUp
                                </p>
                            </Link>
                            <Link
                                to='/categories/accesorios'
                                className='col-12 text-decoration-none'
                            >
                                <p className='m-0 fs-6 text-start text-white'>
                                    Accesorios
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <p className='m-0 text-muted text-center'>
                        <span>
                            <i className='bi bi-linkedin me-1 text-muted'></i>
                        </span>
                        Autor: Eliana Corbalan - {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    );
}
