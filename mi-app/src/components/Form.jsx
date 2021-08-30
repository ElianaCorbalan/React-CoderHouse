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
                setPedidoId(id); // succes
                setError(false)
                setProcesado(true)
                setTotal(precioTotal)
                clear();
            }).catch(error => {
                setError(error); // error
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
                <div className="col-md-4 p-3">
                    <form className="formCart mb-5">
                        {error ? <p className="msjError text-danger">Por favor completar los datos</p> : null}
                        <div className="mb-3">
                            <label >Nombre:</label>
                            <input type="text" class="form-control" placeholder="Ingrese su Nombre" id="nombre" onChange={guardarNombre} />
                        </div>
                        <div className="mb-3">
                            <label >Teléfono:</label>
                            <input type="tel" class="form-control" placeholder="Ingrese su Teléfono" id="telefono" onChange={guardarTelefono} />
                        </div>
                        <div className="mb-3">
                            <label >Email:</label>
                            <input type="email" class="form-control" placeholder="Ingrese su Email" id="email" onChange={guardarEmail} />
                        </div>
                        {cart && (
                            <button type="submit" class="btn btn-warning" onClick={realizarPedido}>Enviar y Finalizar</button>
                        )}

                    </form>
                </div>
                {
                    procesado ?
                        <div className="col-md-6 mt-4">
                            <h4>Su compra ha sido procesada con éxito por un total de $ {total}</h4>
                            <h5 className="pedido">Número de orden: <span> {pedidoId}</span></h5>
                        </div>
                        :
                        <div className="col-md-6">
                            <strong>Complete los datos para proceder con su orden por favor</strong>
                        </div>
                }
            </div>
        </div>
    )
}

export default Form;