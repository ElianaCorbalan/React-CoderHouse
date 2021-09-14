import React, { useState } from 'react';
import { contexto } from "../Cart/CartContext";
import { useContext } from 'react';
import { firestore } from "../firebase";
import firebase from 'firebase/app';


const Form = () => {
    const { cart, nombre, setNombre, telefono, setTelefono, email, setEmail, precioTotal, clear } = useContext(contexto);
    const [error, setError] = useState(false);
    const [pedidoId, setPedidoId] = useState();
    const [total, setTotal] = useState();
    const [procesado, setProcesado] = useState(false);

    const db = firestore
    const pedidos = db.collection("pedidos");

    const guardarNombre = (e) => {
        setNombre(e.target.value)
    }
    const guardarTelefono = (e) => {
        setTelefono(e.target.value)
    }
    const guardarEmail = (e) => {
        setEmail(e.target.value)
    }

    const validarCampos = () => {
        if (nombre.trim().length && telefono.trim().length && email.trim().length) {
            return true
        } else {
            return false
        }
    }

    const realizarPedido = (e) => {
        e.preventDefault();
        if (validarCampos()) {
            const newPedido = {
                buyer: { nombre, telefono, email },
                items: cart,
                fecha: firebase.firestore.Timestamp.fromDate(new Date()),
                total: precioTotal,
            };
            pedidos.add(newPedido).then(({ id }) => {
                setPedidoId(id); 
                setError(false)
                setProcesado(true)
                setTotal(precioTotal)
                clear();
            }).catch(error => {
                setError(error); 
            }).finally(() => {
                setError(false)
                setEmail("");
                setNombre("");
                setTelefono("");
            });
        }
    }

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6 p-3">
                    <form className="formCart mb-5">
                        {error ? <p className="msjError text-danger">Por favor completar los datos</p> : null}
                        <div className="mb-3">
                            <label >Nombre completo:</label>
                            <input type="text" className="form-control" placeholder="Ingrese su nombre y apellido" id="nombre" required onChange={guardarNombre} />
                        </div>
                        <div className="mb-3">
                            <label >Teléfono:</label>
                            <input type="tel" className="form-control" placeholder="Ingrese su Teléfono" id="telefono" required onChange={guardarTelefono} />
                        </div>
                        <div className="mb-3">
                            <label >Email:</label>
                            <input type="email" className="form-control" placeholder="Ingrese su Email" id="email" required  onChange={guardarEmail} />
                        </div>
                        <div className="my-4">
                            <input className="form-check-input" type="checkbox" value="" required/>
                            <label className="form-check-label">
                                Acepto terminos y condiciones
                            </label>
                        </div>
                        {cart && (
                            <button type="submit" className="btn btn-warning" onClick={realizarPedido}>Enviar y Finalizar</button>
                        )}
                    </form>
                </div>
                {
                    procesado ?
                        <div className="alert alert-success col-md-6 p-3 m-5" style={{ width:'400px', height:'250px'}} role="alert">
                            <h4 className="alert-heading">Excelente!</h4>
                            <p>Su compra ha sido procesada con éxito por un total de $ {total}</p>
                            <strong><h5 className="pedido">Número de orden: <span> {pedidoId}</span></h5></strong>
                        </div>
                        :
                        <div className="mt-4 col-md-3 alert alert-light" role="alert">
                            <strong>Complete los datos para proceder con su orden por favor</strong>
                        </div>
                }
                </div>
            </div>
    )
}

export default Form;